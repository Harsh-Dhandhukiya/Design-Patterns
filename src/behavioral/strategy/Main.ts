import { PaymentContext } from "./PaymentContext";
import { CreditCardPayment } from "./CreditCardPayment";
import { PaypalPayment } from "./PaypalPayment";
import { UpiPayment } from "./UpiPayment";

// Client code demonstrating the Strategy pattern
function main() {
    // Create a payment context with Credit Card strategy
    const creditCard = new CreditCardPayment("John Doe", "1234-5678-9012-3456", "123", "12/25");
    const context = new PaymentContext(creditCard);

    // Execute payment with Credit Card
    context.executePayment(100);

    console.log("--- Switching to PayPal ---");

    // Switch to PayPal strategy
    const paypal = new PaypalPayment("john.doe@example.com");
    context.setStrategy(paypal);

    // Execute payment with PayPal
    context.executePayment(200);

    console.log("--- Switching to UPI ---");

    // Switch to UPI strategy
    const upi = new UpiPayment("john.doe@upi");
    context.setStrategy(upi);

    // Execute payment with UPI
    context.executePayment(50);
}

// Run the main function
main();
