/* Import des modules necessaires */
const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config({ encoding: "latin1" });

mongoose.set("strictQuery", false);

mongoose
    .connect(process.env.DBCONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(process.env.SERVER_PORT, () => {
            console.log(
                `Le serveur est lancer sur le port ${process.env.SERVER_PORT}. Enjoy !`
            );
        })
    )
    .catch(() => console.log("Server connection failed !"));

