document.querySelector('.greenbutton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    // Obtener los valores de las contraseñas
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    
    // Eliminar cualquier mensaje de error previo y restablecer el estilo de los campos
    clearErrors();

    // Comprobar si las contraseñas son iguales
    if (password.value !== confirmPassword.value) {
        showError(password, confirmPassword, "Passwords don't match.");
    } else {
        alert("Registration Complete.");
        // Aquí puedes agregar la lógica para enviar el formulario o proceder
    }
});

// Función para mostrar el error debajo de los campos de contraseña
function showError(passwordField, confirmPasswordField, message) {
    // Cambiar el borde a rojo
    passwordField.style.border = "2px solid red";
    confirmPasswordField.style.border = "2px solid red";

    // Crear un mensaje de error
    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    errorMessage.style.color = "red";
    errorMessage.classList.add("error-message"); // Agregar clase para manejo

    // Insertar el mensaje de error debajo del segundo campo de contraseña
    confirmPasswordField.parentElement.appendChild(errorMessage);
}

// Función para limpiar los errores previos y restablecer el estilo
function clearErrors() {
    // Eliminar el estilo rojo de los bordes
    document.getElementById('password').style.border = "";
    document.getElementById('confirm-password').style.border = "";

    // Eliminar el mensaje de error si existe
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
}
