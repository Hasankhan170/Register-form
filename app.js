const form = document.querySelector('.form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const changePassword = document.querySelector('#change-password')
const btn = document.querySelector('button')

const nameRegex = /^[A-Z][a-zA-Z0-9]{5,14}$/;
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

form.addEventListener('submit' , (event)=>{
    event.preventDefault()
    if(nameRegex.test(username.value)){
        console.log(username.value)
    }else{
        console.error('Username does not match the required pattern');
    }

    if(emailRegex.test(email.value)){
        console.log(email.value)
    }else{
        console.error('Email does not match the required pattern');
    }

    if(passwordRegex.test(password.value)){
        console.log(password.value)
    }else{
        console.error('Password does not match the required pattern');
    }
    if (password.value !== changePassword.value) {
        console.error('Passwords do not match');
    } else {
        console.log(changePassword.value);
    }
})



