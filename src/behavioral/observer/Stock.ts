import { Observer } from "./Observer";

// This is the 'Subject' class. It maintains a list of observers and notifies them of any state changes.
export class Stock {
    private observers: Observer[] = [];
    private _price: number;

    constructor(public symbol: string, price: number) {
        this._price = price;
    }

    public get price(): number {
        return this._price;
    }

    // When the price is set, it checks if the price has actually changed.
    // If it has, it updates the price and calls notifyObservers().
    public set price(newPrice: number) {
        if (newPrice !== this._price) {
            this._price = newPrice;
            this.notifyObservers();
        }
    }

    // Adds an observer (e.g., an Investor) to the list.
    public addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    // Removes an observer from the list.
    public removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    // Iterates through the list of observers and calls the update() method on each one.
    private notifyObservers(): void {
        console.log(`\nNotifying observers that ${this.symbol} price has changed to $${this.price}`);
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}

