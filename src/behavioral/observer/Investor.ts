import { Stock } from "./Stock";
import { Observer } from "./Observer";

// This is a 'Concrete Observer' class. It implements the Observer interface
// and defines what action should be taken when the subject's state changes.
export class Investor implements Observer {
    constructor(public name: string) {}

    // The update method is called by the Subject (Stock) when its price changes.
    // It logs a notification message to the console for this specific investor.
    public update(stock: Stock): void {
        console.log(`Notified ${this.name}: ${stock.symbol} is now $${stock.price}`);
    }
}

