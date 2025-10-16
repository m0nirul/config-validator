import { SchemaValidator } from './index';

class ProductionSchemaValidator extends SchemaValidator {
    constructor() {
        super();
        this.schema = {
            type: 'object',
            properties: {
                apiUrl: { type: 'string' },
                maintenanceMode: { type: 'boolean' }
            },
            required: ['apiUrl', 'maintenanceMode']
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