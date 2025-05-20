document.addEventListener('DOMContentLoaded', () => {
    const showClientsButton = document.getElementById('show-clients-button');
    const clientsBubble = document.getElementById('clients-bubble');
    const closeClientsBubble = document.getElementById('close-clients-bubble');

    // Función para alternar la visibilidad de la burbuja de clientes
    function toggleClientsBubble() {
        clientsBubble.classList.toggle('hidden');
    }

    // Event listener para el botón "Mostrar Clientes"
    showClientsButton.addEventListener('click', (event) => {
        // Detiene la propagación del evento para evitar que el clic se registre en el document
        event.stopPropagation();
        toggleClientsBubble();
    });

    // Event listener para el botón "X" de cerrar dentro de la burbuja
    closeClientsBubble.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que se cierre por el clic en el documento
        toggleClientsBubble();
    });

    // Opcional: Cerrar la burbuja si se hace clic fuera de ella
    document.addEventListener('click', (event) => {
        // Si el clic no fue en el botón de mostrar clientes ni dentro de la burbuja de clientes
        // y la burbuja NO está oculta
        if (!clientsBubble.contains(event.target) && !showClientsButton.contains(event.target) && !clientsBubble.classList.contains('hidden')) {
            clientsBubble.classList.add('hidden'); // Oculta la burbuja
        }
    });
});