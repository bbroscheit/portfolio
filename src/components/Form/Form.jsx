import React from "react";
import Style from "./Form.module.css";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

function Form() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const [error, setError] = useState("");
  const [button, setButton] = useState({ complete: false });

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setError(validate({ ...input, [e.target.name]: e.target.value }));
  };

  function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = "El campo no debe quedar vacio";
    }
    if (!input.comment) {
      errors.comment = "El campo no debe quedar vacio";
    } else if (input.comment.length > 500) {
      errors.comment = "La descripcion no puede tener mas de 500 caracteres";
    }

    if (!input.phone) {
      errors.phone = "El campo no puede quedar vacio";
    }
   
    if (
      errors.name ||
      errors.price ||
      errors.description ||
      errors.image ||
      errors.categories ||
      errors.stock ||
      errors.brand
    ) {
      setButton({
        complete: false,
      });
    } else {
      setButton({
        complete: true,
      });
    }

    return errors;
  }
  // const isError = input === "";

  return (
    <div className={Style.mainContainer}>
      <h1> soy el form</h1>
      <h2>subtitulo copado</h2>
      <div className={Style.formContainer}>
      <FormControl isInvalid={error}>
        <FormLabel>Nombre</FormLabel>
        <Input
          type="text"
          value={input.name}
          name="name"
          onChange={handleInputChange}
        />
        {error.name && <FormErrorMessage>{error.name}</FormErrorMessage>}
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={input.email}
          name="email"
          onChange={handleInputChange}
        />
        {/* {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )} */}

        <FormLabel>Phone</FormLabel>
        <Input
          type="text"
          value={input.phone}
          name="phone"
          onChange={handleInputChange}
        />
        {error.phone && <FormErrorMessage>{error.phone}</FormErrorMessage>}

        <FormLabel>Comment</FormLabel>
        <Textarea
          type="text"
          value={input.comment}
          name="comment"
          onChange={handleInputChange}
        />
        {error.comment && <FormErrorMessage>{error.comment}</FormErrorMessage>}
        <div className={Style.buttonContainer}>
          <Button mt={4} colorScheme="teal" type="Clear" width="110px">
            Clear
          </Button>
          <Button mt={4} colorScheme="teal" type="Send" width="110px">
            Send
          </Button>
        </div>
      </FormControl>
      </div>
    </div>
  );
}

export default Form;
