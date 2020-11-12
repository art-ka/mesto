import { from } from "webpack-sources/lib/CompatSource";

export class Section {
    constructor({ items, renderer }, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;

        this._container = document.querySelector(containerSelector);
    }

    renderItems(data) {
        data.forEach(item => this._renderer(item));
    }

    addItem(element) {
        this._container.prepend(element);
    }
}

