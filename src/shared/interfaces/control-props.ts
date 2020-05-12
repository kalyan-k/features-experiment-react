import { InputBaseProps, InputProps, OutlinedTextFieldProps, CheckboxProps, RadioGroupProps, SelectProps } from "@material-ui/core";
import { SwitchBaseProps } from "@material-ui/core/internal/SwitchBase";
import { IValidationObj } from "./validation-object.interface";
import { Dispatch, SetStateAction } from "react";
import { IErrorObj } from "./error-object.interface";

interface BaseControlProps {
    validationObj: IValidationObj,
    setValidationObj: Dispatch<SetStateAction<IValidationObj>>
    errorObj: IErrorObj,
    setErrorObj: Dispatch<SetStateAction<IErrorObj>>
}

export interface TextFieldWrapperProps extends Omit<OutlinedTextFieldProps, 'variant'>, BaseControlProps {
    type?: string,
    model: any,
    updatePath: string,
    globalDispatch: any,
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
    model: any,
    updatePath: string,
    globalDispatch: any,
    radioItems: Record<string, string>[],
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface SelectWrapperProps extends SelectProps, BaseControlProps {
    name: string,
    rules?: any,
    model: any,
    updatePath: string,
    globalDispatch: any,
    menuItems: Record<string, string>[],
}

export interface DatePickerWrapperProps extends Omit<OutlinedTextFieldProps, 'variant'>, BaseControlProps {
    type?: string,
    onChange?: InputBaseProps['onChange'],
    defaultValue?: unknown
}
