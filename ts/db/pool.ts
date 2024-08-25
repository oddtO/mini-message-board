import { Pool } from "pg";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  export namespace NodeJS {
    export interface ProcessEnv {
      PGUSER: string;
      PGPASSWORD: string;
      PGHOST: string;
      PGPORT: string;
      PGDATABASE: string;
      PGURI: string;
    }
  }
}

export const pool = new Pool({
  connectionString: process.env.PGURI,
});
