import { Router } from "express";
import { resuelveIndicePorId } from "../middleware/resuelveIndicePorId.mjs";
import { validaResultado } from "../middleware/validaResultado.mjs";
import { checkSchema, matchedData } from "express-validator";
import { MockProfesores } from "../data/mockProfesores.mjs";
import { v4 as uuidv4 } from "uuid";
import { createProfesoresSchema } from "../utils/profeValidacion.mjs";

const router = Router();

router.get("/", (req, res) => {

const { 
 query: { filter, value },
} = req;

if (filter && value) {
       const lowerValue = String(value).toLowerCase();

        return res.send(
        MockProfesores.filter((profesores) => {
            return String(profesores[filter]).toLowerCase().includes(lowerValue);
        }

    )
)
}   
return res.send(MockProfesores);
});

router.get("/:id", resuelveIndicePorId, (req, res) => {
    return res.send(MockProfesores[req.findUserIndex]);
})

router.post("/",checkSchema(createProfesoresSchema),validaResultado, (req, res) => {
    
   const data = matchedData(req)

   const newProfesor = { id: uuidv4(), ...data };
   MockProfesores.push(newProfesor);
   return res.status(201).send(newProfesor);
   }
)

router.put("/:id", resuelveIndicePorId, checkSchema(createProfesoresSchema), validaResultado, (req, res) => {
const { body, findUserIndex } = req;
  const antes = { ...MockProfesores[findUserIndex] };
  MockProfesores[findUserIndex] = { ...MockProfesores[findUserIndex], ...body };
  return res.status(200).send({
    Message: "Profesor modificado",
    antes,
    despues: MockProfesores[findUserIndex],
    });
})

router.delete("/:id", resuelveIndicePorId, (req, res) => {
    const { findUserIndex } = req;
    MockProfesores.splice(findUserIndex, 1);
    return res.sendStatus(200);
})

router.patch("/:id", resuelveIndicePorId, (req, res) => {
    const { body, findUserIndex } = req;
      const antes = { ...MockProfesores[findUserIndex] };
      MockProfesores[findUserIndex] = { ...MockProfesores[findUserIndex], ...body };
      return res.status(200).send({
        Message: "Profesor actualizado",
        antes,
        despues: MockProfesores[findUserIndex],
        });
    }
)

export default router;