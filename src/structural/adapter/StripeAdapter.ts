import { PaymentProcessor } from './PaymentProcessor';
import { StripeAPI } from './StripeAPI';

// The Adapter makes the Adaptee's interface compatible with the Target's
// interface.
export class StripeAdapter implements PaymentProcessor {
    private readonly stripeAPI: StripeAPI;

    constructor(stripeAPI: StripeAPI) {
        this.stripeAPI = stripeAPI;
    }

    public processPayment(amount: number): void {
        console.log('Adapter is converting the call to the Stripe API...');
        this.stripeAPI.makePayment(amount);
    }
}

