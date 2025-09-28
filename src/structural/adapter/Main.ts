import { PaymentProcessor } from './PaymentProcessor';
import { StripeAPI } from './StripeAPI';
import { StripeAdapter } from './StripeAdapter';

// The client code supports all classes that follow the Target interface.
function clientCode(paymentProcessor: PaymentProcessor) {
    console.log('Client: I can work with any payment processor.');
    paymentProcessor.processPayment(100);
}

console.log('--- Using the application with a standard payment processor ---');
// This part is hypothetical, assuming we had a `StandardPaymentProcessor` that already implements the interface.
// const standardProcessor = new StandardPaymentProcessor();
// clientCode(standardProcessor);

console.log('');

console.log('--- Using the application with the Stripe API via an Adapter ---');
const stripeAPI = new StripeAPI();
const adapter = new StripeAdapter(stripeAPI);

// The client code can now work with the Stripe API through the adapter,
// without knowing any of the implementation details of the StripeAPI class.
clientCode(adapter);

