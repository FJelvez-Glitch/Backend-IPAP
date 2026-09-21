import { Router } from "express";
import { resuelveIndicePorId } from "../middleware/resuelveIndicePorId.mjs";
import { validaResultado } from "../middleware/validaResultado.mjs";
import { checkSchema, matchedData } from "express-validator";
import { MockMaterias } from "../data/mockMaterias.mjs";
import { v4 as uuidv4 } from "uuid";
import { createMateriasSchema } from "../utils/materiasValidacion.mjs";

const router = Router();

router.get("/", (req, res) => {

  const { 
 query: { filter, value },
} = req;

if (filter && value) {
       const lowerValue = String(value).toLowerCase();

        return res.send(
        MockMaterias.filter((materias) => {
            return String(materias[filter]).toLowerCase().includes(lowerValue);
        }

    )
)
}   
return res.send(MockMaterias);
});

router.get("/:id", resuelveIndicePorId, (req, res) => {
    return res.send(MockMaterias[req.findUserIndex]);
})

router.post("/", checkSchema(createMateriasSchema),validaResultado, (req, res) => {
    
   const data = matchedData(req)

   const newMateria = { id: uuidv4(), ...data };
   MockMaterias.push(newMateria);
   return res.status(201).send(newMateria);

});

router.put("/:id", resuelveIndicePorId, checkSchema(createMateriasSchema), validaResultado, (req, res) => {
     const { body, findUserIndex } = req;
        const antes = { ...MockMaterias[findUserIndex] };
        MockMaterias[findUserIndex] = { ...MockMaterias[findUserIndex], ...body };
        return res.status(200).send({
          Message: "Materia actualizada",
          antes,
          despues: MockMaterias[findUserIndex],
          });
      }
)

router.delete("/:id", resuelveIndicePorId, (req, res) => {
    const { findUserIndex } = req;
    MockMaterias.splice(findUserIndex, 1);
    return res.sendStatus(200);
})

router.patch("/:id", resuelveIndicePorId, validaResultado, (req, res) => {
     const { body, findUserIndex } = req;
        const antes = { ...MockMaterias[findUserIndex] };
        MockMaterias[findUserIndex] = { ...MockMaterias[findUserIndex], ...body };
        return res.status(200).send({
          Message: "Materia modificada",
          antes,
          despues: MockMaterias[findUserIndex],
          });
      })

export default router;