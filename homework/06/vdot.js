function vdot(a, b) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }
  return result;
}
let v1 = [1, 2];
let v2 = [3, 4];

console.log(vdot(v1, v2));//(1 * 3) + (2 * 4) = 3 + 8 = 11

//chat的解答