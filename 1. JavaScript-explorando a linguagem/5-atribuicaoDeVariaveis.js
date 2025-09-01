console.log("Trabalhando com atribuição de variáveis");
const idade = 37;
const primeiroNome = "Lucivaldo";
const sobrenome = "Junior";

console.log(primeiroNome + sobrenome); // vai aparecer tudo junto sem espaço

console.log(primeiroNome, sobrenome); // nesse caso a vígula atuará como espaço

// console.log(primeiroNome + " " + sobrenome); // ou podemos concatenar um espaço

console.log(`Meu nome é ${primeiroNome} ${sobrenome}`); // ou usando Template String, que deixa o código muito mais legível
// interpolação = colocar valores de variáveis ou expressões diretamente dentro de um texto

let contador = 0; // quando queremos que uma variável literalemnte possa variar usamos "let" e quando não usamos "const" de constante
contador = contador + 1;

console.log(contador);

const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);