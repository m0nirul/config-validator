use serde_json::Value;
use thiserror::Error;
use crate::errors::ValidationError;

#[derive(Debug, Error)]
pub enum JsonValidationError {
    #[error("Invalid JSON format")]
    InvalidFormat,
    #[error("JSON validation failed: {0}")]
    ValidationFailed(String),
}

impl From<serde_json::Error> for JsonValidationError {
    fn from(err: serde_json::Error) -> Self {
        JsonValidationError::InvalidFormat
    }
}

impl From<JsonValidationError> for ValidationError {
    fn from(err: JsonValidationError) -> Self {
        ValidationError::JsonValidationFailed(err.to_string())
    }
}

pub fn validate_json(json: &str) -> Result<Value, JsonValidationError> {
    let parsed: Value = serde_json::from_str(json)?;
    // Add custom validation logic here
    Ok(parsed)
}