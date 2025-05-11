/**
 * @typedef Item
 * @type {object}
 * @property {number} id
 * @property {boolean} completed
 * @property {string} text
 */

import * as STORAGE from "./LocalStorageAPI.js";
import { generateId } from "../utils.js";

/**
 * @type {Item[]}
 */
let items = []

export function getItems() {
    return STORAGE.getItems()
}

/**
 * @param {Item[]} items
 */
export function saveItems(items) {
    STORAGE.saveItems(items)
}

/**
 * 
 * @param {Item[]} items 
 * @param {string} text 
 */
export function addItem(items, text) {
    let newItem = {
        text,
        id: generateId(),
        completed: false
    }

    items.push(newItem)
    saveItems(items)
    return newItem
}

export function updateItem(items, updatedItem) {
    let oldItemIndex = items.findIndex(item => item.id === updatedItem.id)

    let oldItem = items[oldItemIndex]

    items.splice(oldItemIndex, 1, {
        ...oldItem,
        completed: updatedItem.completed
    })
    saveItems(items)
}

export function deleteItem(items, id) {
    let oldItemIndex = items.findIndex(item => item.id === id)

    items.splice(oldItemIndex, 1)
    saveItems(items)
}