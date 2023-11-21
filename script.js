function botaoEnviar() {

    var  coletarEmail = document.getElementById('email').value
    var coletarComentario = document.getElementById('caixaDeComentario').value
   
    console.log(coletarEmail)
    console.log(coletarComentario)

// Coletar hora
let dia = new Date();
let hora = dia.getHours().toString().padStart(2, '0');
let minutos = dia.getMinutes().toString().padStart(2, '0');
let segundos = dia.getSeconds().toString().padStart(2, '0');

// Salvar hora na variável hora_atual
console.log(`O horário atual é: ${hora}:${minutos}:${segundos}`);
const hora_atual = (`${hora}:${minutos}:${segundos}`)
 
// Coletar dia,mes,ano
let data = new Date();
let diaComentario = data.getDay()
let mes = data.getMonth()
let ano = data.getFullYear()

// Salvar data do comentario na variável hora_atual
console.log(`A data atual e:${diaComentario}/${mes}/${ano}`)
const diaDoComentario = (`${diaComentario}/${mes}/${ano}`)

    document.getElementById('exibirEmail').innerHTML = coletarEmail
    document.getElementById('exibirDataeHora').innerHTML = "Em " + diaDoComentario + ", " + hora_atual
    document.getElementById('exibirComentario').innerHTML = coletarComentario

    document.getElementById('email').value = ''
    document.getElementById('caixaDeComentario').value = ''
}



