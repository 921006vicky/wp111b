function repeat(f, n) {
    let r = []
    for (let i = 0; i < n; i++) {
        r[i] = f();
    }
    return r;   
}

console.log(repeat(Math.random, 10));