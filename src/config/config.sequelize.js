import { Sequelize } from "sequelize";
import { configDotenv } from "dotenv";
import { Triangle } from "../models/triangle.model.js";
import { Rectangle } from "../models/rectangle.model.js";
import { Circle } from "../models/circle.model.js";

configDotenv();

const { database, user, password, host, dialect, port } = {
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
};

const sequelize = new Sequelize(database, user, password, {
    host,
    dialect,
    port,
});

// Crea instancias de los modelos utilizando las clases
const triangle = new Triangle(sequelize);
const rectangle = new Rectangle(sequelize);
const circle = new Circle(sequelize);

// Obtén los modelos de las instancias
const TriangleModel = triangle.model;
const RectangleModel = rectangle.model;
const CircleModel = circle.model;

// Sincroniza los modelos con la base de datos
sequelize
    .sync()
    .then(() => {
        console.log(
            "Los modelos se han sincronizado correctamente con la base de datos."
        );
    })
    .catch((error) => {
        console.log(
            "Error al sincronizar los modelos con la base de datos:",
            error
        );
    });

export { TriangleModel, RectangleModel, CircleModel, sequelize };
