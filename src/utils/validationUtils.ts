import { Schema } from 'jsonschema';

export const validateSchema = (schema: Schema, data: any): void => {
    const validator = new Schema(schema);
    const result = validator.validate(data, { throwAll: true });
    if (!result.valid) {
        throw new Error(`Validation failed: ${JSON.stringify(result.errors)}`);
    }
};
