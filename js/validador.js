//////////////////////////////////////////////////////////////////////Mis datos


$(document).ready(function () {
  // Agregar método de validación para RUT chileno
  $.validator.addMethod("rutChileno", function(value, element) {

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
    dvCalculado = dvCalculado === 11 ? "0" : dvCalculado === 10 ? "K" : dvCalculado.toString();

    return dv === dvCalculado;
    
  
  }, "El RUT no es válido (escriba sin puntos y con guión)");
  $.validator.addMethod("pwcheck", function(value) {
      return /[A-Z]/.test(value) 
          && /[a-z]/.test(value) 
          && /[0-9]/.test(value) 
          && /[^A-Za-z0-9]/.test(value) 
  }, "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.");
  // Agregar método de validación para correo
  $.validator.addMethod("emailCompleto", function(value, element) {

    // Expresión regular para validar correo electrónico
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/;

    // Validar correo electrónico con la expresión regular
    return regex.test(value);

  }, 'El formato del correo no es válido');
  // El siguiente Javascript obliga a que la caja de texto del rut, siempre escriba la letra "K" en mayúscula
  document.getElementById('rut').addEventListener('keyup', function(e) {
    e.target.value = e.target.value.toUpperCase();
  });

  $("#registromisdatos").validate({
      rules: {
          rut: {
              required: true,
              rutChileno: true
          },
          nombre: {
              required: true,
              minlength: 3
          },
          apellido: {
              required: true,
              minlength: 3
          },
          correo: {
            required: true,
            emailCompleto: true,
          },
          direccion: {
              required: true,
              minlength: 10
          },
          password: {
              required: true,
              minlength: 8,
              pwcheck: true
          },
          password2: {
              required: true,
              equalTo: "#password"
          }},
      messages: {
          rut: {
              required: "El RUT es un campo requerido",
              rutChileno: "El RUT no es válido (escriba sin puntos y con guión)"
          },
          nombre: {
              required: "Por favor, ingrese su nombre",
              minlength: "El nombre debe tener al menos 3 caracteres"
          },
          apellido: {
              required: "Por favor, ingrese su apellido",
              minlength: "El apellido debe tener al menos 3 caracteres"
          },
          correo: {
              required: "Por favor, ingrese su correo electrónico",
              email: "Por favor, ingrese un correo electrónico válido"
          },
          direccion: {
              required: "Por favor, ingrese su dirección",
              minlength: "La dirección debe tener al menos 10 caracteres"
          },
          password: {
              required: "Por favor, ingrese una contraseña",
              minlength: "La contraseña debe tener al menos 8 caracteres"
          },
          password2: {
              required: "Por favor, repita su contraseña",
              equalTo: "Las contraseñas no coinciden"
          }
      },
  });
});


$(document).ready(function () {
  // Agregar método de validación para RUT chileno
  $.validator.addMethod("rutChileno", function(value, element) {

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
    dvCalculado = dvCalculado === 11 ? "0" : dvCalculado === 10 ? "K" : dvCalculado.toString();

    return dv === dvCalculado;
    
  
  }, "El RUT no es válido (escriba sin puntos y con guión)");
  $.validator.addMethod("pwcheck", function(value) {
      return /[A-Z]/.test(value) 
          && /[a-z]/.test(value) 
          && /[0-9]/.test(value) 
          && /[^A-Za-z0-9]/.test(value) 
  }, "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.");
  // Agregar método de validación para correo
  $.validator.addMethod("emailCompleto", function(value, element) {

  // Expresión regular para validar correo electrónico
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/;

  // Validar correo electrónico con la expresión regular
    return regex.test(value);

  }, 'El formato del correo no es válido');
  // El siguiente Javascript obliga a que la caja de texto del rut, siempre escriba la letra "K" en mayúscula
  document.getElementById('rut').addEventListener('keyup', function(e) {
    e.target.value = e.target.value.toUpperCase();
  });

  $("#registroForm").validate({
      rules: {
          rut: {
              required: true,
              rutChileno: true
          },
          nombre: {
              required: true,
              minlength: 3
          },
          apellido: {
              required: true,
              minlength: 3
          },
          correo: {
            required: true,
            emailCompleto: true,
          },
          direccion: {
              required: true,
              minlength: 10
          },
          password: {
              required: true,
              minlength: 8,
              pwcheck: true
          },
          password2: {
              required: true,
              equalTo: "#password"
          }},
      messages: {
          rut: {
              required: "El RUT es un campo requerido",
              rutChileno: "El RUT no es válido (escriba sin puntos y con guión)"
          },
          nombre: {
              required: "Por favor, ingrese su nombre",
              minlength: "El nombre debe tener al menos 3 caracteres"
          },
          apellido: {
              required: "Por favor, ingrese su apellido",
              minlength: "El apellido debe tener al menos 3 caracteres"
          },
          correo: {
              required: "Por favor, ingrese su correo electrónico",
              email: "Por favor, ingrese un correo electrónico válido"
          },
          direccion: {
              required: "Por favor, ingrese su dirección",
              minlength: "La dirección debe tener al menos 10 caracteres"
          },
          password: {
              required: "Por favor, ingrese una contraseña",
              minlength: "La contraseña debe tener al menos 8 caracteres"
          },
          password2: {
              required: "Por favor, repita su contraseña",
              equalTo: "Las contraseñas no coinciden"
          }
      },
  });
});




