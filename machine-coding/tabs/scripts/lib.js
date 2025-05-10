const defaultConfig = {
    container: ".tabs-container",
    tabs: [
        {
            title: "sports",
            content: "<span>This is Content 1</span>",
        }, 
        {
            title: "business",
            content: "<span>This is Content 2</span>",
        },
        {
            title: "education",
            content: "<span>This is Content 3</span>",
        }
    ]
}

export class Tab {
    constructor(config) {
        this.config = JSON.parse(JSON.stringify(defaultConfig))
        this.init(config)
    }

    init(config) {
        Object.keys(config).forEach((key) => {
            this.config[key] = config[key]
        })
        this.createTabs()
    }

    createTabs() {
        this.container = document.querySelector(this.config.container)

        if(!this.container) return

        const frag = document.createDocumentFragment()

        const fragTabsHeader = document.createDocumentFragment()

        const fragTabsContent = document.createDocumentFragment()

        this.tabsHeader = document.createElement("div")
        this.tabsHeader.classList.add("tabs-header")

        this.tabsContent = document.createElement("div")
        this.tabsContent.classList.add("tabs-content")

        for(let i = 0; i < this.config.tabs.length; i++) {
            const {title, content} = this.config.tabs[i]

            const tabHeader = document.createElement("div")
            tabHeader.setAttribute("data-tab-header", title)
            tabHeader.textContent = title
            
            const tabContent = document.createElement("div")
            tabContent.setAttribute("data-tab-content", title)
            tabContent.innerHTML = content

            fragTabsHeader.appendChild(tabHeader)
            fragTabsContent.appendChild(tabContent)
        }

        this.tabsHeader.appendChild(fragTabsHeader)
        this.tabsContent.appendChild(fragTabsContent)

        frag.appendChild(this.tabsHeader)
        frag.appendChild(this.tabsContent)

        this.container.appendChild(frag)

        this.tabsHeader.children[0].classList.add("active")
        this.tabsContent.children[0].classList.add("active")

        this.container.addEventListener("click", this.onClick.bind(this))
    }

    onClick(e) {
        let target = e.target.dataset.tabHeader
        const headers = [...this.tabsHeader.children]

        headers.forEach((tab) => {
            tab.classList.remove("active")
            if(tab.dataset.tabHeader === target) {
                tab.classList.add("active")
            }
        })

        const contents = [...this.tabsContent.children]

        contents.forEach((tab) => {
            tab.classList.remove("active")
            if(tab.dataset.tabContent === target) {
                tab.classList.add("active")
            }
        })
    }
}