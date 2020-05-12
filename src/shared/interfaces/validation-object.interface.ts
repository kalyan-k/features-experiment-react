export interface IValidationObj {
    [key: string]: Array<{ [key: string]: Function | boolean | undefined }>
}