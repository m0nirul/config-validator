import { validateSchema, formatErrorMessage } from '../utils/validationUtils';
import { developmentSchema } from '../schemas/developmentSchema';

export const validateDevelopmentConfig = (config: any): string | null => {
    const errors = validateSchema(developmentSchema, config);
    if (errors) {
        return formatErrorMessage(errors);
    }
    return null;
};