pub mod json_validator;

pub trait Validator {
    fn validate(&self, value: &serde_json::Value) -> Result<(), String>;
}
