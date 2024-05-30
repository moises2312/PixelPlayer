//////////////////////////////////////////////////////////////////////Mis datos

$(document).ready(function () {

  // Agregar método de validación para RUT chileno
  $.validator.addMethod(
    "rutChileno",
    function (value, element) {
      // Validar que el RUT tenga el formato correcto (8 o 9 dígitos + guión + dígito verificador)
      var rutPattern = /^\d{7,8}-[\dK]$/;
      if (!rutPattern.test(value)) {
        return false;
      }

      // Validar el dígito verificador
      var rutSinGuion = value.replace("-", "");
      var rut = rutSinGuion.slice(0, -1);
      var dv = rutSinGuion.slice(-1);
      var factor = 2;
      var sum = 0;
      for (var i = rut.length - 1; i >= 0; i--) {
        sum += parseInt(rut.charAt(i)) * factor;
        factor = factor === 7 ? 2 : factor + 1;
      }
      var dvCalculado = 11 - (sum % 11);
      dvCalculado =
        dvCalculado === 11
          ? "0"
          : dvCalculado === 10
          ? "K"
          : dvCalculado.toString();

      return dv === dvCalculado;
    },
    "El RUT no es válido (escriba sin puntos y con guión)"
  );

  $.validator.addMethod(
    "pwcheck",
    function (value) {
      return (
        /[A-Z]/.test(value) &&
        /[a-z]/.test(value) &&
        /[0-9]/.test(value) &&
        /[^A-Za-z0-9]/.test(value)
      );
    },
    "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial."
  );

  // Agregar método de validación para correo
  $.validator.addMethod(
    "emailCompleto",
    function (value, element) {
      // Expresión regular para validar correo electrónico
      var regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/;

      // Validar correo electrónico con la expresión regular
      return regex.test(value);
    },
    "El formato del correo no es válido"
  );

  $.validator.addMethod("soloLetras", function(value, element) {

    return this.optional(element) || /^[a-zA-Z\s]*$/.test(value);

  }, "Sólo se permiten letras y espacios en blanco.");

  // El siguiente Javascript obliga a que la caja de texto del rut, siempre escriba la letra "K" en mayúscula
  if (document.getElementById("rut")) {
    document.getElementById("rut").addEventListener("keyup", function (e) {
      e.target.value = e.target.value.toUpperCase();
    });
  }

  $("#registromisdatos").validate({
    rules: {
      rut: {
        required: true,
        rutChileno: true,
      },
      nombre: {
        required: true,
        minlength: 3,
        soloLetras: true,
      },
      apellido: {
        required: true,
        minlength: 3,
        soloLetras: true,
      },
      correo: {
        required: true,
        emailCompleto: true,
      },
      direccion: {
        required: true,
        minlength: 10,
      },
      password: {
        required: true,
        minlength: 8,
        pwcheck: true,
      },
      password2: {
        required: true,
        equalTo: "#password",
      },
    },
    messages: {
      rut: {
        required: "El RUT es un campo requerido",
        rutChileno: "El RUT no es válido (escriba sin puntos y con guión)",
      },
      nombre: {
        required: "Por favor, ingrese su nombre",
        minlength: "El nombre debe tener al menos 3 caracteres",
        soloLetras: "El nombre sólo puede contener letras y espacios en blanco",
      },
      apellido: {
        required: "Por favor, ingrese su apellido",
        minlength: "El apellido debe tener al menos 3 caracteres",
        soloLetras: "El nombre sólo puede contener letras y espacios en blanco",
      },
      correo: {
        required: "Por favor, ingrese su correo electrónico",
        email: "Por favor, ingrese un correo electrónico válido",
      },
      direccion: {
        required: "Por favor, ingrese su dirección",
        minlength: "La dirección debe tener al menos 10 caracteres",
      },
      password: {
        required: "Por favor, ingrese una contraseña",
        minlength: "La contraseña debe tener al menos 8 caracteres",
      },
      password2: {
        required: "Por favor, repita su contraseña",
        equalTo: "Las contraseñas no coinciden",
      },
    },
  });

  //////////////////////////////////////////////////////////////////////Registrarrr

  $("#registroForm").validate({
    rules: {
      rut: {
        required: true,
        rutChileno: true,
      },
      nombre: {
        required: true,
        minlength: 3,
        soloLetras: true,
      },
      apellido: {
        required: true,
        minlength: 3,
        soloLetras: true,
      },
      correo: {
        required: true,
        emailCompleto: true,
      },
      direccion: {
        required: true,
        minlength: 10,
      },
      password: {
        required: true,
        minlength: 8,
        pwcheck: true,
      },
      password2: {
        required: true,
        equalTo: "#password",
      },
    },
    messages: {
      rut: {
        required: "El RUT es un campo requerido",
        rutChileno: "El RUT no es válido (escriba sin puntos y con guión)",
      },
      nombre: {
        required: "Por favor, ingrese su nombre",
        minlength: "El nombre debe tener al menos 3 caracteres",
        soloLetras: "El nombre sólo puede contener letras y espacios en blanco",
      },
      apellido: {
        required: "Por favor, ingrese su apellido",
        minlength: "El apellido debe tener al menos 3 caracteres",
        soloLetras: "El nombre sólo puede contener letras y espacios en blanco",
      },
      correo: {
        required: "Por favor, ingrese su correo electrónico",
        email: "Por favor, ingrese un correo electrónico válido",
      },
      direccion: {
        required: "Por favor, ingrese su dirección",
        minlength: "La dirección debe tener al menos 10 caracteres",
      },
      password: {
        required: "Por favor, ingrese una contraseña",
        minlength: "La contraseña debe tener al menos 8 caracteres",
      },
      password2: {
        required: "Por favor, repita su contraseña",
        equalTo: "Las contraseñas no coinciden",
      },
    },
  });

  ////////////////////////////////////////////////////////////////////////////////////////////////////////INGRESAR

  $("#formulario-ingresar").validate({
    rules: {
      correo: {
        required: true,
        emailCompleto: true,
      },
      password: {
        required: true,
        minlength: 8,
        pwcheck: true,
      },
    }, // --> Fin de reglas
    messages: {
      correo: {
        required: "El correo es un campo requerido",
        email: "El formato del correo no es válido",
      },
      password: {
        required: "Por favor, ingrese una contraseña",
        minlength: "La contraseña debe tener al menos 8 caracteres",
      },
    }, // --> Fin de mensajes
  });

  ////////////////////////////////////////////////////////////////////////////////////////////////////////USUARIO
  $("#formulario-usuario").validate({
    rules: {
      id: {
        required: true,
      },
      rut: {
        required: true,
        rutChileno: true,
      },
      nombre: {
        required: true,
        soloLetras: true,
        
      },
      apellido: {
        required: true,
        soloLetras: true,
      },
      correo: {
        required: true,
        emailCompleto: true,
      },
      direccion: {
        required: true,
      },
      password: {
        required: true,
        minlength: 8,
        pwcheck: true,
      },
    }, // --> Fin de reglas
    messages: {
      id: {
        required: "El ID es un campo requerido",
      },
      rut: {
        required: "El RUT es un campo requerido",
        rutChileno: "El RUT no es válido (escriba sin puntos y con guión)",
      },
      nombre: {
        required: "El nombre es un campo requerido",
        soloLetras: "El nombre sólo puede contener letras y espacios en blanco",
      },
      apellido: {
        required: "El apellido es un campo requerido",
        soloLetras:
          "El apellido sólo puede contener letras y espacios en blanco",
      },
      correo: {
        required: "Por favor, ingrese su correo electrónico",
        email: "Por favor, ingrese un correo electrónico válido",
      },
      direccion: {
        required: "La dirección es un campo requerido",
      },
      password: {
        required: "Por favor, ingrese una contraseña",
        minlength: "La contraseña debe tener al menos 8 caracteres",
      },
    }, // --> Fin de mensajes
  });

  ////////////////////////////////////////////////////////////////////////////////////////////////////////admin producto

  $("#validProductos").validate({
    rules: {
      id: {
        required: true,
      },
      categoria: {
        required: true,
      },
      nombre: {
        required: true,
      },
      descripcion: {
        required: true,
      },
      precio: {
        required: true,
        min: 0,
        number: true,
      },
      descuento_oferta: {
        required: true,
        min: 0,
        number: true,
      },
      descuento_subscrito: {
        required: true,
        min: 0,
        number: true,
      },
    }, // --> Fin de reglas
    messages: {
      id: {
        required: "El ID es un campo requerido",
      },
      categoria: {
        required: "La categoria es un campo requerido",
      },
      nombre: {
        required: "El nombre es un campo requerido",
      },
      descripcion: {
        required: "La descripcion es un campo requerido",
      },
      precio: {
        required: "El precio es un campo obligatorio",
      },
      descuento_oferta: {
        required: "El descuento oferta es un campo obligatorio",
      },
      descuento_subscrito: {
        required: "El el descuento por subscripcion es un campo obligatorio",
      },
    }, // --> Fin de mensajes
  });

////////////////////////////////////////////////////////////////////////////////////////////////////////admin bodega

  $("#product-bodega").validate({
    rules: {
      categoria: {
        required: true,
      },
      nombre: {
        required: true,
      },
      cantidad: {
        required: true,
        number: true,
        min: 0,
      },
    }, // --> Fin de reglas
    messages: {
      categoria: {
        required: "La categori es un campo requerido",
      },
      nombre: {
        required: "El nombre es un campo requerido",
      },
      cantidad: {
        required: "La cantidad es un campo requerido",
        number: "La cantidad debe ser un numero",
        min: "La cantidad debe ser un numero igual o mayor que 0",
      },
    }, // --> Fin de mensajes
  });

});
