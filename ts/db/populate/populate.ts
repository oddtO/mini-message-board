import { sql } from "@pgtyped/runtime";
import { Client } from "pg";
import { ICreateTableQuery, IPopulateTableQuery } from "./populate.types";
async function populate() {
  if (process.argv.length != 3) {
    console.log("usage: [node/ts-node] <fileName> <connection string>");
    process.exit(1);
  }
  const client = new Client({
    connectionString: process.argv[2],
  });
  const createTable = sql<ICreateTableQuery>`
    CREATE TABLE IF NOT EXISTS sent_messages (
      id bigint GENERATED ALWAYS AS IDENTITY,
      text TEXT,
      "user" TEXT,
      added TIMESTAMP WITH TIME ZONE DEFAULT now()
    );
  `;

  const populateTable = sql<IPopulateTableQuery>`
    INSERT INTO
      public.sent_messages ("user", text)
    VALUES
      ('Hi there!', 'Amando'),
      ('Hello World', 'Charles');
  `;

  await client.connect();
  await createTable.run(undefined, client);
  await populateTable.run(undefined, client);
  await client.end();
  console.log("done");
}

populate();
