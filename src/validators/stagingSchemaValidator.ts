import { ISchemaValidator } from './baseSchemaValidator';

class StagingSchemaValidator implements ISchemaValidator {
    validate(config: any): string[] {
        const errors: string[] = [];
        // Add validation logic for staging environment
        return errors;
    }
}

export default StagingSchemaValidator;