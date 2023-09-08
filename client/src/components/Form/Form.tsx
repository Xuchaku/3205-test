import { useFormik } from "formik";

import { FormProps } from "../../types/FormProps";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { SignupSchema } from "../../utils/validation";
import { useRef, useState } from "react";

const API_USER = "http://localhost:5000/infouser";

export default function Form() {
  const refForm = useRef(null);
  const [requests, setRequests] = useState<{ date: Date }[]>([]);
  const [result, setResult] = useState<string>("");
  const formik = useFormik<FormProps>({
    initialValues: {
      email: "",
      number: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      if (refForm.current) {
        setRequests((prevRequests) => [...prevRequests, { date: new Date() }]);
        const response = await fetch(API_USER, {
          method: "POST",
          body: new FormData(refForm.current),
        });
        const text = await response.text();
        setRequests((prevRequests) => {
          const shiftRequests = [...prevRequests];
          shiftRequests.shift();
          return shiftRequests;
        });
        setResult((prevText) => prevText + "\n" + text);
      }
    },
  });

  return (
    <Flex
      direction={"column"}
      bg="gray.100"
      align="center"
      justify="center"
      h="100vh"
    >
      <Box bg="white" p={6} rounded="md">
        <form ref={refForm} onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl
              isRequired
              isInvalid={Boolean(formik.errors.email && formik.touched.email)}
            >
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                placeholder="email@mail"
                type="email"
                variant="filled"
                {...formik.getFieldProps("email")}
              />
              {formik.errors.email && formik.touched.email ? (
                <div style={{ color: "red", fontSize: "12px" }}>
                  {formik.errors.email}
                </div>
              ) : null}
            </FormControl>

            <FormControl
              isInvalid={Boolean(formik.errors.number && formik.touched.number)}
            >
              <FormLabel htmlFor="number">Number</FormLabel>
              <Input
                placeholder="XX-XX-XX"
                id="number"
                type="text"
                variant="filled"
                {...formik.getFieldProps("number")}
              />
              {formik.errors.number && formik.touched.number ? (
                <div style={{ color: "red", fontSize: "12px" }}>
                  {formik.errors.number}
                </div>
              ) : null}
            </FormControl>

            <Button
              type="submit"
              colorScheme="purple"
              width="full"
              isDisabled={Boolean(
                !formik.touched.email ||
                  formik.errors.email ||
                  formik.errors.number
              )}
            >
              Отправить
            </Button>
          </VStack>
        </form>
      </Box>
      <Center w={500}>
        <Flex direction={"column"} alignItems={"center"}>
          <Heading>Журнал ответа от сервера:</Heading>
          {result.split("\n").map((value, index) => {
            return <Text key={index}>{value}</Text>;
          })}
          {requests.length > 0 ? <Spinner /> : null}
        </Flex>
      </Center>
    </Flex>
  );
}
