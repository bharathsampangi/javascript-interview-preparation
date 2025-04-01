const KEY = "KANBAN-BOARD"

export function getColumns() {
    const columns = localStorage.getItem(KEY) ?? "[]"
    return JSON.parse(columns)
}

export function saveColumns(columns) {
    localStorage.setItem(KEY, JSON.stringify(columns))
}