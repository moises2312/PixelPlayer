$(document).ready(function() {  
    $('#submitBtn').click(function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    let isValid = true;

    // Validar categoría
    if ($('#categoria').val() === "") {
        $('#categoria').addClass('is-invalid');
        isValid = false;
    } else {
        $('#categoria').removeClass('is-invalid');
    }

    // Validar nombre del producto
    if ($('#nombre').val() === "") {
        $('#nombre').addClass('is-invalid');
        isValid = false;
    } else {
        $('#nombre').removeClass('is-invalid');
    }

    // Validar cantidad
    let cantidad = $('#cantidad').val();
    if (cantidad === "" || isNaN(cantidad) || cantidad <= 0) {
        $('#cantidad').addClass('is-invalid');
        isValid = false;
    } else {
        $('#cantidad').removeClass('is-invalid');
    }

    if (isValid) {
        alert("Agregado con exito");
    } else {
        alert("Por favor, debes llenar todas las celdas");
    }
});
    $('#resetBtn').click(function() {
    $('#categoria, #nombre, #cantidad').removeClass('is-invalid');
});
});
    