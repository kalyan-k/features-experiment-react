import React, { FunctionComponent } from "react";
import { TextField } from "@material-ui/core";
import { TextFieldWrapperProps } from "../../../shared/interfaces/control-props";

const TextFieldWrapper: FunctionComponent<TextFieldWrapperProps> = (props: TextFieldWrapperProps) => {
    const { label, model, updatePath, globalDispatch, onChange, ...rest } = props;

    const onChange_event = (event: any) => {
        globalDispatch({ updatePath: updatePath, updateValue: event.target.value })
        if (onChange) {
            onChange(event);
        }
    }

    return (
        <TextField
            {...rest}
            label={label}
            value={model}
            variant="outlined"
            onChange={onChange_event}
        >
        </TextField >
    )
}

export default TextFieldWrapper
