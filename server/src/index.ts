import express from "express";
import { Response, Request } from "express";
import cors from "cors";
import fs from "fs";
import { timer } from "./middleware/timer";
import path from "path";
import { User } from "./types/User";
import { valid } from "./middleware/valid";

const formidable = require("express-formidable");
const app = express();

app.use(cors());
app.use(formidable());

app.post("/infouser", timer, valid, (req: Request, res: Response) => {
  const { email, number } = req.fields;

  const usersBuffer = fs.readFileSync(
    path.join(process.cwd(), "src/utils/users.json")
  );
  const { users }: { users: User[] } = JSON.parse(usersBuffer.toString());

  const numberWihoutMask = number?.replaceAll("-", "");

  if (numberWihoutMask) {
    const findUser = users.find(
      (user) => user.email === email && user.number === numberWihoutMask
    );

    if (findUser) {
      res.send(findUser.secret);
    } else {
      res.send("Неправильный email или number!");
    }
  } else {
    const findUser = users.find((user) => user.email === email);
    if (findUser) {
      res.send(findUser.secret);
    } else {
      res.send("Неправильный email!");
    }
  }
});

app.listen(5000, () => {
  console.log(`Server starting on PORT:${5000}`);
});
