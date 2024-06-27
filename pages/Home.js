import Navbar from "../components/navbar.js";
import Hero from "../components/hero.js";
import Footer from "../components/footer.js";

class Home {
    render(container) {
        const nav = new Navbar()
        container.appendChild(nav.render())

        const hero = new Hero()
        container.appendChild(hero.render())

        const footer = new Footer()
        container.appendChild(footer.render())
    }
}

export default Home;

