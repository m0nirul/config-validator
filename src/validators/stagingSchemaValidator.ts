import { validateSchema } from '../utils/validationUtils';
import stagingSchema from '../schemas/stagingSchema.json';

export const validateStagingConfig = (data: any): void => {
    validateSchema(stagingSchema, data);
};
