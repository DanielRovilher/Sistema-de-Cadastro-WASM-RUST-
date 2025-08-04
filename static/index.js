import init, {validar_senha} from "./pkg/validador_rust.js";
async function IniciarAplicacao(){

await init();

let formulario = document.getElementById("formulario");
let nomedousuario = document.getElementById("nome_usuario");
let senhadousuario = document.getElementById("senha");
formulario.addEventListener('submit', (evento) => {
evento.preventDefault();
let nome = nomedousuario.value;
let senha = senhadousuario.value;

console.log("nome do usuario foi pego ", nome);
console.log("senha do usuario foi pega", senha);

if(nome.length < 3){
    console.error("Nome de usuário deve conter no mínimo 3 caracteres.");
    return;
}
if(validar_senha(senha)){
    console.log("Validação frontend aprovada. Enviando para o servidor...");

    const dados = {
        nome_usuario: nome,
        senha: senha
    };

}else{
    console.error("Credenciais inválidas.")
}
})
}
IniciarAplicacao();