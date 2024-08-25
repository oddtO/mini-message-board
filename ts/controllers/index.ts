import type { Request, Response } from "express";
import { format } from "date-fns";
import { db } from "../db/queries";
type RequestBody = {
  username: string;
  message: string;
};

// Save the original toString method
// const originalToString = Date.prototype.toString;

// Override the Date.prototype.toString method
Date.prototype.toString = function () {
  return format(this, "h:mm - EEE MMM d yyyy");
};

// Array.prototype.reverseForEach =
async function get(req: Request, res: Response) {
  const messages = await db.getMessages();
  res.render("index", { messages });
}

async function post(req: Request<object, object, RequestBody>, res: Response) {
  await db.storeMessage(req.body.message, req.body.username);
  res.redirect("/");
}

export default { get, post };
