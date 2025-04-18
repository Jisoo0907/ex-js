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
