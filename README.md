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

### Validation

To validate a configuration file, use the following command:

```bash
npx config-validator validate --env <environment> --file <path-to-config-file>
```

### Environments

The tool supports the following environments:
- Development
- Staging
- Production

### Schema Validation

The tool uses schema-based validation to ensure that configuration files adhere to the specified schema. The schemas are defined in the `src/schemas` directory.

- **Base Schema**: Defines the common structure for all environments.
- **Development Schema**: Extends the base schema with development-specific rules.
- **Staging Schema**: Extends the base schema with staging-specific rules.
- **Production Schema**: Extends the base schema with production-specific rules.

### Error Reporting

The tool provides detailed error reporting to help identify and fix issues in configuration files.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
