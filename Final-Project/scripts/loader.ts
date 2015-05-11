/// <reference path="typings/jquery.d.ts" />
import Interfaces = require('interfaces');

export class Loader {
    
    constructor(public url: string) {
    }

    public loadPainters(selectElement: HTMLSelectElement) {
        $.getJSON(this.url, (data) => {
            console.log(data);
            var painters: Array<Interfaces.IPainter> = data.famousPainters;
            painters.forEach((painter) => {
                var opt = document.createElement('option');
                opt.setAttribute('title', painter.name);
                opt.innerHTML = painter.name;
                selectElement.appendChild(opt);
            });
        });
    }
}