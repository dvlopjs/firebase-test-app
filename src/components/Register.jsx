import React from "react";
import { useAuth } from "../context/authContext";
import CardForms from "../reusableComponents/Card";

export default function Register() {
  const {dataUser, isLogged} = useAuth()
  console.log(dataUser,isLogged)
  return (
    <div>
      <CardForms titleCard={"Registrarse"} />
    </div>
  );
}
