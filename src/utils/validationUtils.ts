import { Schema } from 'joi';

export const validateSchema = (schema: Schema, data: any): string | null => {
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
        return error.details.map(detail => detail.message).join('\n');
    }
    return null;
};

export const formatErrorMessage = (errors: string): string => {
    return `Validation failed:\n${errors}`;
};