const imgInfo = [
  {
    name: "Harry",
    photoUrl: "./img/Harry.png",
    charInfo:
      "The brave and selfless boy who lived, destined to defeat Voldemort.",
  },
  {
    name: "Hermione",
    photoUrl: "./img/Hermione.png",
    charInfo:
      "Brilliant and determined, she uses her intelligence to help her friends succeed.",
  },
  {
    name: "Ronald",
    photoUrl: "./img/Ronald.png",
    charInfo:
      "Loyal and humorous, Harry’s best friend who stands by him through every challenge.",
  },
];

let index = 0; // 현재 보여줄 캐릭터 인덱스

function showCharacter() {
  const character = imgInfo[index];

  const image = document.querySelector("img");
  const info = document.querySelector("p");
  const name = document.querySelector("h4");

  name.textContent = character.name;
  image.src = character.photoUrl;
  image.alt = character.name;
  info.textContent = character.charInfo;

  // 다음 캐릭터로 이동
  index = (index + 1) % imgInfo.length;
}

// 처음에 한 번 보여주기
showCharacter();

setInterval(showCharacter, 5000);
