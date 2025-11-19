# Config Validator

A tool to validate and lint configuration files across multiple environments.

## Features
- Multi-environment support
- Schema-based validation
- Detailed error reporting

## Installation

```bash
npm install config-validator
```

## Usage

### Validate Configuration

To validate a configuration file, use the following command:

```bash
npx config-validator validate --env <environment> --config <path-to-config>
```

### Available Environments

- **development**: For local development.
- **staging**: For staging environment.
- **production**: For production environment.

### Example

```bash
npx config-validator validate --env development --config ./config/development.json
```

## Schemas

Each environment has its own schema defined in the `src/schemas` directory. The base schema is located in `src/schemas/baseEnvironmentSchema.ts`.
