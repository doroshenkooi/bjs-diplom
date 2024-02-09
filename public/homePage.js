class UserForm {
    constructor() {
     this.loginFormCallback = null;
    this.registerFormCallback = null;
     }
    
     setLoginFormCallback(callback) {
     this.loginFormCallback = callback;
     }
    
     setRegisterFormCallback(callback) {
     this.registerFormCallback = callback;
     }
    
     handleLoginFormSubmit(event) {
     event.preventDefault();
    
 const loginInput = document.getElementById("login");
    const passwordInput = document.getElementById("password");
    
    const login = loginInput.value;
     const password = passwordInput.value;
    
     if (this.loginformcallback) {
     this.loginFormCallback({ login, password });
 }
     }
    
    handleRegisterFormSubmit(event) {
     event.preventDefault();

     const loginInput = document.getElementById("login");
    const passwordInput = document.getElementById("password");

 const login = loginInput.value;
     const password = passwordInput.value;

 if (this.registerFormCallback) {
 this.registerFormCallback({ login, password });
     }
 }
    }
    
    class ApiConnector {
     static login({ login, password }, callback) {
if (callback) {
    callback();
     }
 }

 static register({ login, password }, callback) {
 
     if (callback) {
     callback();
     }
     }
    }
    
    const userForm = new UserForm();
    
    userForm.setLoginFormCallback((data) => {
     ApiConnector.login(data, () => {
     console.log("Авторизация успешна");
     alert("Авторизация успешна");
     });
    });
    
    userForm.setRegisterFormCallback((data) => {
    ApiConnector.register(data, () => {
     console.log('Регистрация успешна');
    alert('Регистрация успешна');
    });
    });
    
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", (event) => {
     userForm.handleLoginFormSubmit(event);
    });
    
    const registerForm = document.getElementById("register-form");
    registerForm.addEventListener("submit", (event) => {
     userForm.handleRegisterFormSubmit(event);
    });
    
    