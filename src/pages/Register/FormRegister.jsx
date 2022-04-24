import React, { useState } from "react";
import { TextField, Grid, Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useAuth } from "../../context/authContext";
import { auth } from "../../firebase";

const useStyles = makeStyles(() => ({
  inputWidth: {
    width: "100%",
  },
}));
export default function FormRegister() {
  const classes = useStyles();
  const { userRegister } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    const { email, password } = user;
    e.preventDefault();
    try {
      await userRegister(auth, email, password);
      console.log('?')
      alert("Usuario creado exitosamente");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <TextField
              value={user.email}
              name="email"
              onChange={(event) => handleChange(event)}
              label="Usuario"
              className={classes.inputWidth}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <TextField
              value={user.password}
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
      </form>
    </>
  );
}
