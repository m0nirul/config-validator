import { Schema } from 'jsonschema';

export class BaseSchemaValidator {
    protected schema: Schema;
    
    constructor(schema: Schema) {
        this.schema = schema;
    }
    
    public validate(data: any): void {
        const result = this.schema.validate(data);
        if (!result.valid) {
            throw new Error(`Validation failed: ${JSON.stringify(result.errors)}`);
        }
    }
}