function trim(str) {
    function isWhiteSpaceCharacter(ch) {
        return [" ", "\n", "\t"].includes(ch)
    }

    let start = 0
    let end = str.length - 1

    while(start < str.length && isWhiteSpaceCharacter(str[start])) {
        start++
    }

    while(end >= 0 && isWhiteSpaceCharacter(str[end])) {
        end--
    }

    return str.slice(start, end + 1)
}

const s = "   Hello World    "
console.log(trim(s))
console.log(trim(s) === s.trim())

// Test with only leading whitespace.
console.log(trim("   Leading whitespace")); // "Leading whitespace"

// Test with only trailing whitespace.
console.log(trim("Trailing whitespace   ")); // "Trailing whitespace"

// Test with both leading and trailing whitespace.
console.log(trim("   Both sides   ")); // "Both sides"

// Test with a string that has no whitespace.
console.log(trim("NoWhitespace")); // "NoWhitespace"

// Test with a string that has only whitespace characters.
console.log(trim("    ").length === 0); // ""

// Test with an empty string.
console.log(trim("").length === 0); // ""

// Test with tab and newline characters.
console.log(trim("\t\tTabs and newlines\n\n")); // "Tabs and newlines"

// Test with a mix of spaces, tabs, and newlines.
console.log(trim(" \t\n Mixed whitespace \n\t ")); // "Mixed whitespace"

// Edge case: single character string with no whitespace.
console.log(trim("A")); // "A"

// Edge case: single character string with whitespace.
console.log(trim(" ").length === 0); // ""