import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE
);

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(200).json({ status: "alive" });
    }

    const event = req.body;

    if (!event || !event.data || !event.data.transaction) {
      return res.status(400).json({ error: "Invalid payload" });
    }

    const tx = event.data.transaction;

    const data = {
      wompi_transaction_id: tx.id,
      monto: tx.amount_in_cents,
      moneda: tx.currency,
      estado: tx.status,
      metodo_pago: tx.payment_method_type,
      email: tx.customer_email || null,
      referencia: tx.reference
    };

    const { error } = await supabase
      .from("donaciones")
      .upsert(data);

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ error: "DB insert failed" });
    }

    return res.status(200).json({ received: true });

  } catch (err) {
    console.error("Webhook crash:", err);
    return res.status(500).json({ error: "Webhook crashed" });
  }
}
