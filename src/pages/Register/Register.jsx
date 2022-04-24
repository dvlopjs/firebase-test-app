import React from "react";
import { useAuth } from "../../context/authContext";
import CardForms from "../../reusableComponents/Card";
import FormRegister from "./FormRegister";

export default function Register() {
  const { isLogged } = useAuth();
  return (
    <>
      <CardForms titleCard={"Registrarse"} children={<FormRegister />} />
    </>
  );
}
