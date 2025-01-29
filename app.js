const CryptoJS = require("crypto-js");

//Criptografia
const texto = "Segredo!";
const textoCriptografado = CryptoJS.AES.encrypt(texto, "chave-secreta").toString();

console.log("Texto Criptografado:", textoCriptografado);

// Descriptografia
const bytes = CryptoJS.AES.decrypt(textoCriptografado, "chave-secreta");
const textoDescriptografado = bytes.toString(CryptoJS.enc.Utf8);

console.log("Texto Descriptografado:", textoDescriptografado);
