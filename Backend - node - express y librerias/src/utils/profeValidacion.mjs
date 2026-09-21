export const createProfesoresSchema = {
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
email: {
    notEmpty: {
      errorMessage: "El mail no puede estar vacío",
    },
    isEmail: {
      errorMessage: "El formato del email no es válido",
    }
  },
especialidad: {
         notEmpty: {
      errorMessage: "la especialidad no puede estar vacío",  
         },
    isLength: {
      options: { min: 3, max: 32 }
    },
    isString: {
      errorMessage: "La especialidad debe ser string",
    }
},
}