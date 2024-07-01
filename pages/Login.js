import app from "../scripts/index.js";

class Login {
    constructor() {
        this.$txtEmail = document.createElement("input");
        this.$txtEmail.type = "email";
        this.$txtEmail.placeholder = "Enter your email ...";

        this.$txtPassword = document.createElement("input");
        this.$txtPassword.type = "password";
        this.$txtPassword.placeholder = "Enter your password ...";

        this.$formLogin = document.createElement("form");
        this.$btnSubmit = document.createElement("button");
        this.$btnSubmit.innerHTML = "Login";
        this.$btnSubmit.type = "submit";

        this.$txtGotoRegister = document.createElement("a");
        this.$txtGotoRegister.innerHTML = "Register your new account";
        this.$txtGotoRegister.href = "#";
        this.$txtGotoRegister.addEventListener("click", this.gotoRegister);

        this.$errorMessage = document.createElement("p");
        this.$errorMessage.classList.add("error");
    }

    initRender(container) {
        this.$formLogin.innerHTML = "";
        const flexContainer = document.createElement("div");
        flexContainer.classList.add("d-flex", "flex-column", "centering");

        const title = document.createElement("h2");
        title.innerHTML = "Login";
        title.classList.add("login-title");

        flexContainer.appendChild(title);
        flexContainer.appendChild(this.$errorMessage);
        flexContainer.appendChild(this.$txtEmail);
        flexContainer.appendChild(this.$txtPassword);
        flexContainer.appendChild(this.$btnSubmit);
        flexContainer.appendChild(this.$txtGotoRegister);

        this.$formLogin.appendChild(flexContainer);
        this.$formLogin.addEventListener("submit", this.login);
        container.appendChild(this.$formLogin);
    }

    gotoRegister = (event) => {
        event.preventDefault();
        app.changeActiveScreen("register");
    };

    login = (event) => {
        event.preventDefault();
        const email = this.$txtEmail.value;
        const password = this.$txtPassword.value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log('User signed in:', userCredential.user);
                app.changeActiveScreen("home");
            })
            .catch((error) => {
                this.setError(error.message);
                console.error('Error signing in:', error);
            });
    };

    setError = (message) => {
        this.$errorMessage.innerHTML = message;
        if (message !== "") {
            this.$errorMessage.style.display = "block";
        } else {
            this.$errorMessage.style.display = "none";
        }
    };
}

export default Login;
