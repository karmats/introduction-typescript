/// <reference path="typings/jquery.d.ts" />
import recCategory = require('recipeCategory');
import recCategories = require('recipeCategories');
import foodGrp = require('foodGroup');
import recCatSummary = require('recipeCategorySummary');
import interfaces = require('interfaces');
import exmpl = require('recipeExample');
import ingr = require('ingredient');
import initializer = require('initializer');

export class RecipeLoader {
    constructor(public url: string) {}

    load() {
        $.getJSON(this.url,(data) => {
            console.log(data);
            this.mapData(data);        
        });
    }

    mapData(data) {
        if (data) {
            var categories: any[] = data.recipeCategories;
            //TODO
            //Change RecipeCategories to use the new generic type.
            //Pass IRecipeCategory as the type
            initializer.recipeCategories = new recCategories.RecipeCategories<interfaces.IRecipeCategory>();

            //TODO
            //Create a new RecipeCategories object named recipeCategoriesSummary
            //and pass an IRecipeCategorySummary as the generic value.
            var recipeCategoriesSummary = new recCategories.RecipeCategories<interfaces.IRecipeCategorySummary>();

            categories.forEach((category) => {
                var recipeCategory = new recCategory.RecipeCategory({
                    name: category.title,
                    foodGroups: this.getFoodGroups(category),
                    description: category.details,
                    examples: this.getExamples(category)
                });
                initializer.recipeCategories.items.push(recipeCategory);

                //TODO
                //Create a new RecipeCategorySummary instance and pass
                //the category.title and category.details into the constructor.
                //Once the class is created add it into the recipeCategoriesSummary
                //object's items collection
                //HINT: The constructor object passed must match the IRecipeCategorySummary interface
                //HINT: Use the push() function
                var recipeCategorySummary = new recCatSummary.RecipeCategorySummary({
                    text: category.title, 
                    title: category.details
                });
                recipeCategoriesSummary.items.push(recipeCategorySummary);
            });

            //Render the categories into the select
            initializer.renderer.renderCategories(recipeCategoriesSummary);
        }
        else {
            initializer.renderer.renderError();
        }
    }

    getFoodGroups(category) : foodGrp.FoodGroup[] {
        //Map foodgroups data to TS object
        return category.foodGroups.map((foodGroup) => {
            var group = new foodGrp.FoodGroup(foodGroup.title);
            return group;
        });
    }

    getExamples(category) : interfaces.IExample[] {
        return category.examples.map((example) => { 
            return new exmpl.Example({
                name: example.name,
                ingredients: this.getIngredients(example),
                prepTime: example.prepTime
            });
        });
    }

    getIngredients(example): ingr.Ingredient[] {
        return example.ingredients.map((value) => {
            return new ingr.Ingredient(value);
        });
    }
}