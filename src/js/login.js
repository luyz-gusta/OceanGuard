const images = ['../assets/bg-login-1.jpg', '../assets/bg-login-2.jpg', '../assets/bg-login-3.jpg']
var indexSlide = 0
var time = 3000

const usuario = {
    email: 'costamaritima@gmail.com',
    senha: 'Costa1234@'
}


const validar = (event) => {
    event.preventDefault()

    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    if (email == '' || email == undefined || email == null) {
        alert('Email vázio, confira o email!!')
    } else if (senha == '' || senha == undefined || senha == null) {
        alert('Senha vázia, confira a senha!!')
    } else {
        if (usuario.email == email && usuario.senha == senha) {
            // window.open("./quiz.html")
        } else {
            alert('Usuário ou senha inválidos')
        }
    }
}

const slideShow = () => {
    const imageBanner = document.getElementById('imageBanner');
    imageBanner.style.opacity = '0';

    setTimeout(() => {
        imageBanner.style.transition = 'opacity 1s';
        imageBanner.style.opacity = '1';
        imageBanner.src = images[indexSlide];
    }, 350);

    indexSlide++;

    if (indexSlide == images.length) {
        indexSlide = 0;
    }

    setTimeout(slideShow, time);
}
slideShow()