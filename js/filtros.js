document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.filter-btn');
    const proyectos = document.querySelectorAll('.card-producto');

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            // 1. Gestionar clases de botones
            botones.forEach(btn => btn.classList.remove('active'));
            boton.classList.add('active');

            // 2. Obtener la categoría del data-attribute
            const filtro = boton.getAttribute('data-categoria');

            // 3. Filtrar las tarjetas
            proyectos.forEach(proyecto => {
                // Si el filtro es "todos", mostramos siempre. 
                // Si no, verificamos si la card tiene la clase del filtro.
                if (filtro === 'todos' || proyecto.classList.contains(filtro)) {
                    proyecto.style.display = 'block';
                    // Pequeña animación de entrada
                    proyecto.style.opacity = '0';
                    setTimeout(() => {
                        proyecto.style.opacity = '1';
                        proyecto.style.transition = 'opacity 0.4s ease';
                    }, 10);
                } else {
                    proyecto.style.display = 'none';
                }
            });
        });
    });
});