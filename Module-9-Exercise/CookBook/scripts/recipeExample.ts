import interfaces = require('interfaces');
import ingredient = require('ingredient');

//FROM MODULE 7&8:
//Modify the class below so that it implements the IExample interface
//and the constructor accepts a parameter typed as IExample.

export class Example implements interfaces.IExample {
    name: string;
    ingredients: ingredient.Ingredient[] = [];
    prepTime: string; 

    constructor(example: interfaces.IExample) {
        this.name = example.name;
        this.ingredients = example.ingredients;
        this.prepTime = example.prepTime;
    }             
}
