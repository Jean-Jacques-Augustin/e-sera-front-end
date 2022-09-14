import { TextField } from "@mui/material";
import React from "react";

interface TextFieldProps {
      label: string;
      value: string;
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
      type: string;
      error: boolean;
      helperText: string;
}

export default function TextFields({
      label,
      value,
      onChange,
      type,
      error,
      helperText,
}: TextFieldProps) {
      return (
            <TextField
                  type={type}
                  size={"medium"}
                  value={value}
                  label={label}
                  variant="outlined"
                  onChange={onChange}
                  className={"TextField"}
                  helperText={helperText}
                  error={error}
                  fullWidth
            />
      );
}
