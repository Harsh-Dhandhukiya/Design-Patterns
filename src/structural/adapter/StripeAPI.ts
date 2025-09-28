// The Adaptee contains some useful behavior, but its interface is
// incompatible with the existing client code. The Adaptee needs some
// adaptation before the client code can use it.
export class StripeAPI {
    public makePayment(amount: number): void {
        console.log(`Processing payment of $${amount} through Stripe.`);
        // In a real-world scenario, this would contain the logic to interact with Stripe's SDK or API.
    }
}

