import { InputBaseProps, InputProps, OutlinedTextFieldProps, CheckboxProps, RadioGroupProps, SelectProps } from "@material-ui/core";
import { SwitchBaseProps } from "@material-ui/core/internal/SwitchBase";

interface BaseControlProps {
    
}

export interface TextFieldWrapperProps extends Omit<OutlinedTextFieldProps, 'variant'>, BaseControlProps {
    type?: string,
    onChange?: InputBaseProps['onChange'],
    InputProps?: Partial<InputProps>,
    inputProps?: InputBaseProps['inputProps'] // both input props are different and provided by material ui
}

export interface CheckboxWrapperProps extends CheckboxProps, BaseControlProps {
    label?: string,
    checked?: boolean,
    onChange?: SwitchBaseProps['onChange']
}

export interface RadioWrapperProps extends RadioGroupProps, BaseControlProps {
    label?: string,
    radioItems: Record<string, string>[],
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void
}

export interface SelectWrapperProps extends SelectProps, BaseControlProps {
    name: string,
    rules?: any,
    menuItems: Record<string, string>[],
}

export interface DatePickerWrapperProps extends Omit<OutlinedTextFieldProps, 'variant'>, BaseControlProps {
    type?: string,
    onChange?: InputBaseProps['onChange'],
    defaultValue?: unknown
}
