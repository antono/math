const { test } = require('ava');
const { gcd } = require('.');

test('gcd(1071, 462) = 21', (t) => {
  t.is(gcd(1071, 462), 21);
});

test('gcd(3555, 675) = 45', (t) => {
  t.is(gcd(3555, 675), 45);
});

test('gcd(10, 100, 1000, 10000) = 10', (t) => {
  t.is(gcd(10, 100, 1000, 10000), 10);
});

test('gcd(51, 85, 119) = 17', (t) => {
  t.is(gcd(51, 85, 119), 17);
});

test('1000 arguments', (t) => {
  const args = [];

  for (let x = 0; x < 1000; x++) {
    args.push(x * 42);
  }
  
  t.is(gcd(...args), 42);
});

test('gcd(1071, 0)', (t) => {
  t.is(gcd(1071, 0), 1071);
});

test('cannot accept 0 as both arguments', (t) => {
  const fn = () => gcd(0, 0);
  t.throws(fn, 'Both arguments cannot be 0');
});
