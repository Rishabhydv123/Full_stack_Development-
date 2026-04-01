const memo = (func) => {
    let cache = {};
    return (input) => {
        if (input in cache) {
            return cache[input];
        }
        cache[input] = func(input);
        return cache[input];
    };
};

const fibo = memo((value) => {
    if (value <= 1) return value;

    return fibo(value - 1) + fibo(value - 2);
});

const ans = fibo(123);
console.log(ans);