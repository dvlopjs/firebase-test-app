import React from "react";

export default function useUserValues() {
  const [userValues, setUserValues] = React.useState({
    email: "",
    password: "",
  });

  const resetValues = () => {
    setUserValues({
      ...userValues,
      email: "",
      password: "",
    });
  };

  const handleChange = ({ target: { name, value } }) => {
    setUserValues({ ...userValues, [name]: value });
  };
  return {
      userValues,
      resetValues,
      handleChange
  }
};
