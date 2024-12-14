function handleSubmit(event) {
    // Evitar que el formulario recargue la página
    event.preventDefault();

    // Mostrar un mensaje de confirmación
    alert('¡Gracias! Tu información ha sido enviada.');

    // Redirigir al usuario después de 3 segundos
    setTimeout(() => {
        window.location.href = "#title"; // Redirige al encabezado principal
    }, 3000);
}
