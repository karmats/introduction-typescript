import Interfaces = require('interfaces');
import Loader = require('loader');

(() => {
    var painterSelect:HTMLSelectElement = (<HTMLSelectElement> document.getElementById('PainterName'));

    painterSelect.onchange = () => {
        loadPainter(painterSelect.value);
    }

    var loader = new Loader.Loader('/JSON/famousPainters.json')
    loader.loadPainters(painterSelect);

    var loadPainter = (painterName) => {
        var el = (<HTMLSelectElement> document.getElementById('PainterName'));
        var painters = loader.getPainters();
        try {
            // Find painter
            var painter = painters.filter(item => item.name === el.value)[0],
                styleElement = document.getElementById('PainterStyle'),
                examplesElement = document.getElementById('PainterExamples');
            // Painter style
            styleElement.innerHTML = painter.style;
            // Painter examples
            while (examplesElement.firstChild) {
                examplesElement.removeChild(examplesElement.firstChild);
            }
            painter.examples.forEach((example) => {
                var listElm = document.createElement('li');
                listElm.innerHTML = example;
                examplesElement.appendChild(listElm);
            });
        }
        catch (ex) { alert(ex.message) }
    }
})();