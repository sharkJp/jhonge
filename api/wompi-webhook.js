import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  const event = req.body;

  if (!event?.data?.transaction) {
    return res.status(200).send("ignored");
  }

  const t = event.data.transaction;

  await supabase.from("donaciones").upsert({
    wompi_id: t.id,
    referencia: t.reference,
    monto: t.amount_in_cents,
    estado: t.status,
    metodo: t.payment_method_type
  });

  return res.status(200).send("ok");
}
