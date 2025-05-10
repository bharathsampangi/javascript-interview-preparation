const defaultConfig = {
    container: "#otp-container",
    count: 4
}

export class OTPInput {
    constructor(config) {
        this.config = defaultConfig
        this.init(config)
    }

    init(config) {
        for(let key in config) {
            this.config[key] = config[key]
        }
        this.createOTPInputs()
    }

    createOTPInputs() {
        this.container = document.querySelector(this.config.container)

        if(!this.container) return

        const frag = document.createDocumentFragment()

        for(let i=0; i < this.config.count; i++) {
            let input = document.createElement("input")
            input.classList.add("input-otp")
            input.maxLength = 1
            input.setAttribute("type", "text")
            input.setAttribute("inputmode", "numeric")
            input.dataset.position = i + 1
            frag.appendChild(input)
        }

        this.container.appendChild(frag)

        this.container.addEventListener("input", this.onInput.bind(this))
        this.container.addEventListener("keyup", this.onKeyUp.bind(this))
    }

    onInput(e) {
        let key = e.target.dataset.position

        if(!e.target.value) {
            return
        }
        
        e.target.value = ""
        let nextSibling = e.target.nextSibling
        if(nextSibling) {
            nextSibling.focus()
        }
    }

    onKeyUp(e) {
        const key = e.key.toLowerCase()

        if(key === "delete" || key === "backspace") {
            e.target.value = ""
            let previousElementSibling = e.target.previousElementSibling

            if(previousElementSibling) {
                previousElementSibling.focus()
            }
        }
    }
}