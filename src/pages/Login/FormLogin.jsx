import React from "react";
import CardForms from "../../reusableComponents/Card";
import { TextField, Grid, Box, Button, Typography } from "@mui/material";
import useUserValues from "../../hooks/useUserValues";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  inputWidth: {
    width: "100%",
  },
}));

export default function FormLogin() {
  const classes = useStyles()
  const { userValues, resetValues, handleChange } = useUserValues();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
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
            Ingresar
          </Button>
        </Box>
      </form>
    </>
  );
}
