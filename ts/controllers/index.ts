import type { Request, Response } from "express";
import type { Message } from "../data";
import { messages } from "../data";
import { format } from "date-fns";

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
function get(req: Request, res: Response) {
  res.render("index", { messages });
}

function post(req: Request, res: Response) {
  const reqBody = req.body as RequestBody;
  const newMessage: Message = {
    text: reqBody.message,
    user: reqBody.username,
    added: new Date(),
  };

  messages.push(newMessage);

  res.redirect("/");
}

export default { get, post };
