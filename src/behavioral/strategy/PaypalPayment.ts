import { PaymentStrategy } from "./PaymentStrategy";

// This is another 'Concrete Strategy' class. It implements the algorithm
// using the Strategy interface, but with its own specific logic.
export class PaypalPayment implements PaymentStrategy {
    constructor(private email: string) {}

    // The implementation of the payment logic specific to PayPal.
    public pay(amount: number): void {
        console.log(`$${amount} paid using PayPal.`);
        console.log(`PayPal account: ${this.email}`);
    }
}

