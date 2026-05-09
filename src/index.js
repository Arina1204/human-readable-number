module.exports = function toReadable(number) {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  if (number < 20) {
    return ones[number];
  }
  if (number < 100) {
    const ten = Math.floor(number / 10);
    const one = number % 10;
    if (one === 0) {
      return tens[ten];
    }
    return `${tens[ten]} ${ones[one]}`;
  }

  const hundred = Math.floor(number / 100);
  const rest = number % 100;
  if (rest === 0) {
    return `${ones[hundred]} hundred`;
  }
  return `${ones[hundred]} hundred ${toReadable(rest)}`;
};
