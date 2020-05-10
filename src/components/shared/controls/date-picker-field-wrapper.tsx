import React, { FunctionComponent } from "react";
import { FormControl, TextField, FormHelperText } from "@material-ui/core";
import { DatePickerWrapperProps } from "../../../shared/interfaces/control-props";

const DatePickerWrapper: FunctionComponent<DatePickerWrapperProps> = (props) => {
    const { label, onChange, defaultValue, ...rest } = props;

    return (
        <FormControl>
            <TextField
                {...rest}
                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={onChange}
                defaultValue={defaultValue}
            />
            <FormHelperText>
                {'Helper text'}
            </FormHelperText>
        </FormControl>
    )
}

export default DatePickerWrapper