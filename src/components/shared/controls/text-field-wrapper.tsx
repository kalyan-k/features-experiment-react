import React, { FunctionComponent, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { TextFieldWrapperProps } from "../../../shared/interfaces/control-props";

const TextFieldWrapper: FunctionComponent<TextFieldWrapperProps> = (props: TextFieldWrapperProps) => {
    const { label, model, updatePath, errorObj, setErrorObj, validationObj, setValidationObj, globalDispatch, onChange, ...rest } = props;

    const onChange_event = (event: any) => {
        if (!!validationObj[updatePath]) {
            errorObj[updatePath] = [];
            validationObj[updatePath].forEach((item) => {
                if (item.required && event.target.value.length === 0) {
                    errorObj[updatePath] = [`${label} is Required`];
                    setErrorObj(errorObj)
                }
                // else if (event.target.value.length > 0) {
                //     errorObj[updatePath] = [];
                //     setErrorObj(errorObj)
                // }
            });
        }
        globalDispatch({ updatePath: updatePath, updateValue: event.target.value })
        if (onChange) {
            onChange(event);
        }
    }

    useEffect(() => {
        validationObj[updatePath] = [{ required: true }];
        setValidationObj(validationObj)
    }, [])

    return (
        <TextField
            {...rest}
            error={errorObj[updatePath]?.length > 0}
            helperText={errorObj[updatePath]?.length > 0 ? errorObj[updatePath][0] : ''}
            label={label}
            value={model}
            variant="outlined"
            onChange={onChange_event}
        >
        </TextField >
    )
}

export default TextFieldWrapper
