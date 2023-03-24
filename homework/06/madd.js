function madd(a, b) {
    if (a.length !== b.length || a[0].length !== b[0].length) {
        return null;
    }
    //這段程式碼中的 a.length 和 b.length 分別表示矩陣 a 和矩陣 b 的行數，而 a[0].length 和 b[0].length 則表示矩陣 a 和矩陣 b 的列數。
    //a[0].length 是獲取矩陣 a 中第一行的元素個數，也就是矩陣的列數   假設test = [[a,s,d],[z,x,c]]，a[0].length = 3是因為a s d有共三個值

    let result = [];//用於儲存相加後的矩陣
    for (let i = 0; i < a.length; i++) {// i 用於表示矩陣 a 的行數//let a = [[1, 2], [3, 4]];因為[1,2][3,4]共兩行，所以a.length為2
        result[i] = [];//2*2的矩陣
        for (let j = 0; j < a[0].length; j++) {//let a = [[1, 2], [3, 4]];因為[1,2]有兩個數字，所以a[0].length為2
            result[i][j] = a[i][j] + b[i][j];//矩陣 a 和矩陣 b 對應位置的元素相加，並把結果儲存在 result[i][j] 中。
        }
    }
    return result;
}

let a = [[1, 2], [3, 4]];
let b = [[5, 6], [7, 8]];

console.log(madd(a, b));
//by chatgpt，註解為自行吸收後的筆記