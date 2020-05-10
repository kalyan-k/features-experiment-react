import React, { FunctionComponent } from "react";
import { TextField } from "@material-ui/core";
import { TextFieldWrapperProps } from "../../../shared/interfaces/control-props";

const TextFieldWrapper: FunctionComponent<TextFieldWrapperProps> = (props: TextFieldWrapperProps) => {
    const { label, onChange, ...rest } = props;

    return (
        <TextField
            {...rest}
            label={label}
            variant="outlined"
            onChange={onChange}
        >
        </TextField >
    )
}

export default TextFieldWrapper
