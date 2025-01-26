function debounce(fn, delay) {
    let timer

    return function(...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, delay)
    }
}

let startTime = Date.now()

function callMe() {
    console.log(new Date() - startTime)
}

const debounceFn = debounce(callMe, 100)

setTimeout(debounceFn, 400)
setTimeout(debounceFn, 500)
setTimeout(debounceFn, 600)
setTimeout(debounceFn, 700)
setTimeout(debounceFn, 800)
setTimeout(debounceFn, 900)
setTimeout(debounceFn, 1000)
setTimeout(debounceFn, 1100)