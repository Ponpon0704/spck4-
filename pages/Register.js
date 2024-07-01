import app from "../scripts/index.js";
import Login from "./Login.js";

class Register {
    constructor() {
        this.$txtEmail = document.createElement("input");
        this.$txtEmail.type = "email";
        this.$txtEmail.placeholder = "Enter your email ...";

        this.$txtUserName = document.createElement("input");
        this.$txtUserName.type = "text";
        this.$txtUserName.placeholder = "What's your name?";

        this.$txtPassword = document.createElement("input");
        this.$txtPassword.type = "password";
        this.$txtPassword.placeholder = "Enter your password ...";

        this.$txtConfirmPass = document.createElement("input");
        this.$txtConfirmPass.type = "password";
        this.$txtConfirmPass.placeholder = "Confirm your password ...";

        this.$btnSubmit = document.createElement("button");
        this.$btnSubmit.innerHTML = "Register";
        this.$btnSubmit.type = "submit";

        this.$errorMessage = document.createElement("p");
        this.$errorMessage.classList.add("error");

        this.$formRegister = document.createElement("form");

        this.$txtGotoLogin = document.createElement("a");
        this.$txtGotoLogin.innerHTML = "You already have an account?";
        this.$txtGotoLogin.href = "#";
        this.$txtGotoLogin.addEventListener("click", this.gotoLogin);

        this.$formRegister.addEventListener("submit", this.handleSubmit);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const email = this.$txtEmail.value;
        const pass = this.$txtPassword.value;
        const userName = this.$txtUserName.value;
        const confirmPass = this.$txtConfirmPass.value;

        this.setError("");

        if (email === "") {
            this.setError("Email cannot be empty!");
            return;
        }
        if (pass === "") {
            this.setError("Password cannot be empty!");
            return;
        }
        if (userName === "") {
            this.setError("User name cannot be empty!");
            return;
        }
        if (confirmPass === "") {
            this.setError("Confirm your password!");
            return;
        }
        if (confirmPass !== pass) {
            this.setError("Your passwords do not match!");
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then((userCredential) => {
                firebase.auth().currentUser.updateProfile({ displayName: userName });
                firebase.auth().currentUser.sendEmailVerification();
                console.log('User registered and email verification sent:', userCredential.user);
                app.changeActiveScreen("login");
            })
            .catch((error) => {
                this.setError(error.message);
                console.error('Error registering:', error);
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

    initRender = (container) => {
        this.$formRegister.innerHTML = "";
        const flexContainer = document.createElement("div");
        const title = document.createElement("h2");
        title.innerHTML = "Create your account";
        flexContainer.classList.add("d-flex", "flex-column", "centering");

        flexContainer.appendChild(title);
        flexContainer.appendChild(this.$errorMessage);
        flexContainer.appendChild(this.$txtEmail);
        flexContainer.appendChild(this.$txtUserName);
        flexContainer.appendChild(this.$txtPassword);
        flexContainer.appendChild(this.$txtConfirmPass);
        flexContainer.appendChild(this.$btnSubmit);
        flexContainer.appendChild(this.$txtGotoLogin);

        this.$formRegister.appendChild(flexContainer);
        container.appendChild(this.$formRegister);
    };

    gotoLogin = (event) => {
        event.preventDefault();
        app.changeActiveScreen("login");
    };
}

export default Register;
