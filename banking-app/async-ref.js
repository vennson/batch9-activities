async function getRecipeAW() {
  const IDs = await getIds();
  console.log(IDs);
  const recipe = await getRecipe(IDs[2]);
  console.log(recipe);
}

function getIds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const recipeId = [234, 423, 123, 134, 123];
      resolve(recipeId);
    }, 1500);
  });
}

function getRecipe(id) {
  return new Promise((resolve, reject) => {
    setTimeout(id => {
      const recipe = { title: "Fresh Tomato Pasta", publisher: "Jonas" };
      resolve(recipe);
    }, 1500);
  });
}

function getRelated(publisher) {
  return new Promise((resolve, reject) => {
    setTimeout(publisher => {
      const recipe2 = { title: "Italian Pizza", publisher: "Jonas" };
      resolve(recipe2);
    }, 1500);
  });
}
getRecipeAW();
