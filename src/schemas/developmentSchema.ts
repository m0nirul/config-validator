import { baseEnvironmentSchema } from './baseEnvironmentSchema';

export const developmentSchema = {
  ...baseEnvironmentSchema,
  properties: {
    ...baseEnvironmentSchema.properties,
    apiUrl: {
      type: 'string',
      format: 'uri',
      description: 'The API URL for the development environment'
    },
    debugMode: {
      type: 'boolean',
      description: 'Whether debug mode is enabled'
    }
  }
};