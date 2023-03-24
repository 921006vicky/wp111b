function mmul(a, b) {
    let r = [];
    for (let i = 0; i < a.length; i++) {
        r[i] = a[i] * b[i];
    }
    return r;
  }
  let v1 = [1, 2], v2 = [3, 4];
  console.log(mmul(v1, v2));
//可與vdot.js比較