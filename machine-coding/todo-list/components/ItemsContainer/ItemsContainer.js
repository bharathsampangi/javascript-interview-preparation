import { addItem, deleteItem, getItems, updateItem } from "../../services/API.js";
import { getElementFromHtml } from "../../utils.js";
import { Item } from "../Item/Item.js";

export class ItemsContainer {
    constructor() {
        this.domElement = this.getElement();
        this.init()
    }

    getElement() {
        return getElementFromHtml(`
            <div class="items-container"></div>
        `);
    }

    init() {
        this.setupEventListener()
        this.items = getItems()
        this.renderItems()
    }

    renderItems() {
        this.items.forEach((item) => {
            this.domElement.appendChild(new Item(item).domElement)
        })
    }

    addNewItem(value){
        let newItem = addItem(this.items, value)
        this.domElement.appendChild(new Item(newItem).domElement)
    }

    setupEventListener() {
        this.domElement.addEventListener("click", (e) => {
            let id = e.target.dataset.id
            if(!id) return

            if(e.target.classList.contains("item__checkbox")) {
                let checkedValue = e.target.checked
                this.updateExisitingElement(id, checkedValue)
            } else if(e.target.classList.contains("item__delete")) {
                this.deleteExistingElement(id)
            }
        })
    }

    updateExisitingElement(id, value) {
        updateItem(this.items, {
            id: Number(id),
            completed: value
        })
    }

    deleteExistingElement(id) {
        [...this.domElement.children].forEach((node) => {
            if(node.getAttribute("data-id") === id) {
                node.remove()
            }
        })
        deleteItem(this.items, Number(id))
    }
}
