import { ISchemaValidator } from './ISchemaValidator';

const developmentSchemaValidator: ISchemaValidator = {
    validate: (config) => {
        if (!config.hasOwnProperty('apiUrl')) {
            throw new Error('Missing required property: apiUrl');
        }
        if (typeof config.apiUrl !== 'string') {
            throw new Error('Invalid type for apiUrl: expected string');
        }
        if (!config.hasOwnProperty('debugMode')) {
            throw new Error('Missing required property: debugMode');
        }
        if (typeof config.debugMode !== 'boolean') {
            throw new Error('Invalid type for debugMode: expected boolean');
        }
        // Additional validation logic can be added here
        return true;
    }
};

export default developmentSchemaValidator;