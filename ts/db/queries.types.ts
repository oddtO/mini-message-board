/** Types generated for queries found in "ts/db/queries.ts" */

/** 'GetAllMessages' parameters type */
export type IGetAllMessagesParams = void;

/** 'GetAllMessages' return type */
export interface IGetAllMessagesResult {
  added: Date | null;
  text: string | null;
  user: string | null;
}

/** 'GetAllMessages' query type */
export interface IGetAllMessagesQuery {
  params: IGetAllMessagesParams;
  result: IGetAllMessagesResult;
}

/** 'InsertMessage' parameters type */
export interface IInsertMessageParams {
  text?: string | null | void;
  user?: string | null | void;
}

/** 'InsertMessage' return type */
export type IInsertMessageResult = void;

/** 'InsertMessage' query type */
export interface IInsertMessageQuery {
  params: IInsertMessageParams;
  result: IInsertMessageResult;
}

