exports.gcd = gcd;

function gcd(...args) {
  let [first, second, ...rest] = args;
  let result = gcdBinary(first, second);

  for (const next of rest) {
    result = gcdBinary(result, next);
  }

  return result
}

function gcdBinary(a, b) {
  const values = [a, b];

  if (values.every(x => x === 0)) {
    throw new Error('Both arguments cannot be 0');
  }

  if (values.some(x => x === 0)) {
    return values.find(x => x !== 0)
  }

  while (b !== 0) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }

  return a;
}
