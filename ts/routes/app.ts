import express from "express";
import indexController from "../controllers/index";

import path from "path";

const app = express();
app.use(express.static(path.join(__dirname, "../../static")));
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "../../views"));
app.set("view engine", "ejs");

app.get("/", indexController.get);

app.post("/new", indexController.post);


export default app;
