const API_KEY = "98a285063e6845e69a8656ebc6231805";
const recipeListNumber = 10;
const url = `https://api.spoonacular.com/recipes/random?number=${recipeListNumber}&apiKey=${API_KEY}`;
const recipeList = document.querySelector(".recipe-list");

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

/* axios
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
  .catch((error) => {}); */
