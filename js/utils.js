const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getUniqueNumber = (min, max) => {
  const previousValues = [];
  return function () {
    let newValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(newValue)) {
      newValue = getRandomInteger(min, max);
    }
    previousValues.push(newValue);
    return newValue;
  };
};

export {
  getRandomInteger,
  createRandomElement,
  getUniqueNumber,
};
