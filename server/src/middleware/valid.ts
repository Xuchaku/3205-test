import { Response, Request, NextFunction } from "express";
import { SignupSchema } from "./../utils/validation";

export function valid(req: Request, res: Response, next: NextFunction) {
  const { email, number } = req.fields;
  const isValidUser = SignupSchema.isValidSync({ email, number });
  if (!isValidUser) {
    res.send(
      "Неправильный формат! Поле email должно содержать символ @ и быть длиннее 1 символа! Поле number должно быть пустой строкой или иметь формат XX-XX-...-XX"
    );
  } else {
    next();
  }
}
