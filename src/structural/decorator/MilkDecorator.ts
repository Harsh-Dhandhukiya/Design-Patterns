import { Coffee } from './Coffee';

// Concrete decorators call the wrapped object and then alter its result in some way.
export class MilkDecorator implements Coffee {
    // The decorator holds a reference to the component object it is decorating.
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    // Decorators delegate all work to the wrapped component, and then
    // add their own logic.
    public getCost(): number {
        // It adds its own cost after getting the cost from the wrapped component.
        return this.coffee.getCost() + 2; // Cost of milk
    }

    public getDescription(): string {
        // It appends its own description to the wrapped component's description.
        return `${this.coffee.getDescription()}, with milk`;
    }
}