////////////////////////////////////////////////////////////////////////////////////////////////////////INGRESAR






$(document).ready(function() {
  // Agregar método de validación para correo
  $.validator.addMethod("emailCompleto", function(value, element) {

    // Expresión regular para validar correo electrónico
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/;

    // Validar correo electrónico con la expresión regular
    return regex.test(value);

  }, 'El formato del correo no es válido');
  
  // Agregar método de validación para que un campo sólo acepte 
  // letras y espacios en blanco, pero no números ni símbolos,
  // ideal para campos como nombres y apellidos
  $.validator.addMethod("soloLetras", function(value, element) {

    return this.optional(element) || /^[a-zA-Z\s]*$/.test(value);

  }, "Sólo se permiten letras y espacios en blanco.");


  // Validar formulario con JQuery
  $("#formulario-ingresar").validate({
    rules: {
      correo: {
        required: true,
        emailCompleto: true,
      },
      password: {
        required: true,
        minlength: 8,
        pwcheck: true
      },
    }, // --> Fin de reglas
    messages: {
      correo: {
        required: "El correo es un campo requerido",
        email: "El formato del correo no es válido",
      },
      password: {
        required: "Por favor, ingrese una contraseña",
        minlength: "La contraseña debe tener al menos 8 caracteres"
      },  
      
    }, // --> Fin de mensajes
  });
  
});



////////////////////////////////////////////////////////////////////////////////////////////////////////USUARIO
$(document).ready(function() {

  // Agregar método de validación para RUT chileno
  $.validator.addMethod("rutChileno", function(value, element) {

    // Validar que el RUT tenga el formato correcto (8 o 9 dígitos + guión + dígito verificador)
    var rutPattern = /^\d{7,8}-[\dKk]$/;
    if (!rutPattern.test(value)) {
        return false;
    }

    // Validar el dígito verificador
    var rutSinGuion = value.replace("-", "");
    var rut = rutSinGuion.slice(0, -1);
    var dv = rutSinGuion.slice(-1).toUpperCase();
    var factor = 2;
    var sum = 0;
    for (var i = rut.length - 1; i >= 0; i--) {
        sum += parseInt(rut.charAt(i)) * factor;
        factor = factor === 7 ? 2 : factor + 1;
    }
    var dvCalculado = 11 - (sum % 11);
    dvCalculado = dvCalculado === 11 ? "0" : dvCalculado === 10 ? "K" : dvCalculado.toString();

    return dv === dvCalculado;
  }, "El RUT no es válido (escriba sin puntos y con guión)");

  // Agregar método de validación para correo
  $.validator.addMethod("emailCompleto", function(value, element) {

    // Expresión regular para validar correo electrónico
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/;

    // Validar correo electrónico con la expresión regular
    return regex.test(value);

  }, 'El formato del correo no es válido');
  
  // Agregar método de validación para que un campo sólo acepte 
  // letras y espacios en blanco, pero no números ni símbolos,
  // ideal para campos como nombres y apellidos
  $.validator.addMethod("soloLetras", function(value, element) {

    return this.optional(element) || /^[a-zA-Z\s]*$/.test(value);

  }, "Sólo se permiten letras y espacios en blanco.");

  // Validar formulario con JQuery
  $("form.needs-validation").validate({
    rules: {
      id: {
        required: true,
      },
      rut: {
        required: true,
        rutChileno: true
      },
      nombre: {
        required: true,
        soloLetras: true
      },
      apellido: {
        required: true,
        soloLetras: true
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
        minlength: 5,
        maxlength: 15,
      }
    }, // --> Fin de reglas
    messages: {
      id: {
        required: "El ID es un campo requerido",
      },
      rut: {
        required: "El RUT es un campo requerido",
        rutChileno: "El RUT no es válido (escriba sin puntos y con guión)"
      },
      nombre: {
        required: "El nombre es un campo requerido",
        soloLetras: "El nombre sólo puede contener letras y espacios en blanco",
      },
      apellido: {
        required: "El apellido es un campo requerido",
        soloLetras: "El apellido sólo puede contener letras y espacios en blanco",
      },
      correo: {
        required: "El correo es un campo requerido",
        emailCompleto: "El formato del correo no es válido",
      },
      direccion: {
        required: "La dirección es un campo requerido",
      },
      password: {
        required: "La contraseña es un campo requerido",
        minlength: "La contraseña debe tener un mínimo de 5 caracteres",
        maxlength: "La contraseña debe tener un máximo de 15 caracteres",
      }
    }, // --> Fin de mensajes
  });
});

