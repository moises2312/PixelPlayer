$(document).ready(function() {
    $('form.validProductos').on('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe
        let isValid = true;

        // Validar ID
        let id = $('#id').val();
        if (id === "" || isNaN(id)) {
            $('#id').addClass('is-invalid');
            isValid = false;
        } else {
            $('#id').removeClass('is-invalid');
        }

        // Validar categoría
        if ($('#categoria_producto').val() === "") {
            $('#categoria_producto').addClass('is-invalid');
            isValid = false;
        } else {
            $('#categoria_producto').removeClass('is-invalid');
        }

        // Validar nombre
        if ($('#nombre').val() === "") {
            $('#nombre').addClass('is-invalid');
            isValid = false;
        } else {
            $('#nombre').removeClass('is-invalid');
        }

        // Validar descripción
        if ($('#descripcion').val() === "") {
            $('#descripcion').addClass('is-invalid');
            isValid = false;
        } else {
            $('#descripcion').removeClass('is-invalid');
        }

        // Validar precio
        let precio = $('#precio').val();
        if (precio === "" || isNaN(precio) || parseFloat(precio) <= 0) {
            $('#precio').addClass('is-invalid');
            isValid = false;
        } else {
            $('#precio').removeClass('is-invalid');
        }

        // Validar descuento oferta
        let descuentoOferta = $('#descuento_oferta').val();
        if (descuentoOferta === "" || isNaN(descuentoOferta) || parseFloat(descuentoOferta) <= 0) {
            $('#descuento_oferta').addClass('is-invalid');
            isValid = false;
        } else {
            $('#descuento_oferta').removeClass('is-invalid');
        }

        // Validar descuento subscrito
        let descuentoSubscrito = $('#descuento_subscrito').val();
        if (descuentoSubscrito === "" || isNaN(descuentoSubscrito) || parseFloat(descuentoSubscrito) <= 0) {
            $('#descuento_subscrito').addClass('is-invalid');
            isValid = false;
        } else {
            $('#descuento_subscrito').removeClass('is-invalid');

        }

        if (isValid) {
            alert("Guardado con exito");
            // Puedes usar $(this).off('submit').submit(); para permitir el envío del formulario
        } else {
            alert("Por favor, corrige los errores");
        }
    });

    // Limpiar las validaciones al hacer reset
    $('button[type="reset"]').click(function() {
        $('.is-invalid').removeClass('is-invalid');
    });
});
