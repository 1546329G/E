document.addEventListener('DOMContentLoaded', () => {
    const showClientsButton = document.getElementById('show-clients-button');
    const clientsModal = document.getElementById('clients-modal');
    const closeModalButton = document.getElementById('close-modal-button');
    const anotherCloseButton = document.getElementById('another-close-button'); // Nuevo botón de cerrar en el footer

    // Función para mostrar el modal
    function showModal() {
        clientsModal.classList.remove('hidden');
        // Opcional: Para evitar el scroll del body cuando el modal está abierto
        document.body.style.overflow = 'hidden';
    }

    // Función para ocultar el modal
    function hideModal() {
        clientsModal.classList.add('hidden');
        // Volver a habilitar el scroll del body
        document.body.style.overflow = '';
    }

    // Event listener para el botón "Mostrar Clientes"
    showClientsButton.addEventListener('click', showModal);

    // Event listener para el botón "X" de cerrar en el encabezado del modal
    closeModalButton.addEventListener('click', hideModal);

    // Event listener para el botón "Cerrar" en el footer del modal
    anotherCloseButton.addEventListener('click', hideModal);

    // Cerrar el modal al hacer clic fuera de su contenido (en el overlay oscuro)
    clientsModal.addEventListener('click', (event) => {
        if (event.target === clientsModal) { // Solo si el clic fue directamente en el overlay
            hideModal();
        }
    });

    // Cerrar el modal al presionar la tecla ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !clientsModal.classList.contains('hidden')) {
            hideModal();
        }
    });
});