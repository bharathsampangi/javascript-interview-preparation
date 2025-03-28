const customAll = (promises) => {
    const result = [];
    let resolvedPromisesCount = 0;
    return new Promise((resolve, reject) => {
        if (promises.length === 0) {
            resolve(result);
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
            .then((value) => {
                result[index] = value
                resolvedPromisesCount++

                if(resolvedPromisesCount === promises.length) {
                    resolve(result)
                }
            })
            .catch((err) => reject(err))
        });
    });
};

const promise1 = customAll([])

promise1.then((res) => console.log(res))
.catch((err) => console.error(err))

const promise2 = customAll([
    Promise.resolve(1),
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
    Promise.resolve(3),
    4
])
promise2.then((res) => console.log(res))
.catch((err) => console.error(err))

const promise3 = customAll([
    Promise.resolve(1),
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
    Promise.resolve(3),
    Promise.reject(4),
    Promise.reject(5)
])

promise3.then((res) => console.log(`Resolved with 3 - ${res}`))
.catch((err) => console.error(`Rejected with 3 - ${err}`))

const promise4 = customAll([
    null,
    undefined,
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
    {},
    3,
    "hello",
    true
])

promise4.then((res) => console.log(`Resolved with 4 - ${res}`))
.catch((err) => console.error(`Rejected with 4 - ${err}`))