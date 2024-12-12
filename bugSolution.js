function foo(a, b) {
  while (a < b) {
    a++;
  }
  return a === b;
}

console.log(foo(10, 10)); // true
console.log(foo(10, 12)); // true
console.log(foo(10, 9)); // false