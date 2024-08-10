import express from "express";
import indexController from "../controllers/index.ts";
import path from "path";

const app = express();
app.use(express.static(path.join(__dirname, "../public/")));
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.get("/", indexController.get);

app.listen(3000, () => console.log("server started"));
