function createCustomSetTimeout() {
    const timeoutMap = new Map();
    let nextId = 1;

    function customSetTimeout(callback, delay, ...args) {
        let id = nextId++;
        let startTime = Date.now();

        const idleCallbackId = requestIdleCallback(
            () => {
                if (Date.now() - startTime >= delay) {
                    callback(...args);
                    timeoutMap.delete(id);
                } else {
                    customSetTimeout(
                        callback,
                        delay - (Date.now() - startTime),
                        ...args
                    );
                }
            },
            { timeout: delay }
        );

        timeoutMap.set(id, idleCallbackId);

        return id;
    }

    function customClearTimeout(id) {
        const idleCallbackId = timeoutMap.get(id);
        if (idleCallbackId) {
            cancelIdleCallback(idleCallbackId);
            timeoutMap.delete(id);
        }
    }

    return { customSetTimeout, customClearTimeout };
}

const { customSetTimeout, customClearTimeout } = createCustomSetTimeout()

const timeoutId1 = customSetTimeout(
    (message) => console.log(message),
    2000,
    "Custom timeout callback executed"
)

const timeoutId2 = customSetTimeout(
    (message) => {
        console.log(message)
    },
    2500,
    "Custom timeout callback executed 2"
)

clearTimeout(timeoutId2)