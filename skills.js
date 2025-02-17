/*give me a function to calculatenumbers*/
function calculateNumbers(a, b) {
    return a + b;
}

/*give me a function to calculate fibonnaci*/
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

/*give me a function to calculate factorial*/
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
