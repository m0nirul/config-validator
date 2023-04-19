use config_validator::validate_config;
use serde::Deserialize;
use validator::Validate;

#[derive(Deserialize, Debug, Validate)]
struct TestConfig {
    #[validate(range(min = 1, message = "must be at least 1"))]
    port: u16,
}

#[test]
fn test_valid_config() {
    let result = validate_config("tests/fixtures/valid_config.yaml", TestConfig);
    assert!(result.is_ok());
}

#[test]
fn test_invalid_config() {
    let result = validate_config("tests/fixtures/invalid_config.yaml", TestConfig);
    assert!(result.is_err());
}