function add(a, b) {
  const sum = a + b;
  return sum;
}
function sub(a, b) {
  const sub1 = a - b;
  return sub1;
}
function mult(a, b) {
  const mult1 = a * b;
  return mult1;
}
function div(a, b) {
  let div1 = a / b;
  div1 = div1.toFixed(2);
  return div1;
}

export { add, sub, mult, div };
