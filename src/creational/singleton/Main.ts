import { Logger } from "./Logger";

// The client code.
function main() {
    console.log("--- Singleton Pattern Demo ---");
    console.log("If you see the same value, then singleton was reused (yay!)");
    console.log("If you see different values, then 2 singletons were created (booo!!)");

    // Get the singleton instance. The first time this is called, it will create
    // the Logger instance.
    const logger1 = Logger.getInstance();

    // Get the singleton instance again. This will return the already created
    // instance.
    const logger2 = Logger.getInstance();

    // Check if both variables contain the same instance.
    if (logger1 === logger2) {
        console.log("Singleton works, both variables contain the same instance.");
    } else {
        console.log("Singleton failed, variables contain different instances.");
    }

    // Use the logger from different parts of the application.
    console.log("\nUsing the logger instance to log messages:");
    logger1.info("Application has started.");
    logger2.warn("This is a warning message.");
    logger1.error("An error has occurred.");
    logger2.log("Application is shutting down.");
    
    console.log("\n--- End of Demo ---");
}

// Run the demonstration
main();

