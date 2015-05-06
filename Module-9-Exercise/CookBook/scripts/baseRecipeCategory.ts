//TODO: 
//Modify this class to it implements the IBaseRecipeCategory interface
import food = require('foodGroup');

export class BaseRecipeCategory {
    name: string;
    foodGroups: food.FoodGroup[] = [];

    //FROM MODULE 6:
    //Add constructor using the variable names above
    //as the parameters (so you'll have two parameters). 
    //Assign the parameter value to the associated member variables.
    constructor(name: string, foodGroups: food.FoodGroup[]) {
        this.name = name;
        this.foodGroups = foodGroups;
    }
}
