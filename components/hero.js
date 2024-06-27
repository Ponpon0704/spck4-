// 1 tag Img
// 3 tag H1 trong 1 tag div
class Hero{
    constructor(){
        
    };
    
    render() {
        let heroContainer = document.createElement("div")
        heroContainer.classList.add("hero-container")

        let greeting = document.createElement("h1")
        greeting.innerHTML = "Hello, I'm Mạnh"
        greeting.classList.add("greeting")

        let role = document.createElement("h1")
        role.innerHTML = "I'm a student at MindX School"

        let wish = document.createElement("h1")
        wish.innerHTML = "I want to become a fullstack Developer"

        let imgContainer = document.createElement("div")
        imgContainer.classList.add("imgContainer")

        let img = document.createElement("img")
        img.src = "https://kenh14cdn.com/thumb_w/660/203336854389633024/2024/4/2/photo-4-17120205123622122789855.jpg"
        img.classList.add("img")

        heroContainer.appendChild(greeting)
        heroContainer.appendChild(role)
        heroContainer.appendChild(wish)
        imgContainer.appendChild(img)
        heroContainer.appendChild(imgContainer)
        return heroContainer
    }
    
}


export default Hero;