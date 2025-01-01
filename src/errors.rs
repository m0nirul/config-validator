use std::fmt;

#[derive(Debug, Clone)]
pub enum ValidationError {
    SchemaError(String),
    JsonError(String),
    YamlError(String),
    CustomError(String),
}

impl fmt::Display for ValidationError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            ValidationError::SchemaError(msg) => write!(f, "Schema error: {}", msg),
            ValidationError::JsonError(msg) => write!(f, "JSON error: {}", msg),
            ValidationError::YamlError(msg) => write!(f, "YAML error: {}", msg),
            ValidationError::CustomError(msg) => write!(f, "Custom error: {}", msg),
        }
    }
}

impl std::error::Error for ValidationError {}
