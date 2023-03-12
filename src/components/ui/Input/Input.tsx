import { FormControl, TextField } from "@mui/material";
import React, { forwardRef } from "react";
import type { TextFieldProps } from "@mui/material";
export const Input = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ ...rest }, ref) => (
    <FormControl fullWidth>
      <TextField
        variant="outlined"
        color="primary"
        size="small"
        inputRef={ref}
        inputProps={{ style: { fontSize: 16 } }}
        InputLabelProps={{ style: { fontSize: 16 } }}
        {...rest}
      />
    </FormControl>
  )
);
