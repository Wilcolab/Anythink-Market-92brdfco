/**
 * Step 1: Definition of toKebabCase
 * 
 * - Accepted input types: string only. Non-string input should throw an error.
 * - Spaces, underscores, hyphens: treated as word separators.
 * - camelCase & PascalCase: split words at case transitions.
 * - Numbers: kept with adjacent letters (e.g., "foo2Bar" -> "foo2-bar").
 * - Special characters (non-alphanumeric, non-separator): removed except for hyphens in output.
 * - Output: all lowercase, words separated by single hyphens, no leading/trailing hyphens.
 */

/**
 * Step 2: Edge Cases
 * 
 * 1. Mixed casing: "fooBarBAZ" -> "foo-bar-baz"
 * 2. Multiple spaces/underscores/hyphens: "foo__bar  baz--qux" -> "foo-bar-baz-qux"
 * 3. Leading/trailing symbols: "__foo-bar! " -> "foo-bar"
 * 4. Acronyms: "getHTTPResponse" -> "get-http-response"
 * 5. Numbers inside words: "foo2Bar 3baz" -> "foo2-bar-3baz"
 */

/**
 * Step 3: Implementation
 */
function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Replace all separators with spaces
    let str = input
        .replace(/[_\-\s]+/g, ' ')
        // Insert space before uppercase letters (not at start), handling acronyms
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        // Insert space between acronym and next word (e.g., HTTPResponse -> HTTP Response)
        .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1 $2')
        // Remove non-alphanumeric except spaces
        .replace(/[^a-zA-Z0-9 ]+/g, '')
        .trim();

    // Split by spaces, filter empty, join with hyphens, lowercase
    return str
        .split(/\s+/)
        .filter(Boolean)
        .map(word => word.toLowerCase())
        .join('-');
}

/**
 * Step 4: Examples & Explanation
 */

// Example inputs and outputs:
const examples = [
    { input: "fooBarBAZ", output: "foo-bar-baz" },
    { input: "foo__bar  baz--qux", output: "foo-bar-baz-qux" },
    { input: "__foo-bar! ", output: "foo-bar" },
    { input: "getHTTPResponse", output: "get-http-response" },
    { input: "foo2Bar 3baz", output: "foo2-bar-3baz" },
    { input: "  --My__Test123--Case!! ", output: "my-test123-case" },
];

examples.forEach(({input, output}) => {
    const result = toKebabCase(input);
    console.log(`Input: "${input}" | Output: "${result}" | Expected: "${output}"`);
});

/**
 * Explanation:
 * - The function normalizes all separators to spaces.
 * - It splits camelCase, PascalCase, and acronyms using regex.
 * - Special characters are removed.
 * - Words are joined with hyphens and lowercased.
 * - Leading/trailing separators and extra spaces are trimmed.
 */