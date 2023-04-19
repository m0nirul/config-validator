# config-validator

A Rust library for validating configuration files.

Ensures configuration files adhere to specified schemas, reducing runtime errors and enhancing reliability.

## Installation

Add the following to your `Cargo.toml`:

```toml
[dependencies]
config-validator = "0.1.0"
```

Then run:

```sh
cargo build
```

## Usage

Here is an example of how to use the library:

```rust
use config_validator::Validator;
use serde::Deserialize;
use std::fs;

#[derive(Deserialize, Debug, Validate)]
struct Config {
    #[validate(range(min = 1, message = "must be at least 1"))]
    port: u16,
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let config_data = fs::read_to_string("config.yaml")?;
    let config: Config = serde_yaml::from_str(&config_data)?;
    config.validate()?;
    println!("Config is valid: {:?}", config);
    Ok(())
}
```

## Features

- Schema-based validation
- YAML and JSON support
- Custom validation rules