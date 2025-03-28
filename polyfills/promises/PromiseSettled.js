const customPromiseSettled = (promises) => {
    const results = []
    let resolvedPromises = 0

    return new Promise((resolve, reject) => {
        if(promises.length === 0) {
            resolve(results)
        }
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
            .then((value) => {
                results[index] = {status: 'fulfilled', value}
                resolvedPromises++

                if(resolvedPromises === promises.length) {
                    resolve(results)
                }
            })
            .catch((err) => {
                results[index] = {status: 'rejected', reason: err}
                resolvedPromises++

                if(resolvedPromises === promises.length) {
                    resolve(results)
                }
            })
        })
    })
}

const promise1 = customPromiseSettled([])

promise1.then((res) => console.log(res))
.catch((err) => console.error(err))

const promise2 = customPromiseSettled([
    Promise.resolve(1),
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
    Promise.resolve(3),
    4
])
promise2.then((res) => console.log(`Resolved with 2 -`, res))
.catch((err) => console.error(err))

const promise3 = customPromiseSettled([
    Promise.resolve(1),
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
    Promise.resolve(3),
    Promise.reject(4),
    Promise.reject(5)
])

promise3.then((res) => console.log(`Resolved with 3 - `, res))
.catch((err) => console.error(`Rejected with 3 - `, err))

const promise4 = customPromiseSettled([
    null,
    undefined,
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
    {},
    3,
    "hello",
    true
])

promise4.then((res) => console.log(`Resolved with 4 - `, res))
.catch((err) => console.error(`Rejected with 4 - `, err))