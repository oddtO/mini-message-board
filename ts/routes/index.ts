import express from "express";
import indexController from "../controllers/index";

import path from "path";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static(path.join(__dirname, "../../public")));
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "../../views"));
app.set("view engine", "ejs");

app.get("/", indexController.get);

app.post("/new", indexController.post);

app.listen(PORT, () => console.log("server started"));
