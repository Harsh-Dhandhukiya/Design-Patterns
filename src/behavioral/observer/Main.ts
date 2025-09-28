import { Stock } from "./Stock";
import { Investor } from "./Investor";

// This is the main entry point to demonstrate the Observer pattern.
function main() {
    console.log("--- Observer Pattern Demo ---");

    // 1. Create the Subject (a stock).
    const googleStock = new Stock("GOOGLE", 2800);

    // 2. Create Observers (investors).
    const investor1 = new Investor("HARSH");
    const investor2 = new Investor("KHUSHI");
    const investor3 = new Investor("ARISHU");

    // 3. Register the observers to listen for updates from the stock.
    googleStock.addObserver(investor1);
    googleStock.addObserver(investor2);
    googleStock.addObserver(investor3);

    // 4. Change the stock's price. All registered observers will be notified.
    googleStock.price = 2850;

    // 5. Change the price again.
    googleStock.price = 2790;

    // 6. Unregister one observer (Bob).
    console.log("\n--- Bob is unsubscribing ---");
    googleStock.removeObserver(investor2);

    // 7. Change the price one more time. Bob will no longer be notified.
    googleStock.price = 2900;

    console.log("\n--- End of Demo ---");
}

main();

