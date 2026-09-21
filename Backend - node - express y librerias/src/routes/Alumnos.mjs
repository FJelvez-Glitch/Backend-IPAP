import { MockAlumnos } from "../data/mockAlumnos.mjs";
import { Router } from "express";
import { resuelveIndicePorId } from "../middleware/resuelveIndicePorId.mjs";
import { validaResultado } from "../middleware/validaResultado.mjs";
import { checkSchema, matchedData } from "express-validator";
import { v4 as uuidv4 } from "uuid";
import { createAlumnosSchema } from "../utils/alumnosValidacion.mjs";

const router = Router();

router.get("/", (req, res) => {

const { 
 query: { filter, value },
} = req;

if (filter && value) {
       const lowerValue = String(value).toLowerCase();

        return res.send(
        MockAlumnos.filter((alumnos) => {
            return String(alumnos[filter]).toLowerCase().includes(lowerValue);
        }

    )
)
}   
return res.send(MockAlumnos);
});

router.get("/:id", resuelveIndicePorId, (req, res) => {
    return res.send(MockAlumnos[req.findUserIndex])
})

router.post("/", checkSchema(createAlumnosSchema),validaResultado, (req, res) => {
    
    const data = matchedData(req)

    const newAlumno = { id: uuidv4(), ...data };
    MockAlumnos.push(newAlumno);
    return res.status(201).send(newAlumno);

})

router.put("/:id", resuelveIndicePorId, checkSchema(createAlumnosSchema), validaResultado, (req, res) => {
const { body, findUserIndex } = req;
  const antes = { ...MockAlumnos[findUserIndex] };
  MockAlumnos[findUserIndex] = { ...MockAlumnos[findUserIndex], ...body };
  return res.status(200).send({
    Message: "Alumno modificado",
    antes,
    despues: MockAlumnos[findUserIndex],
    });
});

router.delete("/:id", resuelveIndicePorId, (req, res) => {
    const { findUserIndex } = req;
    MockAlumnos.splice(findUserIndex, 1);
    return res.sendStatus(200);
})

router.patch("/:id", resuelveIndicePorId, (req, res) => {
  const { body, findUserIndex } = req;
  const antes = { ...MockAlumnos[findUserIndex] };
  MockAlumnos[findUserIndex] = { ...MockAlumnos[findUserIndex], ...body };
  return res.status(200).send({
    Message: "Alumno actualizado",
    antes,
    despues: MockAlumnos[findUserIndex],
  });
});

export default router;