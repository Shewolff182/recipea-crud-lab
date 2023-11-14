# Recipea CRUD Lab

### Introduction

In this lab, you will be building a recipe CRUD app using Node's ability to persist data to a file. You will be using the built-in `fs` module and JSON methods to read and write to a data file in JSON format.

### Learning Objectives

Students should get **hands-on experience** with:

- Using Node's `fs` module to read and write to a file
- Using `JSON.parse` and `JSON.stringify` to convert between JSON and JavaScript objects

Students should start **internalizing the concepts** of:

- CRUD operations
- persistence

### Setup

You will have some recipes to start with in `recipea-data.json`. **You** will have to create a JavaScript file to run your code.

### Usage Goal

You will know you're successful when you can run your JS file in the following ways, where `[filename]` is the name you picked for your JavaScript file (without the brackets, which simply indicate that it is a placeholder).

- `node [filename] read` will get all recipes in the recipes array.
- `node [filename] read [i]` will get a single recipe at that index in the recipes array.
- `node [filename] create [recipe name] [cooking method] [ingredient 1] [ingredient 2] [...]`

For example, if you named your file `index.js`, then `node index.js read` will get all recipes in the recipes array and log them to the console.

If you named your file `recipea.js`, then `node recipea.js read 0` will get the first recipe in the recipes array and log it to the console.

if you named your file `good-look-cook-book.js`, then `node good-look-cook-book.js create "Spaghetti with White Sauce" "stove-stop boil" "spaghetti" "butter" "flour" "milk" "salt" "pepper" "garlic" "parmesan cheese"` will create a new recipe with the name "Spaghetti with White Sauce", the cooking method "stove-stop boil", and the ingredients "spaghetti", "butter", "flour", "milk", "salt", "pepper", "garlic", and "parmesan cheese", and add it to the recipes array in the data file.

### Data Shape

The data in `recipea-data.json` is an array of recipes. Each recipe is an object with the following properties:

- `name` - the name of the recipe
- `cookingMethod` - the cooking method of the recipe
- `ingredients` - an array of ingredients

Check out the data in `recipea-data.json` to see what that looks like.

### Requirements

- [x ] Create a JavaScript file to run your code.
- [x ] Create a `read` command that will read all recipes from the data file and log them to the console.
- [x] Create a `read` command that will read a single recipe from the data file and log it to the console.
- [x ] Create a `create` command that will create a new recipe and add it to the data file.

### Resources

[Our codealong for a similar app](https://github.com/AnnieCannons/crud-codealong).

### Stretch Goals

These goals are all entirely optional, and none of them are required to complete the lab. They are simply here to give you ideas for how to extend your app.

You should **not** attempt any of these until you have completed the requirements above.

- [ ] Create an `update` command that will update a recipe in the data file.
- [ ] Create a `delete` command that will delete a recipe from the data file.
- [ ] Create a `delete` command that will delete all recipes from the data file.
- [ ] Create a `name-filter` command that will filter recipes by name and log them to the console.
- [ ] Modify the above `name-filter` command to allow for partial matches.
- [ ] Create a `cooking-method-filter` command that will filter recipes by cooking method and log them to the console.
- [ ] Create an `ingredient-filter` command that will filter recipes by ingredient and log them to the console.
