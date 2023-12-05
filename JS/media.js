function calcularmedia(){
const primeiramedia = parseFloat(document.calculatorMedia.not1.value)
const segundamedia = parseFloat(document.calculatorMedia.not2.value)
let media
let situacao

media = (primeiramedia + segundamedia)/2;

if (media < 5)
{   
    situacao = "reprovado";
}
else if (media <= 8)
{  
    situacao = "aprovado";
}
else
{
    situacao = "aprovado com destaque"
}

const paragrafoAprovado = document.querySelector('.aprovado');
paragrafoAprovado.innerHTML = situacao;
 
const paragrafoSituacao = document.querySelector('.notamedia'); 
paragrafoSituacao.innerHTML = media;


}