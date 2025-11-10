import { baseEnvironmentSchema } from './baseEnvironmentSchema';

export const stagingSchema = {
  ...baseEnvironmentSchema,
  properties: {
    ...baseEnvironmentSchema.properties,
    apiUrl: {
      type: 'string',
      format: 'uri',
      description: 'The API URL for the staging environment'
    },
    featureFlags: {
      type: 'object',
      properties: {
        newFeature: {
          type: 'boolean',
          description: 'Whether the new feature is enabled'
        }
      }
    }
  }
};