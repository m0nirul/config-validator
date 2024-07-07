use serde_json::Value;
use std::fs;
use std::io::Read;
use std::path::Path;

pub fn validate_json(file_path: &str) -> Result<Value, String> {
    let mut file = fs::File::open(file_path).map_err(|e| e.to_string())?;
    let mut contents = String::new();
    file.read_to_string(&mut contents).map_err(|e| e.to_string())?;
    let json: Value = serde_json::from_str(&contents).map_err(|e| e.to_string())?;
    Ok(json)
}
