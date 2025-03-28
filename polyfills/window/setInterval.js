function createCustomSetInterval() {
    const timeoutMap = new Map();
    let nextId = 1;

    function customSetInterval(callback, interval, ...args) {
        let id = nextId++;

        function scheduleNext() {
            const timerId = setTimeout(() => {
                callback(...args);

                if (timeoutMap.has(id)) {
                    scheduleNext();
                }
            }, interval);
            timeoutMap.set(id, timerId);
        }

        scheduleNext();

        return id;
    }

    function customClearInterval(id) {
        const timerId = timeoutMap.get(id);
        if (timerId) {
            clearTimeout(timerId);
            timeoutMap.delete(id);
        }
    }

    return { customSetInterval, customClearInterval };
}

const { customSetInterval, customClearInterval } = createCustomSetInterval();

const timerId1 = customSetInterval(
    (message) => {
        console.log(message);
    },
    1000,
    "Custom interval callback executed!"
);

setTimeout(() => {
    console.log("Cleared Interval");
    customClearInterval(timerId1);
}, 10000);

const intervalId2 = customSetInterval(
    (message) => {
        console.log(message); // Log the message
    },
    2000,
    "Custom interval callback executed! 2" // Message to log
);

setTimeout(() => {
    console.log("Cleared Interval 2");
    customClearInterval(intervalId2); // Clear the interval
}, 5000);
