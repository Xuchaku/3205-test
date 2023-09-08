import * as yup from "yup";
declare module "yup" {
  interface StringSchema {
    correctNumber(value?: string): this;
  }
}
export default yup;
