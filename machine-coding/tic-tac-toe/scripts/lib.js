const defaultConfig = {
    container: ".tic-tac-container",
    count: 3,
    playerX: "tick",
    playerY: "cross",
    width: "6rem",
    height: "6rem",
    padding: "1.5rem"
}

export class TicTacToe {
    constructor(config) {
        this.config = defaultConfig
        this.init(config)
    }

    init(config) {
        Object.keys(config).forEach((key) => {
            this.config[key] = config[key]
        })
        this.createBoard()
    }

    createBoard() {
        this.container = document.querySelector(this.config.container)

        if(!this.container) return

        const table = document.createElement("table")

        const frag = document.createDocumentFragment()

        for(let i=0; i < this.config.count; i++) {
            const tr = document.createElement("tr")
            for(let j=0; j < this.config.count; j++) {
                let td = document.createElement("td")
                td.classList.add("box")
                td.dataset.value = `${i}-${j}`
                td.style.width = this.config.width
                td.style.height = this.config.height
                td.style.padding = this.config.padding
                tr.appendChild(td)
            }
            frag.appendChild(tr)
        }

        table.appendChild(frag)

        this.container.appendChild(table)

        this.map = new Map()

        this.playerX = true

        this.container.addEventListener("click", this.onClick.bind(this))

    }

    onClick(e) {
        const ele = e.target.dataset.value

        let tds = document.querySelectorAll('td')

        tds.forEach((td) => {
            if(td.dataset.value == ele) {
                if(this.playerX) {
                    td.classList.add(this.config.playerX)
                    td.innerHTML = "&#10008;"
                    this.map.set(ele, "X")
                } else {
                    td.classList.add(this.config.playerY)
                    td.innerHTML = "&#10061;"
                    this.map.set(ele, "0")
                }
                this.playerX = !this.playerX
            }
        })

        this.result = this.checkWin()
        
        const resultEl = document.createElement("div")
        resultEl.innerHTML = `The winner is player ${this.result}`
        if(this.result) {
            this.container.appendChild(resultEl)
            
        }
    }

    checkWin() {
        // check horizontal row
        for(let i=0; i < this.config.count; i++) {
            const set = new Set()
            let player
            let filled = 0
            for(let j=0; j < this.config.count; j++) {
                player = this.map.get(`${i}-${j}`)
                if(player) {
                    set.add(player)
                    filled++
                }
            }
            if(set.size === 1 && filled === this.config.count) {
                return player
            }
        }

        //check vertical cols
        for(let i=0; i < this.config.count; i++) {
            const set = new Set()
            let player
            let filled = 0
            for(let j=0; j < this.config.count; j++) {
                player = this.map.get(`${j}-${i}`)
                if(player) {
                    set.add(player)
                    filled++
                }
            }
            if(set.size === 1 && filled === this.config.count) {
                return player
            }
        }
        
        // check right to left diagonal
        let set = new Set()
        let player
        let filled = 0
        for(let i=0; i < this.config.count; i++) {
            for(let j=0; j < this.config.count; j++) {
                console.log('running')
                if(i === j) {
                    player = this.map.get(`${i}-${j}`)
                    if(player) {
                        set.add(player)
                        filled++
                    }
                }
            }
        }
        if(set.size === 1 && filled === this.config.count) {
            return player
        }

        //check left to right diagonal
        let set2 = new Set()
        let player2 = undefined
        let filled2 = 0
        let i = 0;
        let j = this.config.count - 1
        while(i < this.config.count && j >=0 ) {
            player2 = this.map.get(`${i}-${j}`)
            if(player2) {
                set2.add(player2)
                filled2++
            }
            i++
            j--
        }
        if(set2.size === 1 && filled2 === this.config.count) {
            return player2
        }
    }
    
}