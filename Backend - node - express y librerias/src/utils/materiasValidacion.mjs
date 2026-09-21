export const createMateriasSchema = {
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
codigo: {
        notEmpty: {
      errorMessage: "El codigo no puede estar vacío",  
        },
    isLength: {
      options: { min: 3, max: 32 }
    },
    },
departamento: {
  isString: {
      errorMessage: "El departamento no puede ser un numero",
    },
        notEmpty: {
      errorMessage: "El departamento no puede estar vacío",
    },
    isLength: {
      options: { min: 3, max: 32 }
    },
},
nivel: {
  isInt: {
      errorMessage: "El nivel debe ser un numero",
    },
        notEmpty: {
      errorMessage: "El nivel no puede estar vacío",
    },
    matches: {
      options: /^[0-9]+$/,
      errorMessage: "El campo Nivel debe ser un número entero",
    }
    },
}

