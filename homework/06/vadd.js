function vadd(a, b) {
    let r = [];
    for (let i = 0; i < a.length; i++) {
        r[i] = a[i] + b[i];
    }
    return r;//回傳整個矩陣
}//先把矩陣第一行第一列數字相加，因為i < a.length，而a.length=2，所以接下來再把矩陣第一行第二列數字相加

let v1 = [1, 2], v2 = [1, 1];
console.log('vadd(v1,v2)=', vadd(v1, v2));
//老師的解答，註解為自行吸收後的筆記