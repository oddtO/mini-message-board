"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../controllers/index"));
const path_1 = __importDefault(require("path"));
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, "../../public")));
app.use(express_1.default.urlencoded({ extended: true }));
app.set("views", path_1.default.join(__dirname, "../../views"));
app.set("view engine", "ejs");
app.get("/", index_1.default.get);
app.post("/new", index_1.default.post);
app.listen(PORT, () => console.log("server started"));
