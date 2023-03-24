function isPrime(n) {
    // 2 是質數
    if (n === 2) {
      return true;
    }
    
    // 若 n 為小於 2 或偶數，不是質數
    if (n < 2 || n % 2 === 0) {
      return false;
    }
    
    // 從 3 開始，每次增加 2，只需檢查到根號 n 即可
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) {
        return false;
      }
    }
    
    // 若無法整除，則為質數
    return true;
  }