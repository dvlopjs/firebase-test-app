import React from "react";
import { TextField } from "@mui/material";
export default function Input({ handleChange, labelInput }) {
  return <TextField style={{width:"100%"}} variant="outlined" label={labelInput} onChange={handleChange} />;
}
