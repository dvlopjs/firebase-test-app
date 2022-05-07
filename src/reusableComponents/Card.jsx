import { Card, CardContent, CardHeader, Container, Grid } from "@mui/material";
import React from "react";

export default function CardForms({ titleCard, children }) {
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
            <CardContent>{children}</CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
