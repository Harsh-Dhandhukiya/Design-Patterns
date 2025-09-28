import { Coffee } from './Coffee';

// This is another concrete decorator.
export class SugarDecorator implements Coffee {
    // It also holds a reference to the component it is decorating.
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    // It adds its own logic on top of the wrapped component's logic.
    public getCost(): number {
        // Add the cost of sugar to the existing cost.
        return this.coffee.getCost() + 1; // Cost of sugar
    }

    public getDescription(): string {
        // Append its own description.
        return `${this.coffee.getDescription()}, with sugar`;
    }
}

