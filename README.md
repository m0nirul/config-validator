# Config Validator

A tool to validate and lint configuration files across multiple environments.

## Features
- Multi-environment support
- Schema-based validation
- Detailed error reporting

## Usage

### Installation

```bash
npm install config-validator
```

### Configuration

The tool supports validation for the following environments:
- Development
- Staging
- Production

Each environment has its own schema for validation. The schemas are defined in the `src/schemas` directory.

### Validation

To validate a configuration file, use the following command:

```bash
npx config-validator validate --env <environment> --file <path-to-config-file>
```

### Example

```bash
npx config-validator validate --env development --file config/development.json
```

## Schemas

The tool uses JSON Schema for validation. The base schema is defined in `src/schemas/baseEnvironmentSchema.ts` and extended for each environment in the `src/schemas` directory.

### Base Schema

The base schema defines common properties that are required in all environments.

```typescript
// src/schemas/baseEnvironmentSchema.ts

export const baseEnvironmentSchema = {
  type: 'object',
  properties: {
    apiUrl: { type: 'string' },
    databaseUrl: { type: 'string' }
  },
  required: ['apiUrl', 'databaseUrl']
} as const;
```

### Development Schema

The development schema extends the base schema and adds development-specific properties.

```typescript
// src/schemas/developmentSchema.ts

import { baseEnvironmentSchema } from './baseEnvironmentSchema';

export const developmentSchema = {
  ...baseEnvironmentSchema,
  properties: {
    ...baseEnvironmentSchema.properties,
    debugMode: { type: 'boolean' }
  },
  required: [...baseEnvironmentSchema.required, 'debugMode']
} as const;
```