import { Coffee } from './Coffee';

// Concrete components provide default implementations of the operations.
// This is the base object that decorators will wrap.
export class BasicCoffee implements Coffee {
    public getCost(): number {
        return 5; // Base cost of a simple coffee
    }

    public getDescription(): string {
        return 'A simple cup of coffee';
    }
}

