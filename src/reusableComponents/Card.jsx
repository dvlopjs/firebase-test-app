import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
  TextField,
  Grid,
  Box,
} from "@mui/material";
import React from "react";
import Input from "./Input";

export default function CardForms({ titleCard }) {
  return (
    <Container>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Card elevation={5}>
            <CardHeader title={titleCard} />
            <CardContent>
              <Grid container spacing={3}>
                  <Grid item xs={12} md={12} lg={12}>
                <Input labelInput="Usuario" />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                <Input labelInput="Contraseña" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
