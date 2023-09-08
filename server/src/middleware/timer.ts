import { Response, NextFunction, Request } from "express";

let timerId: NodeJS.Timeout | undefined = undefined;
let arrReq: { res: Response; next: NextFunction }[] = [];

export async function timer(req: Request, res: Response, next: NextFunction) {
  arrReq.push({ res, next });
  if (arrReq.length == 1) {
    timerId = setTimeout(() => {
      arrReq[0].next();
      arrReq.shift();
    }, 5000);
  } else {
    clearTimeout(timerId);
    arrReq[0].res.send("Прошлый запрос отменен!");
    arrReq.shift();

    timerId = setTimeout(() => {
      arrReq[0].next();
      arrReq.shift();
    }, 5000);
  }
}
