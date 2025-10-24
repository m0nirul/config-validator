import { Schema } from 'jsonschema';
import { BaseSchemaValidator } from './baseSchemaValidator';

const developmentSchema: Schema = {
    // Define the development schema here
};

export class DevelopmentSchemaValidator extends BaseSchemaValidator {
    constructor() {
        super(developmentSchema);
    }
}