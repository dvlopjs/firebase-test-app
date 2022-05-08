import React from "react";
import CardForms from "../../reusableComponents/Card";
import FormLogin from "./FormLogin"
export default function Login() {
  return (
    <CardForms titleCard={"Ingresar"}>
      <FormLogin />
    </CardForms>
  );
}
