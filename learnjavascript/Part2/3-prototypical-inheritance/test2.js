function HtmlElement() {
    this.click = function() {
        console.log('click');
    }
}
HtmlElement.prototype.focus = function() {
    console.log('focus');
}

function HtmlSelectElement(items = []){
    this.items = Array.from(items)
    this.addItem = function(item) {
        this.items.push(item);
    }
    this.removeItem = function(item) {
        this.item.splice(this.items.indexOf(item), 1);
    }
    this.render = function() {
        return `
        <select>${this.items.map((item) => `
        <option>${item}<option/>`).join('')}
        <select/>`;
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
    this.src = src;
    this.render = function() {
        return `<img src="${this.src}" />`;
    }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;