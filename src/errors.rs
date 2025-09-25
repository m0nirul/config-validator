use thiserror::Error;

#[derive(Debug, Error)]
pub enum ValidationError {
    #[error("JSON validation failed: {0}")]
    JsonValidationFailed(String),
    #[error("YAML validation failed: {0}")]
    YamlValidationFailed(String),
    #[error("Schema validation failed: {0}")]
    SchemaValidationFailed(String),
}