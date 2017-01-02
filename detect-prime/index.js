exports.detectPrimeByTrialDivision = number => {
  const maxDivisor = Math.sqrt(number);
  
  if ([0, 1].includes(number)) return false;
  
  for (let i = 2; i <= maxDivisor; i++) {
    if ((number % i) === 0) return false;
  }

  return true;
}