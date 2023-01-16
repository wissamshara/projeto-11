var lista = [35,38,42,45,43,34,36,41,48,32];

function setup() {
  createCanvas(400,400);

}
function media(){
  var soma;
soma = 0;
var media;
for(i = 0; i<lista.length; i++){
  soma = soma + lista[i];
}
media = soma / lista.length;
console.log(media);
}


function draw() 
{
  background(30);
}

 

