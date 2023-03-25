function isPrime(n) {
    if (n <= 1) {
        return false;
    }//先排除0和1
    for (let c = 2; c <= Math.sqrt(n); c++) {//Math.sqrt(n)，n平方根
        if (n % c === 0) {//==會換類型後比較，===直接比較，===比較建議使用
            return false;
        }
        //並且只需要判斷到平方根的整數部分即可，因為如果存在一個大於平方根的因數，那麼必定存在一個小於平方根的因數，這樣就可以減少不必要的計算量。
    }
    return true;
}

console.log('isPrime(101)=', isPrime(101)); //'isPrime(101)',不加也沒事


//let用於宣告的區域，var用於所有區域 