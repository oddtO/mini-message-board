import { Pool } from "pg";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  export namespace NodeJS {
    export interface ProcessEnv {
      PGURI: string;
    }
  }
}

export const pool = new Pool({
  connectionString: process.env.PGURI,
});
