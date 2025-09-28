// This is the Strategy interface. It declares a common operation for all
// supported versions of the algorithm. The Context uses this interface to
// call the algorithm defined by a Concrete Strategy.
export interface PaymentStrategy {
    pay(amount: number): void;
}

