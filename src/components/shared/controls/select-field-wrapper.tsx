import React, { FunctionComponent } from "react";
import { FormControl, FormHelperText, InputLabel, Select, MenuItem } from "@material-ui/core";
import { SelectWrapperProps } from "../../../shared/interfaces/control-props";

const SelectWrapper: FunctionComponent<SelectWrapperProps> = (props) => {
    const { label, model, updatePath, globalDispatch, onChange, menuItems } = props;

    const onChange_event = (event: any, child: any) => {
        globalDispatch({ updatePath: updatePath, updateValue: event.target.value });

        if (onChange) {
            onChange(event, child);
        }
    }

    return (
        <FormControl variant="outlined">
            <InputLabel>{label}</InputLabel>
            <Select label={label} value={model} onChange={onChange_event}>
                {
                    menuItems?.map((item) =>
                        <MenuItem key={item.value} value={item.value}>{item.display}</MenuItem>
                    )
                }
            </Select>
            <FormHelperText>
                {'Select helper text'}
            </FormHelperText>
        </FormControl >
    )
}

export default SelectWrapper;