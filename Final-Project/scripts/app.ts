import Interfaces = require('interfaces');
import Loader = require('loader');

(() => {
    var painterSelect = (<HTMLSelectElement> document.getElementById('PainterName'));
    
    /*painterSelect.onchange = () => {
        console.log('CHANGE!');
        //loadPainter();
    }*/

    var loader = new Loader.Loader('/JSON/famousPainters.json')
    loader.loadPainters(painterSelect);
    /*var loadPainter = () => {
        var el = (<HTMLSelectElement> document.getElementById('PainterName'));
        var painters = loader.getPainters();
        try {
            var name = painters
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
    }*/
})();