import { PaymentStrategy } from "./PaymentStrategy";

// This is a third 'Concrete Strategy' class, further demonstrating the
// flexibility of the pattern.
export class UpiPayment implements PaymentStrategy {
    constructor(private upiId: string) {}

    // The implementation of the payment logic specific to UPI.
    public pay(amount: number): void {
        console.log(`$${amount} paid using UPI.`);
        console.log(`UPI ID: ${this.upiId}`);
    }
}

