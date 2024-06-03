function randomDay(num) {
  const value = Math.floor(Math.random() * num);
  return value;
}

function getDay(day) {
  switch (+day) {
    case 0:
      return "일";
    case 1:
      return "월";
    case 2:
      return "화";
    case 3:
      return "수";
    case 4:
      return "목";
    case 5:
      return "금";
    case 6:
      return "토";
  }
}

function weekend() {
  const today = getDay(getRandom(7));

  console.log(today);
}
