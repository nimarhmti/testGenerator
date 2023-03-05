import React, { forwardRef, PropsWithChildren, useState } from "react";
import { FormHelperText, SelectProps } from "@mui/material";
import { FormControl, InputLabel, Select, TextField } from "@mui/material";
interface selectBoxProps extends SelectProps {
  value?: string | number | string[] | number[];
  handleChange: (event: any) => void;
  inputLabel: string;
}
export const SelectBox = forwardRef(
  (
    {
      children,
      handleChange,
      value,
      error,
      inputLabel,
      ...props
    }: PropsWithChildren & selectBoxProps,
    ref
  ) => {
    return (
      <FormControl fullWidth error={error}>
        <InputLabel id="demo-simple-select-label">{inputLabel}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={inputLabel}
          onChange={handleChange}
          {...props}
          size="small"
          ref={ref}
        >
          {children}
        </Select>
        {error && <FormHelperText>لطفا این فیلد را پر کنید</FormHelperText>}
      </FormControl>
    );
  }
);
