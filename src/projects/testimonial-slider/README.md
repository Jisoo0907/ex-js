# 슬라이더

### 작성 코드

<br/>

```
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
```

<br/>

### 최종 결과

<br/>

![Image](https://github.com/user-attachments/assets/45becd98-4505-44b0-9376-13204ea4b83f)
