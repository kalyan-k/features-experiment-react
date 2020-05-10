import React, { FunctionComponent } from "react";
import { FormControl, FormControlLabel, Checkbox } from "@material-ui/core";
import { CheckboxWrapperProps } from "../../../shared/interfaces/control-props";

const CheckboxWrapper: FunctionComponent<CheckboxWrapperProps> = (props) => {
    const { label, ...rest } = props;

    return (
        <FormControl>
            <FormControlLabel
                control={
                    <Checkbox
                        {...rest}
                        color="primary"
                    />
                }
                label={label}
            />
        </FormControl>
    )
}

export { CheckboxWrapper }