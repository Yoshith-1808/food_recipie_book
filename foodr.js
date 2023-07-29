const addButton = document.getElementById("addButton");

addButton.addEventListener("click", function() {
    const recipeName = document.getElementById("recipeName").value;
    const ingredients = document.getElementById("ingredients").value;
    const instructions = document.getElementById("instructions").value;

    if (!recipeName || !ingredients || !instructions) {
        alert("Please fill in all fields");
        return;
    }

    addRecipeToBook(recipeName, ingredients, instructions);
    clearForm();
});

function addRecipeToBook(name, ingredients, instructions) {
    const recipeBook = document.querySelector(".recipes");

    const recipeElement = document.createElement("div");
    recipeElement.classList.add("recipe");
    recipeElement.innerHTML = `<h3>${name}</h3>
                               <p><strong>Ingredients:</strong></p>
                               <p>${ingredients}</p>
                               <p><strong>Instructions:</strong></p>
                               <p>${instructions}</p>`;

    recipeBook.appendChild(recipeElement);
}

function clearForm() {
    document.getElementById("recipeName").value = "";
    document.getElementById("ingredients").value = "";
    document.getElementById("instructions").value = "";
}
