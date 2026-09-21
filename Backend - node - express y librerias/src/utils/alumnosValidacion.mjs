export const createAlumnosSchema = {
nombre: {
    notEmpty: {
      errorMessage: "El nombre no puede estar vacío",
    },
    isLength: {
      options: { min: 3, max: 32 }
    },
    isString: {
      errorMessage: "El nombre debe ser string",
    }
  },
apellido: {
    notEmpty: {
      errorMessage: "El apellido no puede estar vacío",
    },
    isLength: {
      options: { min: 3, max: 32 }
    },
    isString: {
      errorMessage: "El apellido debe ser string",
    }
  },
email: {
    notEmpty: {
      errorMessage: "El mail no puede estar vacío",
    },
    isEmail: {
      errorMessage: "El formato del email no es válido",
    }
  },
dni: {
    notEmpty: {
      errorMessage: "El campo DNI es obligatorio.",
    },
    matches: {
      options: /^[0-9]+$/,
      errorMessage: "El campo DNI debe contener solo números.",
    },
    isLength: {
      options: { min: 7, max: 8 },
      errorMessage: "El campo DNI debe tener entre 7 y 8 caracteres.",
    },
  },
fechaNacimiento: {
    notEmpty: {
      errorMessage: "La fecha de nacimiento no puede estar vacia.", 
    },
    isDate: {
      errorMessage: "La fecha de nacimiento debe ser una fecha valida.",
    },
    isLength: {
      options: { max: 10 },
      errorMessage: "La fecha de nacimiento tiene un maximo de 10 caracteres.",
    },

  }
}
