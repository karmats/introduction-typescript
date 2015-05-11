/// <reference path="typings/jquery.d.ts" />
import Interfaces = require('interfaces');

export class Loader {
    private painters:Array<Interfaces.IPainter>;

    constructor(public url: string) {
    }

    public loadPainters(selectElement: HTMLSelectElement) {
        $.getJSON(this.url, (data) => {
            this.painters = data.famousPainters;
            this.painters.forEach((painter) => {
                var opt = document.createElement('option');
                opt.setAttribute('title', painter.name);
                opt.innerHTML = painter.name;
                selectElement.appendChild(opt);
            });
        });
    }
    
    public getPainters() {
        return this.painters;
    }
}