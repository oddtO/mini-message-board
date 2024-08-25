import { sql } from "@pgtyped/runtime";
import { pool } from "./pool";
import { IGetAllMessagesQuery, IInsertMessageQuery } from "./queries.types";

async function getMessages() {
  const getAllMessages = sql<IGetAllMessagesQuery>`
    SELECT
      s.user,
      s.text,
      s.added
    FROM
      public.sent_messages s;
  `;

  const messages = await getAllMessages.run(undefined, pool);

  return messages;
}

async function storeMessage(text: string, user: string) {
  const insertMessage = sql<IInsertMessageQuery>`
    INSERT INTO
      public.sent_messages ("user", text)
    VALUES
      (
        $user,
        $text
      );
  `;
  await insertMessage.run({ text, user }, pool);
}

export const db = {
  getMessages,
  storeMessage,
};
