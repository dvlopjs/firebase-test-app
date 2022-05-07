import React from "react";
import CardForms from "../../reusableComponents/Card";

export default function FormLogin() {
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
            Ingresar
          </Button>
        </Box>
      </form>
    </>
  );
}
