const defaultConfig = {
    container: ".modal-container",
    buttonContainer: ".open-button",
    title: "Modal Title",
    body: "Modal Body"
}

export class Modal {
    constructor(config) {
        this.config = defaultConfig;
        this.init(config)
    }

    init(config) {
        for(let key in config) {
            this.config[key] = config[key]
        }
        this.createModal()
    }

    createModal(e) {
        this.container = document.querySelector(this.config.container)
        this.buttonContainer = document.querySelector(this.config.buttonContainer)

        if(!this.container) return
        if(!this.buttonContainer) return

        this.overlayEl = document.createElement("div")
        this.overlayEl.setAttribute("class", "overlay")

        document.body.appendChild(this.overlayEl)

        const frag = document.createDocumentFragment()

        let modalHeader = document.createElement("div");
        modalHeader.innerHTML = `
        <div class="modal-header">
            <div class="title">${this.config.title}</div>
            <button>&times;</button>
        </div>
        `;    

        const modalBody = document.createElement("div")
        modalBody.innerHTML = "<div>"+this.config.body+"</div>"

        frag.appendChild(modalHeader)
        frag.appendChild(modalBody)

        this.container.appendChild(frag)
        this.setupListeners()
    }

    setupListeners() {
        this.buttonContainer.addEventListener("click", () => {
            this.overlayEl.classList.add("active")
            this.container.classList.add("active")
        })

        const closeBtn = this.container.querySelector("button")
        closeBtn.addEventListener("click", () => {
            this.overlayEl.classList.remove("active")
            this.overlayEl.classList.remove("active")
        })
    }
}

