import React, { FunctionComponent } from "react";
import { FormControl, RadioGroup, FormControlLabel, Radio, FormHelperText, Typography } from "@material-ui/core";
import { RadioWrapperProps } from "../../../shared/interfaces/control-props";


const RadioWrapper: FunctionComponent<RadioWrapperProps> = (props: RadioWrapperProps) => {
    const { label, model, updatePath, globalDispatch, onChange, radioItems, ...rest } = props;

    const onChange_event = (event: any) => {
        globalDispatch({ updatePath: updatePath, updateValue: event.target.value });

        if (onChange) {
            onChange(event);
        }
    }

    return (
        <FormControl>
            <Typography gutterBottom variant="subtitle2">{label}</Typography>
            <RadioGroup row value={model} onChange={onChange_event} {...rest}>
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