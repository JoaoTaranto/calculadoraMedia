var campoMedia = document.getElementById("campoMedia")
var campoResultado = document.getElementById("campoAprovado")
 

function Somar() {
  var valorNota1 = document.getElementById("nota-1").value
  var valorNota2 = document.getElementById("nota-2").value
  var valorNota3 = document.getElementById("nota-3").value
  var valorNota4 = document.getElementById("nota-4").value


  var nota1 = parseFloat(valorNota1);
  var nota2 = parseFloat(valorNota2);
  var nota3 = parseFloat(valorNota3);
  var nota4 = parseFloat(valorNota4);

  var valorMédia = (nota1 + nota2 + nota3 + nota4) / 4

    if (valorMédia >= 5) {
      campoMedia.innerHTML = "Olá, sua média foi de " + valorMédia;
      campoResultado.innerHTML = "Você passou de ano! :D"
    } else if (valorMédia < 5) {
      campoMedia.innerHTML = "Olá, sua média foi de " + valorMédia;
      campoResultado.innerHTML = "Você reprovou de ano :C";
    }
  } 
    






//console.log(nota1)


//var nota1b = 5.5
//var nota2b = 6
//var nota3b = 7
//var nota4b = 6

//var notaFinal = (nota1b + nota2b + nota3b + nota4b) / 4

//var NotaAprox = notaFinal.toFixed(1)


//console.log("Bem vindo " + nome)

//console.log("Sua média final foi de " + NotaAprox)

//if(notaFinal >=5){console.log("Parabéns, você foi aprovado!")} else{console.log("Infelizmente você foi reprovado, média muito baixa! :c")}

