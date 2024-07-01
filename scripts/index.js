import Home from "../pages/Home.js";
import Login from "../pages/Login.js";
import Register from "../pages/Register.js";

class App {
    constructor(container) {
        this.container = container;
        this.routes = {
            login: new Login(),
            register: new Register(),
            home: new Home()
        };
    }

    changeActiveScreen(screenName) {
        const screen = this.routes[screenName];
        if (screen) {
            this.container.innerHTML = "";
            screen.initRender(this.container);
        }
    }
}

const container = document.getElementById("app");
const app = new App(container);
app.changeActiveScreen("login");

export default app;
