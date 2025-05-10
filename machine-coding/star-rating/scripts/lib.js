
const starEntity = "&#9733;"
const defaultConfig = {
    container: "#star-container",
    onColor: "yellow",
    offColor: "gray",
    count: 5,
    filledStars: 0,
    size: "4rem"
}

class Star {
    constructor(config) {
        this.config = defaultConfig
        this.init(config)
    }

    init(config) {
        for(let key in config) {
            this.config[key] = config[key]
        }
        this.createStars(this.config)
    }

    createStars(config) {
        this.container = document.querySelector(config.container)

        if(!this.container) return

        const frag = document.createDocumentFragment()

        for(let i=0; i < config.count; i++) {
            const star = document.createElement("span")
            star.innerHTML = starEntity;
            star.style.color = config.offColor
            star.style.fontSize = config.size
            star.dataset.rate = i + 1
            frag.appendChild(star)
        }

        this.container.appendChild(frag)
        this.stars = this.container.children
        this.filledStars = 0

        //event listeners
        this.container.addEventListener("mouseover", this.onMouseOver.bind(this))
        this.container.addEventListener("mouseout", this.onMouseOut.bind(this))
        this.container.addEventListener("click", this.onClick.bind(this))
    }

    onMouseOver(e) {
        let rate = Number(e.target.dataset.rate)

        for(let i=0; i < this.config.count; i++) {
            this.stars[i].style.color = this.config.offColor
        }

        for(let i=0; i < rate; i++) {
            this.stars[i].style.color = this.config.onColor
        }
    }

    onMouseOut(e) {
        for(let i=0; i<this.config.count; i++) {
            this.stars[i].style.color = this.config.offColor
        }

        for(let i=0; i < this.filledStars; i++) {
            this.stars[i].style.color = this.config.onColor
        }
    }

    onClick(e) {
        let selectedStar = Number(e.target.dataset.rate)
        this.filledStars = selectedStar

        for(let i=0; i < this.config.count; i++) {
            this.stars[i].style.color = this.config.offColor
        }

        for(let i=0; i < selectedStar; i++) {
            this.stars[i].style.color = this.config.onColor
        }
    }
}

export default Star