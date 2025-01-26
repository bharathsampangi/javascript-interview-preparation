function classNames(...args) {
    let result = []
    args.forEach((arg) => {
        if(!arg) {
            return
        }

        if(typeof arg === "number" || typeof arg === "string") {
            result.push(arg)
            return;
        }

        if(Array.isArray(arg)) {
            for(const val of arg) {
                if(val) {
                    result.push(classNames(val))
                }
            }
            return;
        }

        for(const key in arg) {
            const value = arg[key]

            if(value) {
                result.push(classNames(key))
            }
        }
    })

    return result.join(" ")
}

console.log(classNames("btn", "btn-primary", 123));
// Output: "btn btn-primary 123"

// Test with falsy values and nested arrays
console.log(classNames("btn", null, "btn-primary", ["active", ["large"]]));
// Output: "btn btn-primary active large"

// Test with objects
console.log(classNames("btn", { "btn-primary": true, "btn-secondary": false }));
// Output: "btn btn-primary"

// Test with nested arrays and objects
console.log(
  classNames([
    "btn",
    { "btn-primary": true, "btn-secondary": false },
    ["large", { "text-center": true }],
  ])
);
// Output: "btn btn-primary large text-center"

// Test with empty and mixed values
console.log(
  classNames(null, undefined, "", false, 0, "class1", [
    "class2",
    { class3: true },
  ])
);