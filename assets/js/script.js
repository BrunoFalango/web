/*
Case Sensitive = Reconhece letras maiusculas e minusculas

por tag: getElementByTag()
por Id: getElementById()
por Nome: getElementsByNome()
por Classe: getElementsByClassName()
po Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false 
let emaiOk = false 
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3) {
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }

}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')


    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email Inváido'
        txtEmail.style.color = 'red'
    } else{
        txtEmail.innerHTML = 'Email Valido'
        txtEmail.style.color = 'green'
        emaiOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no maximo 100 carácteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emaiOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    } else{
        alert('Preencha o formulário com seus dados corretamente')
    }
}

function mapaZoom() {
    mapa.style.width ='800px'
    mapa.style.height ='600px'
}

function mapaNormal() {
    mapa.style.width ='400px'
    mapa.style.height ='250px'
}