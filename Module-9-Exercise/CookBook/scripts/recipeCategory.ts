/// <reference path="typings/require.d.ts" />
import base = require('baseRecipeCategory');
import interfaces = require('interfaces');
import example = require('recipeExample');

//FROM MODULE 7&8:
//Fill out the body of this class so it extends BaseRecipeCategory
//and implements IRecipeCategory

export class RecipeCategory extends base.BaseRecipeCategory implements interfaces.IRecipeCategory {
    description: string;
    examples: example.Example[];

    constructor(recipeCategory:interfaces.IRecipeCategory) {
        super(recipeCategory.name, recipeCategory.foodGroups);
        this.description = recipeCategory.description;
        this.examples = recipeCategory.examples;
    }
}