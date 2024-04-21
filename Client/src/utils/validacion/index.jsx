export const validar = (input) => {
  let errores = {};

    if (!/^[0-9]{10}$/.test(input.usuario)) {
      errores.usuario = "El usuario debe contener un numero de 10 digitos";
    }
  if (!input.usuario) {
    errores.usuario = "El usuario no puede estar vacio";
  }

  // if (input.usuario.length > 35) {
  //   errores.usuario= "El usuario debe contener menos de 35 caracteres";
  // }

  if (!/.\d./.test(input.password)) {
    errores.password = "La contraseña debe contener un numero";
  }

  if (input.password.length < 6) {
    errores.password = "La contraseña debe tener más de 6 caracteres";
  }

  if (input.password.length > 10) {
    errores.password = "La contraseña debe tener maximo 10 caracteres";
  }

  // console.log(errores);
  return errores;
};