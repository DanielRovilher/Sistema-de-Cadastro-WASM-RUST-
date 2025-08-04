use wasm_bindgen::prelude::*;
#[wasm_bindgen]
pub fn validar_senha(senha: &str) -> bool{
if senha.len() < 8 {
    return false;
}
if senha.contains(' '){
    return false;
}
let tem_maiuscula= senha.chars().any(|c| c.is_uppercase());
let tem_minuscula= senha.chars().any(|c| c.is_lowercase());
let tem_numero= senha.chars().any(|c| c.is_digit(10));

tem_maiuscula&&tem_minuscula&&tem_numero
}