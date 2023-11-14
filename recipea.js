const fs = require("fs");
const action = process.argv[2];

function readAllRecipes() {
    fs.readFile("./recipea-data.json", "utf8", (err, data) => {
        const recipes = JSON.parse(data);
        console.log("Here are all of your recipes:\n\n");
        for (let i = 0; i < recipes.length; i++) {
            console.log(recipes[i].name + "\n");
            console.log(recipes[i].cookingMethod + "\n");
            console.log(recipes[i].ingredients + "\n");
        }
    });
}

function readSingleRecipe(id) {
    fs.readFile("./recipea-data.json", "utf8", (err, data) => {
        const recipes = JSON.parse(data);
        console.log("Here is your recipe:\n\n")
        for (let i = 0; i < recipes.length; i++) {
            if (i === id) {
                console.log(recipes[i].name + "\n");
                console.log(recipes[i].cookingMethod + "\n");
                console.log(recipes[i].ingredients + "\n");
            }
        }

    });
}

function saveRecipe(newRecipe) {
    fs.readFile("./recipea-data.json", "utf8", (err, data) => {
        const recipes = JSON.parse(data);
        recipes.push(newRecipe);
        const jsonVersion = JSON.stringify(recipes, null, 2);
        fs.writeFile("./recipea-data.json", jsonVersion, "utf8", (err) => {
            console.log("Recipe was successfully created!");
        });
    });
}

if (action === "read") {
    const id = process.argv[3];
    if (id === undefined) {
        readAllRecipes();
    } else {
        readSingleRecipe(Number(id));
    } 
} else if(action === "create") {
    const name = process.argv[3];
    const cookingMethod = process.argv[4];
    const ingredients = process.argv[5];
    const newRecipe = { name: name, cookingMethod: cookingMethod, ingredients: ingredients};
    saveRecipe(newRecipe);
} else {
    console.log('Valid actions are "read", "create".');
}




