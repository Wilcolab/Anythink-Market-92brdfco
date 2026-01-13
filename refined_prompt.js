function addNumbers(a, b) {
    if (a === undefined || b === undefined) {
        throw new Error('Both arguments must be provided.');
    }
    if (a === null || b === null) {
        throw new Error('Arguments cannot be null.');
    }
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        throw new Error('Both arguments must be valid numbers.');
    }
    return a + b;
}