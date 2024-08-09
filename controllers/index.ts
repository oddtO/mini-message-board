import type { Request, Response } from "express";
function get(req: Request, res: Response) {
  res.render("index", { view: "World 333" });
}

export default { get };
