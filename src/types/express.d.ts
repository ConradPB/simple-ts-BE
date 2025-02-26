import * as express from "express";

declare global {
  namespace Express {
    interface Response {
      json: (body: any) => express.Response;
    }
  }
}
