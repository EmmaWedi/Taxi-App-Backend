export interface Validator {
    (data: any): { isValid: boolean };
}