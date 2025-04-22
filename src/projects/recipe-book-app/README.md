# 레시피 북

<br/>

### 사용한 레시피 api

[spoonacular](https://spoonacular.com/food-api)

<br/>

### 발생한 에러

<br/>

> Uncaught SyntaxError: Cannot use import statement outside a module

- index.js에서 `import axios from "axios";`를 통해 axios를 사용하려고 했을 때 발생한 에러.
- 발생 이유를 찾아보니 브라우저가 해당 script를 ES6 모듈로 인식하지 못해서 발생하는 문제라고 한다.

<br/>

#### 첫 번째 시도 - type="module" 추가하기

- 다음과 같은 에러가 발생했다.

> Uncaught TypeError: Failed to resolve module specifier "axios". Relative references must start with either "/", "./", or "../".

#### 해결 방안

- **CDN을 통해 axios 가져오기**

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.0/axios.min.js"></script>
<script src="./index.js" type="module"></script>
```

- 해당 코드를 추가해주고, index.js에서 import 부분을 제거해주었다.
- 위 방식으로 작성했을 경우, axios를 전역 객체로 로드하기 때문에 import문 없이 바로 사용할 수 있다.

#### 왜 CDN을 통해 axios를 사용할 수 있는 건지?

- 브라우저에서 JavaScript 모듈을 사용할 땐 크게 두 가지 방식이 있다.

**1. ES 모듈(import/export) : 이 방식은 모듈의 정확한 위치를 지정해야 한다.**

- 브라우저는 `import axios from "axios"`처럼 단순한 패키지 이름만으로는 모듈을 찾을 수 없다.
- Node.js와 달리 브라우저에는 node_modules 폴더나 패키지 의존성을 자동으로 관리하는 시스템이 없기 때문이다.

**2. 전통적인 스크립트 태그 `<script src="..."></script>`를 사용하면 지정된 URL에서 JavaScript 파일을 로드하고 실행한다.**

- 이 방식으로 로드된 라이브러리는 전역 객체로 노출되어 어디서든 사용할 수 있다.
- `<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.0/axios.min.js"></script>` 이 코드가 axios 라이브러리를 전역 스코프에 axios라는 이름으로 노출시킨다.

<br>

### 코드 리팩토링

- 기존 코드

```
const API_KEY = "98a285063e6845e69a8656ebc6231805";
const recipeListNumber = 10;
const url = `https://api.spoonacular.com/recipes/random?number=${recipeListNumber}&apiKey=${API_KEY}`;
const recipeList = document.querySelector(".recipe-list");

axios
  .get(url)
  .then((response) => {
    const recipes = response.data.recipes;
    console.log(recipes);
    recipes.forEach((recipe) => {
      const img = document.createElement("img");
      img.src = recipe.image;
      recipeList.appendChild(img);

      const li = document.createElement("li");
      li.textContent = recipe.title;
      recipeList.appendChild(li);

      const p = document.createElement("p");
      p.textContent = recipe.extendedIngredients
        .map((r) => r.original)
        .join(",");

      recipeList.appendChild(p);

      const sourceUrl = document.createElement("a");
      sourceUrl.textContent = "VIEW RECIPE";
      sourceUrl.href = recipe.sourceUrl;
      sourceUrl.target = "_blank";
      recipeList.appendChild(sourceUrl);
    });
  })
  .catch((error) => {
    console.error("레시피 데이터를 가져오는 데 실패했습니다:", error);
  });

```

- 수정된 코드

```
/* 레시피 데이터를 받아 카드 DOM 엘리먼트 생성 */
const createRecipeCard = (recipe) => {
  const card = document.createElement("li");
  card.classList.add("recipe-card");

  // image element
  if (recipe.image) {
    const img = document.createElement("img");
    img.src = recipe.image;
    img.alt = recipe.title;
    img.classList.add("recipe-image");
    card.appendChild(img);
  }

  // 제목
  const title = document.createElement("h2");
  title.textContent = recipe.title;
  title.classList.add("recipe-title");
  card.appendChild(title);

  // 재료 목록 생성
  if (recipe.extendedIngredients && recipe.extendedIngredients.length > 0) {
    const ingredients = document.createElement("p");
    ingredients.classList.add("recipe-info");
    ingredients.innerHTML = `
        <strong>Ingredients:</strong> ${recipe.extendedIngredients
          .map((ingredient) => ingredient.original)
          .join(", ")}
    `;
    card.appendChild(ingredients);
  }

  // 레시피 소스 링크 생성
  if (recipe.sourceUrl) {
    const sourceLink = document.createElement("a");
    sourceLink.classList.add("recipe-link");
    sourceLink.textContent = "VIEW RECIPE";
    sourceLink.href = recipe.sourceUrl;
    sourceLink.target = "_blank";
    sourceLink.rel = "noopener noreferrer";
    card.appendChild(sourceLink);
  }

  return card;
};

/* 레시피 데이터를 DOM에 렌더링 */
async function fetchRecipes() {
  try {
    const response = await axios.get(url);
    const recipes = response.data.recipes;

    const fragment = document.createDocumentFragment();

    recipes.forEach((recipe) => {
      const card = createRecipeCard(recipe);
      fragment.appendChild(card);
    });

    recipeList.appendChild(fragment);
  } catch (error) {
    console.error("레시피 데이터를 가져오는 데 실패했습니다:", error);
  }
}

fetchRecipes();
```

#### 수정한 부분

- API 호출 부분과 DOM 조작 부분을 별도의 함수로 분리하여 코드의 역할을 분명하게 함.
- 비동기 함수 사용 - `axios.get`을 `async/await` 구문으로 감쌈.
- 외부 링크에 `rel="noopener noreferrer"` 속성을 추가하여 보안을 강화함.
- 이미지에 alt 속성을 넣어 접근성을 향상시킴.

<br/>

### 최종 결과

![Image](https://github.com/user-attachments/assets/7cc95512-239b-47f5-aa1c-6d7663d61b56)

<br/>

![Image](https://github.com/user-attachments/assets/c866698e-4bae-4faa-9cef-faabc45a6717)
