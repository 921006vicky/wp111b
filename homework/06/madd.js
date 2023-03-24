function madd(a, b) {
    if (a.length !== b.length || a[0].length !== b[0].length) {
        return null;
    }
    //這段程式碼中的 a.length 和 b.length 分別表示矩陣 a 和矩陣 b 的行數，而 a[0].length 和 b[0].length 則表示矩陣 a 和矩陣 b 的列數。


    let result = [];
    for (let i = 0; i < a.length; i++) {
        result[i] = [];//2*2的矩陣
        for (let j = 0; j < a[0].length; j++) {
            result[i][j] = a[i][j] + b[i][j];
        }
    }
    return result;
}

let a = [[1, 2], [3, 4]];
let b = [[5, 6], [7, 8]];

console.log(madd(a, b));
//by chatgpt