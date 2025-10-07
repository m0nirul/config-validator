import { validateDevelopmentConfig } from './validators/developmentSchemaValidator';
import { validateStagingConfig } from './validators/stagingSchemaValidator';
import { validateProductionConfig } from './validators/productionSchemaValidator';

const validateConfig = (environment: string, config: any): boolean => {
    switch (environment) {
        case 'development':
            return validateDevelopmentConfig(config);
        case 'staging':
            return validateStagingConfig(config);
        case 'production':
            return validateProductionConfig(config);
        default:
            throw new Error('Unknown environment');
    }
};

export { validateConfig };