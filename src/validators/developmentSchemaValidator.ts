import { Schema, Validator } from 'jsonschema';

export const developmentSchema: Schema = {
    id: '/DevelopmentSchema',
    type: 'object',
    properties: {
        apiUrl: { type: 'string' },
        debug: { type: 'boolean' },
        logLevel: { type: 'string', enum: ['debug', 'info', 'warn', 'error'] }
    },
    required: ['apiUrl', 'debug', 'logLevel']
};

export const validateDevelopmentConfig = (config: any): boolean => {
    const validator = new Validator();
    return validator.validate(config, developmentSchema).valid;
};