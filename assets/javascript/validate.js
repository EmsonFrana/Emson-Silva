//Seu JavaScript de validação aqui
const formulario = document.getElementById('form')
const nome = documen.getElementById('nome')
const email = document.getElementById('email')
const assunto = document.getElementById('assunto')
const mensagem = document.getElementById('mensagem')

const span = document.querySelectorAll('.span-required');
const campos = document.querySelectorAll('.required');
const emailRegex = /^\w+[-+.']\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

nome.addEventoListe('click',(event)=>{
    event.preventDefault()
    nomeValidar();
})

email.addEventListener('click',(event)=>{
    event.preventDefault()
    emailValidar();
})
assunto.addEventListener('click',(event)=>{
    event.preventDefault()
    assuntoValidar();
})

function validar(){
    nomeValidar();
    emailValidar();
    assuntoValidar();
}

function nomeValidar(){
    const newNome = nome.value
    if(newNome === ''){
        error(0);
    }else{
        removeError(0)
    }
}

function emailValidar(){
    if(email.value.indexOf('@') == -1 || email.value.indexOf(',') == -1 || (email.value.indexOf('.')-email.value.indexOf('@') == 1) ){
        error(1)
    } else{
        removeError(1)
    }
}

function assuntoValidar(){
    const newAssunto = assunto.value

    if(newAssunto === ''){
        error(2)
    }
    else{
        removeError(2)
    }
}

function error(index){
    span[index].style.display = 'block'
    campos[index].style.border = '2px solid #ff1212'
}
function removeError(index){
    span[index].style.display = ''; 
    campos[index].style.border = 'none';
 }

