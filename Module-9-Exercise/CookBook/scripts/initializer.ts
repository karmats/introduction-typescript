import interfaces = require('interfaces');
import recCategory = require('recipeCategory')
import recLoader = require('recipeLoader');
import render = require('renderer');
import recCat = require('recipeCategories');

export var recipeCategories: recCat.RecipeCategories<interfaces.IRecipeCategory>;
export var renderer;

(() => {
    var categoriesSelect = (<HTMLSelectElement> document.getElementById('RecipeCategory'));

    //FROM MODULE 6
    //categoriesSelect.onchange currently doesn't do anything.
    //Assign a lambda expression to "onchange" that when called, 
    //invokes the "loadRecipes" function that you'll see below. 
    //The lambda parentheses will be empty.
    //HINT: Refer to Module 4:Functions if you need help writing the lambda.
    categoriesSelect.onchange = () => {
        loadRecipes();
    }

    //FROM MODULE 6
    //Create a new RecipeLoader instance and name it "loader".
    //Pass the following string into the RecipeLoader's constructor:
    //  '/JSON/recipeTypes.json'
    //HINT: Use the "new" keyword to create the instance.
    var loader = new recLoader.RecipeLoader('/JSON/recipeTypes.json');

    //FROM MODULE 6 
    //Call the loader object's load() function ("loader" is the object 
    //you created in the previous TODO)
    loader.load();

    renderer = new render.Renderer();

    var loadRecipes = function() {
        var el = (<HTMLSelectElement> document.getElementById('RecipeCategory'));
        try {
            var category = recipeCategories.items
                //Find selected item by name
                .filter(item => item.name === el.value)
                //return the item
                .reduce(item => new recCategory.RecipeCategory({
                    name: el.value,
                    foodGroups: item.foodGroups,
                    description: item.description,
                    examples: item.examples
                }));
            renderer.renderCategory(category);
        }
        catch (ex) { alert(ex.message) }
    }
})();