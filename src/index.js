import app from "./app/app.js";
import { sequelize } from "./config/config.sequelize.js";

const PORT = 3000;

try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
