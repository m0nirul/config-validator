use serde::de::DeserializeOwned;
use validator::Validate;
use std::fs;
use std::error::Error;

/// Validates a configuration file against a given schema.
///
/// # Arguments
///
/// * `file_path` - A string slice that holds the path to the configuration file.
/// * `schema` - A reference to the schema that the configuration file should adhere to.
///
/// # Returns
///
/// * `Result<(), Box<dyn Error>>` - Returns Ok(()) if the configuration file is valid, otherwise returns an error.
///
pub fn validate_config<T>(file_path: &str, schema: T) -> Result<(), Box<dyn Error>>
where
    T: DeserializeOwned + Validate,
{
    let config_data = fs::read_to_string(file_path)?;
    let config: T = serde_yaml::from_str(&config_data)?;
    config.validate()?;
    Ok(())
}
