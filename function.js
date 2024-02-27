const addTwoNumbers = (x, y) => {
  const total = x + y;
  return total;
};

const evenOdd = (num) => {
  let remainder = num % 2;
  if (remainder === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

export { addTwoNumbers, evenOdd };
