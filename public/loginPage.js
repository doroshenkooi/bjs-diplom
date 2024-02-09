"use strict";

class UserForm {
    constructor() {
        this.loginFormCallback = function (data) {
            let login = data.email;
            let password = data.password;
            ApiConnector.login({ login, password }, function (response) {
                console.log(response);
                if (response.success) {
                    location.reload();
                } else {
                    let errorField = document.querySelector('#login .ui.message.negative');
                    errorField.style.display = 'block';
                    errorField.innerHTML = 'Неверный логин или пароль.';
                }
            });
        }

        this.registerFormCallback = function (data) {
            let login = data.email;
            let password = data.password;
            ApiConnector.register({ login, password }, function (response) {
                console.log(response);
                if (response.success) {
                    location.reload();
                } else {
                    let errorField = document.querySelector('#register .ui.message.negative');
                    errorField.style.display = 'block';
                    errorField.innerHTML = 'Ошибка при регистрации.';
                }
            });
        }
    }
}

let userForm = new UserForm();

document.querySelector('#login').addEventListener('submit', function (event) {
    event.preventDefault();
    let email = document.querySelector('#login input[name="email"]').value;
    let password = document.querySelector('#login input[name="password"]').value;
    userForm.loginFormCallback({ email, password });
});

document.querySelector('#register').addEventListener('submit', function (event) {
    event.preventDefault();
    let email = document.querySelector('#register input[name="email"]').value;
    let password = document.querySelector('#register input[name="password"]').value;
    userForm.registerFormCallback({ email, password });
});
