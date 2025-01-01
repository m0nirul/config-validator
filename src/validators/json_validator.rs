use crate::errors::ValidationError;
use serde_json::Value;

pub fn validate_json(data: &str) -> Result<Value, ValidationError> {
    serde_json::from_str(data).map_err(|e| ValidationError::JsonError(e.to_string()))
}
