import React, { useState } from "react";
import { TextField, Grid, Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useAuth } from "../../context/authContext";
import { auth } from "../../firebase";
import useUserValues from "../../hooks/useUserValues";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  inputWidth: {
    width: "100%",
  },
}));
export default function FormRegister() {
  const classes = useStyles();
  const { userRegister } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const { userValues, resetValues, handleChange } = useUserValues();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userRegister(auth, userValues.email, userValues.password);
      alert("Usuario creado exitosamente");
      resetValues();
    } catch (error) {
      setErrorMessage(error.message);
      resetValues();
    }
  };

  React.useEffect(() => {
    errorMessage && alert(errorMessage);
  }, [errorMessage]);
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <TextField
              value={userValues.email}
              name="email"
              onChange={(event) => handleChange(event)}
              label="Usuario"
              className={classes.inputWidth}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <TextField
              value={userValues.password}
              name="password"
              onChange={(event) => handleChange(event)}
              label="Contraseña"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
        <Box mt={2} display="flex" justifyContent={"center"}>
          <Button type="submit" variant="contained" color="primary">
            Registrar
          </Button>
        </Box>
        <Box pt={2} textAlign="center">
          <Link>
        ¿Ya tenés una cuenta?
        </Link>
        </Box>
      </form>
    </>
  );
}
