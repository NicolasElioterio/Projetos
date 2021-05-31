var email, senha;

email = document.getElementById('enter-email');
senha = document.getElementById('enter-senha');

/* Botão Entrar */

function Entrar(){
    if((email == 'nicolaselioteriojf@gmail.com')&(senha == 'z4mcoupe')){
        alert('Olá Nicolas');
    }
}

/* Botão Cadastrar-se */

function Cadastrar(){
    alert('Email ou senha inválidos');
}

