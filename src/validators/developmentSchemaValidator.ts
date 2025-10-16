import { SchemaValidator } from './index';

class DevelopmentSchemaValidator extends SchemaValidator {
    constructor() {
        super();
        this.schema = {
            type: 'object',
            properties: {
                apiUrl: { type: 'string' },
                debugMode: { type: 'boolean' }
            },
            required: ['apiUrl', 'debugMode']
        };
    }

    validateConfig(config: any): void {
        this.validate(config, this.schema);
    }

    validate(config: any, schema: any): void {
        const { errors } = this.validator.validate(config, schema);
        if (errors.length > 0) {
            throw new Error(JSON.stringify(errors, null, 2));
        }
    }
}