import React, { forwardRef, PropsWithChildren } from "react";
import { FormHelperText, SelectProps } from "@mui/material";
import { FormControl, InputLabel, Select, TextField } from "@mui/material";
interface selectBoxProps extends SelectProps {
  value: string | number;
  handleChange: (event: any) => void;
  inputLabel: string;
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
export const MultiSelectBox = forwardRef(
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
  ) => (
    <FormControl fullWidth error={error}>
      <InputLabel id="demo-multiple-checkbox-label">{inputLabel}</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={value}
        label={inputLabel}
        onChange={handleChange}
        {...props}
        size="small"
        ref={ref}
        // renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {children}
      </Select>
      {error && <FormHelperText>لطفا این فیلد را پر کنید</FormHelperText>}
    </FormControl>
  )
);
