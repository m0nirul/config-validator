use std::fmt;

#[derive(Debug)]
pub enum ValidationError {
    ParseError(String),
    SchemaViolation(String),
    Custom(String),
}

impl fmt::Display for ValidationError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            ValidationError::ParseError(msg) => write!(f, "Parse Error: {}", msg),
            ValidationError::SchemaViolation(msg) => write!(f, "Schema Violation: {}", msg),
            ValidationError::Custom(msg) => write!(f, "Custom Error: {}", msg),
        }
    }
}

impl std::error::Error for ValidationError {}
