import { validateSchema } from '../utils/validationUtils';
import developmentSchema from '../schemas/developmentSchema.json';

export const validateDevelopmentConfig = (data: any): void => {
    validateSchema(developmentSchema, data);
};
