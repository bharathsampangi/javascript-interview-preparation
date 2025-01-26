function throttle(fn, delay) {
    let timer = null;
    return function (...args) {
        if (timer === null) {
            fn(...args)
            timer = setTimeout(() => {
                timer = null;
            }, delay);
        }
    };
}

let startDate = new Date();

function logMe() {
    console.log(new Date() - startDate);
    startDate = new Date()
}

const throttledFn = throttle(logMe, 1000);

setInterval(throttledFn, 100);
