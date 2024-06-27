import Home from "./pages/Home.js"

class App{
    container
    activeScreen


  constructor(container) {
    this.container = container
  } 

  showScreen(screen){
    if (this.activeScreen){
        this.activeScreen.hiden()
    }
    this.activeScreen = screen
    this.activeScreen.render(this.container)
  }
}

let container = document.getElementById('app');

const app = new App(container);
const home = new Home();

app.showScreen(home);
export default app;