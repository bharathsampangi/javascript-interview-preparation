let defaultConfig = {
    container: ".carousel-container",
    data: [
        {
            src: "https://www.psdstack.com/wp-content/uploads/2019/08/copyright-free-images-750x420.jpg"
            
        }
    ]
}

let container

export function Carousel(config) {
    config = JSON.parse(JSON.stringify(config))
    Object.keys(defaultConfig).map((key) => {
        defaultConfig[key] = config[key]
    })

    createCarousel()
}

function createCarousel() {
    container = document.querySelector(defaultConfig.container)

    if(!container) return
}