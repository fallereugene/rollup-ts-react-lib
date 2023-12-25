import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";

export type InputTextProps = TextFieldProps & {
  errorText?: string;
  description?: string;
};

export const InputText: React.FunctionComponent<InputTextProps> = (props) => {
  const {
    name,
    value,
    disabled = false,
    errorText,
    description,
    label,
  } = props;
  return (
    <TextField
      name={name}
      value={value}
      disabled={disabled}
      helperText={errorText || description}
      label={label}
    />
  );
};
