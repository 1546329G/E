document.addEventListener('DOMContentLoaded', () => {
    const showPatientInfoButton = document.getElementById('show-patient-info-button');
    const patientModal = document.getElementById('patient-modal');
    const closeModalButton = document.getElementById('close-modal-button');
    const anotherCloseButton = document.getElementById('another-close-button'); // Botón "Cerrar" en el footer

    function showModal() {
        patientModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Evita scroll del body
    }

    function hideModal() {
        patientModal.classList.add('hidden');
        document.body.style.overflow = ''; // Restaura scroll del body
    }

    showPatientInfoButton.addEventListener('click', showModal);
    closeModalButton.addEventListener('click', hideModal);
    anotherCloseButton.addEventListener('click', hideModal);

    // Cerrar el modal al hacer clic fuera de su contenido (en el overlay oscuro)
    patientModal.addEventListener('click', (event) => {
        if (event.target === patientModal) {
            hideModal();
        }
    });

    // Cerrar el modal al presionar la tecla ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !patientModal.classList.contains('hidden')) {
            hideModal();
        }
    });
});