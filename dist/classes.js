"use strict";
//* Classes 101
class MenuItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get details() {
        return `${this.title} - £${this.price}`;
    }
}
class Pizza extends MenuItem {
    constructor(title, price) {
        super(title, price);
        this.base = "classic";
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((top) => top !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
    format() {
        let formatted = this.details + '\n';
        //*base
        formatted += `Pizza on a ${this.base}`;
        //*Toppings
        if (this.toppings.length < 1) {
            formatted += 'with no toppings';
        }
        if (this.toppings.length > 0) {
            formatted += `With ${this.toppings.join(', ')}`;
        }
        return formatted;
    }
}
const pizzaOne = new Pizza("mario special", 15);
pizzaOne.details;
const printMenuItem = (item) => {
    console.log(item.details);
};
printMenuItem(pizzaOne);
function printformatted(val) {
    console.log(val.format());
}
printformatted(pizzaOne);
