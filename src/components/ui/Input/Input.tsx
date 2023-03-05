import { FormControl, TextField } from "@mui/material";
import React, { forwardRef } from "react";
import type { TextFieldProps } from "@mui/material";
export const Input = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ ...rest }, ref) => (
    <FormControl>
      <TextField
        variant="outlined"
        color="primary"
        size="small"
        inputRef={ref}
        sx={{ width: "100%" }}
        inputProps={{ style: { fontSize: 16 } }}
        InputLabelProps={{ style: { fontSize: 16 } }}
        {...rest}
      />
    </FormControl>
  )
);
