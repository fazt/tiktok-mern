import { z, ZodError, ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";

export const validateSchema =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body)
      schema.parse(req.body);
      next();
    } catch (error: any) {
      console.log(error)
      if (error instanceof ZodError) {
        res.status(400).json({ message: error.issues.map(error => error.message) });
      }
    }
  };
