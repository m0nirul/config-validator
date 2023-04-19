use config_validator::validate_config;
use serde::Deserialize;
use validator::Validate;

#[derive(Deserialize, Debug, Validate)]
struct Config {
    #[validate(range(min = 1, message = "must be at least 1"))]
    port: u16,
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    validate_config("config.yaml", Config)?;
    println!("Config is valid");
    Ok(())
}