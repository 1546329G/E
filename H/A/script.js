document.addEventListener('DOMContentLoaded', () => {
    const bubbleToggle = document.getElementById('bubble-toggle');
    const bubbleContent = document.getElementById('bubble-content');
    const closeBubble = document.getElementById('close-bubble');

    // Función para alternar la visibilidad de la burbuja
    function toggleBubble() {
        bubbleContent.classList.toggle('hidden');
    }

    // Event listener para el botón de la burbuja
    bubbleToggle.addEventListener('click', toggleBubble);

    // Event listener para el botón de cerrar dentro de la burbuja
    closeBubble.addEventListener('click', toggleBubble);

    // Opcional: Cerrar la burbuja si se hace clic fuera de ella
    document.addEventListener('click', (event) => {
        // Si el clic no fue en el botón de la burbuja ni en el contenido de la burbuja
        if (!bubbleContent.contains(event.target) && !bubbleToggle.contains(event.target) && !bubbleContent.classList.contains('hidden')) {
            bubbleContent.classList.add('hidden');
        }
    });
});