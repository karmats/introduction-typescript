module RecipeData {
    //FROM MODULE 7&8:
    //Fill out the body of this class so it extends BaseRecipeCategory
    //and implements IRecipeCategory

    export class RecipeCategory extends BaseRecipeCategory implements IRecipeCategory {
        description: string;
        examples: Example[];

        constructor(recipeCategory:IRecipeCategory) {
            super(recipeCategory.name, recipeCategory.foodGroups);
            this.description = recipeCategory.description;
            this.examples = recipeCategory.examples;
        }
    }
}