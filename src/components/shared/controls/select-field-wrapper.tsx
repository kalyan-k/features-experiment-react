import React, { FunctionComponent } from "react";
import { FormControl, FormHelperText, InputLabel, Select, MenuItem } from "@material-ui/core";
import { SelectWrapperProps } from "../../../shared/interfaces/control-props";

const SelectWrapper: FunctionComponent<SelectWrapperProps> = (props) => {
    const { label, menuItems } = props;

    return (
        <FormControl variant="outlined">
            <InputLabel>{label}</InputLabel>
            <Select label={label}>
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