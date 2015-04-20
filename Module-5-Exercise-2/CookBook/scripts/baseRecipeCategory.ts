class BaseRecipeCategory {
    private _name: string;
    private _foodGroups: FoodGroup[] = [];

    //TODO: Create get and set blocks for each of the variables in the declaration above.
    get name(): string {
        return this._name;
    }
    
    set name(_name: string) {
        this._name = _name;
    }

    get foodGroups(): FoodGroup[] {
        return this._foodGroups;
    }

    set foodGroups(_foodGroups: FoodGroup[]) {
        this._foodGroups = _foodGroups;
    }


} 