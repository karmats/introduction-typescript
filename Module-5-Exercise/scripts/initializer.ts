
//then populate drop-downs with items from the different classes
var request = new XMLHttpRequest();

//class logic
var recipes: Recipes;


function recipeTypeLoader() {
    var recipeGetter: RecipeType;

    //class logic
    recipes = JSON.parse(request.responseText);
    var rType = document.getElementById('RecipeType');

    //TODO: Instantiate the class object on one line, then call the LoadRecipeTypes on a second line to fill the drop down box.
    //make sure pass in the correct value to the function. HINT: the object you need to pass in has already been created above.
    recipeGetter = new RecipeType();
}

window.onload = () => {    
    request.onload = recipeTypeLoader;
    request.open("get", "/JSON/recipeTypes.json", true);
    request.send();
};
    
class RecipeType {

    //TODO: crete a member variable to match the constructor


    //TODO: the type is missing from the constructor. Fill that in. 
    constructor(recipeType: ) {
        this._recipeType = recipeType;
    }

    LoadRecipeTypes(types: Recipes) {
        for (var i = 0; i < types.recipeType.length; i++) {
            var opt = document.createElement('option');
            opt.innerHTML = types.recipeType[i].name;
            this._recipeType.appendChild(opt);
        }
    }


}    




