export const baseEnvironmentSchema = {
    type: 'object',
    properties: {
        env: {
            type: 'string',
            enum: ['development', 'staging', 'production']
        },
        port: {
            type: 'number'
        }
    },
    required: ['env', 'port']
};
