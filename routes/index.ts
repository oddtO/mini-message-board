import express from "express";
import indexController from "../controllers/index.ts";

import path from "path";

const app = express();
app.use(express.static(path.join(__dirname, "../public/")));
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.get("/", indexController.get);
app.post("/new", indexController.post);

app.listen(3000, () => console.log("server started"));
