import { Rule } from "effector-forms/dist-types";

export const rulesConfig = {
    required: (): Rule<string> => ({
        name: "required",
        validator: (value) => Boolean(value),
    }),
    email: (): Rule<string> => ({
        name: "email",
        validator: (value) => /\S+@\S+\.\S+/.test(value)
    }),
    minLength: (min: number): Rule<string> => ({
        name: "minLength",
        validator: (value) => value.length >= min 
    }),
    maxLength: (max: number): Rule<string> => ({
        name: "maxLength",
        validator: (value) => value.length <= max 
    }),
}