import * as Yup from "yup";

Yup.addMethod<Yup.StringSchema>(Yup.string, "correctNumber", function () {
  return this.test(
    "correctNumber",
    "Invalid format, it should be XX-XX-XX or empty string",
    function (value: string | undefined) {
      const regexp = /^(?:\d{2}-)*\d{2}$/;
      if (!value) {
        value = "";
      }
      return regexp.test(value) || /^$/.test(value);
    }
  );
});

export const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  number: Yup.string().correctNumber(),
});
