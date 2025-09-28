import { PaymentStrategy } from "./PaymentStrategy";

// This is a 'Concrete Strategy' class. It implements the algorithm
// using the Strategy interface.
export class CreditCardPayment implements PaymentStrategy {
    // In a real application, these would be securely handled.
    constructor(
        private name: string,
        private cardNumber: string,
        private cvv: string,
        private expiryDate: string
    ) {}

    // The implementation of the payment logic specific to credit cards.
    public pay(amount: number): void {
        console.log(`$${amount} paid with credit card.`);
        console.log(`Card Holder: ${this.name}, Card Number: ${this.cardNumber}`);
    }
}

