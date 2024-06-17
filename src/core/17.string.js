function getRandomMinMax(min, max) {
  let result = Math.round(Math.random() * (max - min)) + min;
  return result;
}

getRandomMinMax(10, 20);
