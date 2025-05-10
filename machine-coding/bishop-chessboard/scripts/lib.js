const defaultConfig = {
    container: ".bishop-chessboard",
    count: 8,
    white: "white",
    black: "black",
    width: "3rem"
}

export class BishopChessboard {
    constructor(config) {
        this.config = defaultConfig
        this.init(config)
    }

    init(config) {
        Object.keys(config).forEach((key) => {
            this.config[key] = config[key]
        })
        this.createChessboard()
    }

    createChessboard() {
        const n = this.config.count

        this.container = document.querySelector(this.config.container)
        
        if(!this.container) return

        let isWhite

        const table = document.createElement("table")

        for(let i=0; i < n; i++) {
            const tr = document.createElement("tr")
            isWhite = i % 2 === 0
            for(let j =0; j < n; j++) {
                let box = document.createElement("td")
                box.style.padding = this.config.width
                box.dataset.rowcol = `${i}-${j}`
                if(isWhite) {
                    box.classList.add(this.config.white)
                } else {
                    box.classList.add(this.config.black)
                }
                isWhite = !isWhite

                tr.appendChild(box)
            }
            table.appendChild(tr)
        }

        this.container.appendChild(table)

        this.container.addEventListener("mouseover", this.onMouseOver.bind(this))
        this.container.addEventListener("mouseout", this.onMouseOut.bind(this))
    }

    onMouseOut(e) {
        const tds = document.querySelectorAll("td")

        tds.forEach((td) => {
            td.classList.remove("orange")
        })
    }

    onMouseOver(e) {
        let ele = e.target.dataset.rowcol

        if(!ele)
            return

        let [rowIdx, colIdx] = ele.split("-").map(Number)
        const map = new Map()
        map.set(`${rowIdx}-${colIdx}`, true)

        this.findTopLeft(rowIdx, colIdx, map)
        this.findTopRight(rowIdx, colIdx, map)
        this.findBottomLeft(rowIdx, colIdx, map)
        this.findBottomRight(rowIdx, colIdx, map)

        const tds = document.querySelectorAll("td")

        tds.forEach((td) => {
            td.classList.remove("orange")
        })

        tds.forEach((td) => {
            let ele = td.dataset.rowcol

            if(map.get(ele)) {
                td.classList.add("orange")
            }
        })
    }

    findTopLeft(rowIdx, colIdx, map) {
        rowIdx--
        colIdx--

        if(rowIdx >= 0 && colIdx >= 0) {
            map.set(`${rowIdx}-${colIdx}`, true)
            this.findTopLeft(rowIdx, colIdx, map)
        }
    }

    findTopRight(rowIdx, colIdx, map) {
        rowIdx--
        colIdx++

        if(rowIdx >= 0 && colIdx <= this.config.count) {
            map.set(`${rowIdx}-${colIdx}`, true)
            this.findTopRight(rowIdx, colIdx, map)
        }
    }

    findBottomLeft(rowIdx, colIdx, map) {
        rowIdx++
        colIdx--

        if(rowIdx <= this.config.count && colIdx >=0) {
            map.set(`${rowIdx}-${colIdx}`, true)
            this.findBottomLeft(rowIdx, colIdx, map)
        }
    }

    findBottomRight(rowIdx, colIdx, map) {
        rowIdx++
        colIdx++

        if(rowIdx <= this.config.count && colIdx <= this.config.count) {
            map.set(`${rowIdx}-${colIdx}`, true)
            this.findBottomRight(rowIdx, colIdx, map)
        }
    }
}