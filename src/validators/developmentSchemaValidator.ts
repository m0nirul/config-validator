import { ISchemaValidator } from './baseSchemaValidator';

class DevelopmentSchemaValidator implements ISchemaValidator {
    validate(config: any): string[] {
        const errors: string[] = [];
        // Add validation logic for development environment
        return errors;
    }
}

export default DevelopmentSchemaValidator;