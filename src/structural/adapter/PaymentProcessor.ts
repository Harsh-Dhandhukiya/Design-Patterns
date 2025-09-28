// The Target interface declares the domain-specific interface used by the client code.
export interface PaymentProcessor {
    processPayment(amount: number): void;
}

