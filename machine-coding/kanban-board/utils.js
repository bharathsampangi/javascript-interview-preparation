export const ACTIONS = {
    ADD_COLUMN: "ADD_COLUMN",
    DELETE_COLUMN: "DELETE_COLUMN",
    ADD_TASK: "ADD_TASK",
    DELETE_TASK: "DELETE_TASK"
}

export const TYPES = {
    COLUMN: "COLUMN",
    TASK: "TASK"
}

export const ADD_TASK_EVENT = "ADD_TASK_EVENT"
export const ADD_COLUMN_EVENT = "ADD_COLUMN_EVENT"

export function getElementFromHtml(html) {
    let children = document
        .createRange()
        .createContextualFragment(html.trim()).children;
    return children[0]
}

export function generateId() {
    return Math.floor(Math.random() * 10000000)
}