const customAny = (promises) => {
    const errors = []
    let rejectedPromises = 0

    return new Promise((resolve, reject) => {
        if(promises.length === 0) {
            resolve(new AggregateError(errors, "Empty Array"))
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
            .then((res) => {
                resolve(res)
            })
            .catch((reason) => {
                errors[index] = reason
                rejectedPromises++

                if(rejectedPromises === promises.length) {
                    reject(new AggregateError(errors, "All promises rejected"))
                }
            })
        })
    })
}

const promise1 = customAny([])

promise1.then((res) => console.log(res))
.catch((err) => console.error(err))

const promise2 = customAny([
    Promise.resolve(1),
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
    Promise.resolve(3),
    4
])
promise2.then((res) => console.log(`Resolved with 2 -`, res))
.catch((err) => console.error(err))

const promise3 = customAny([
    Promise.reject(1),
    new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)),
    Promise.reject(3),
    Promise.reject(4),
    Promise.reject(5)
])

promise3.then((res) => console.log(`Resolved with 3 - `, res))
.catch((err) => console.error(`Rejected with 3 - `, err))

const promise4 = customAny([
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