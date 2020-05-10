import React, { FunctionComponent } from "react";
import { FormControl, RadioGroup, FormControlLabel, Radio, FormHelperText, Typography } from "@material-ui/core";
import { RadioWrapperProps } from "../../../shared/interfaces/control-props";


const RadioWrapper: FunctionComponent<RadioWrapperProps> = (props: RadioWrapperProps) => {
    const { label, radioItems, ...rest } = props;

    return (
        <FormControl>
            <Typography gutterBottom variant="subtitle2">{label}</Typography>
            <RadioGroup row {...rest}>
                {
                    radioItems.map((item) =>
                        <FormControlLabel
                            key={item.value}
                            value={item.value}
                            control={
                                <Radio color="primary" />
                            }
                            label={item.text} />
                    )
                }
            </RadioGroup>
            <FormHelperText>
                {'Radio helper text'}
            </FormHelperText>
        </FormControl>
    )
}

export default RadioWrapper;