import express from "express";
import morgan from "morgan";
import { RectangleModel } from "../config/config.sequelize.js";

const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.json());

app.post("/rectangle", async (req, res) => {
    const { width, height } = req.body;
    const rectangle = await RectangleModel.create({
        width,
        height,
    });

    res.status(200).json({
        ok: true,
        status: 201,
        body: rectangle,
    });
});

export default app;

// Juan pasar al endpoint de /rectangle un json que contenga { "width": 10, "height": 5 } pd: valores que tu quieras , pd2: el ejemplo solo pedia la tabla rectangulo
