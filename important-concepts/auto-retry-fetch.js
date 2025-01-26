async function fetchWithAutoRetry(fetchData, retry) {
    return new Promise((resolve, reject) => {
        let attempts = 0

        function attemptFetch() {
            fetchData()
                .then(res => resolve(res))
                .catch(err => {
                    attempts++

                    if(attempts < retry) {
                        console.error(`Attempt ${attempts} failed. Retrying...`)
                        attemptFetch()
                    } else {
                        reject(err)
                    }
                })
        }

        attemptFetch()
    })
}

function fetchApi(successRate = 0.4) {
    return new Promise((resolve, reject) => {
        const random = Math.random()

        if(random < successRate) {
            resolve("Success")
        } else {
            reject(new Error("Failure!"))
        }
    })
}

fetchWithAutoRetry(fetchApi, 3)
    .then(console.log)
    .catch(console.error)