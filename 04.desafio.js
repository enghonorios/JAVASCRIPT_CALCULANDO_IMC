/** O IMC é criterio de organização mundial de saude para dar uma indicação sobre a condição de peso de uma pessoa adulta.
 * 
 * Formula do IMC: 
 * IMC = peso / (altura * altura)
 * 
 * Elabore um algoritmo que dado o peso e altura de um adulto mostre sua condição de acordo com a tabela abaixo. 
 * 
 * IMC em adultos condiçõa:
 * Abaixo de 18.5 abaixo do peso;
 * Entre 18.5 e 25 peso normal;
 * Entre 25 e 30 acima do peso;
 * Entre 30 e 40 obeso;
 * Acima de 40 obesidade grave;*/
const peso = 81;
const altura = 1.58;

const abaixoDoPeso = 18.5;
const pesoNormal = 25;
const acimaDoPeso = 30;
const obeso = 40;
const obesidadeGrave = 40;

const IMC = (peso) / Math.pow(altura, 2);
console.log(IMC.toFixed(2));

if (IMC < abaixoDoPeso) {
    console.log('Abaixo do Peso:', IMC.toFixed(2));
} else if (IMC >= abaixoDoPeso && IMC < pesoNormal) {
    console.log('Peso normal:', IMC.toFixed(2));
} else if (IMC >= pesoNormal && IMC < acimaDoPeso) {
    console.log('Acima do peso:', IMC.toFixed(2));
} else if (IMC >= acimaDoPeso && IMC < obeso) {
    console.log('Obeso:', IMC.toFixed(2));
} else if (IMC > obesidadeGrave) {
    console.log('Obesividade grave:', IMC.toFixed(2));
} else {
    console.log('Pesado inválido')
}