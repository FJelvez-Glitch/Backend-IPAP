import express from "express";
import materiasRouter from "./routes/Materias.mjs";
import  profesoresRouter  from "./routes/Profesores.mjs";
import alumnosRouter  from "./routes/Alumnos.mjs";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api/materias", materiasRouter);
app.use("/api/profesores", profesoresRouter);
app.use("/api/alumnos", alumnosRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});