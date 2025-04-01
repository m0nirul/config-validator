use serde_json::Value;
use crate::errors::ValidationError;

pub fn validate_json(config: &str) -> Result<Value, ValidationError> {
    let parsed: Value = serde_json::from_str(config)
        .map_err(|e| ValidationError::ParseError(format!("Failed to parse JSON: {}", e)))?;
    // Additional validation logic can be added here
    Ok(parsed)
}