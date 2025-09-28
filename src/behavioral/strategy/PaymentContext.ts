import { PaymentStrategy } from "./PaymentStrategy";

// This is the 'Context' class. It maintains a reference to a Strategy
// object. The Context does not know the concrete type of a strategy.
// It should work with all strategies via the Strategy interface.
export class PaymentContext {
    private strategy: PaymentStrategy;

    // The context accepts a strategy through the constructor, but also
    // provides a setter so that the strategy can be changed at runtime.
    constructor(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    // This method allows the client to replace a strategy object at runtime.
    public setStrategy(strategy: PaymentStrategy): void {
        this.strategy = strategy;
    }

    // The context delegates some work to the strategy object instead of
    // implementing multiple versions of the algorithm on its own.
    public executePayment(amount: number): void {
        console.log("PaymentContext: Executing payment strategy.");
        this.strategy.pay(amount);
    }
}

