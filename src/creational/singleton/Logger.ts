// The Singleton class defines the `getInstance` method that lets clients access
// the unique singleton instance.
export class Logger {
    // The Singleton's instance is stored in a static field.
    private static instance: Logger;

    // The Singleton's constructor should always be private to prevent direct
    // construction calls with the `new` operator.
    private constructor() {}

    // The static method that controls the access to the singleton instance.
    // This implementation lets you subclass the Singleton class while keeping
    // just one instance of each subclass around.
    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }

        return Logger.instance;
    }

    // Finally, any singleton should define some business logic, which can
    // be executed on its instance.
    public log(message: string): void {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] [LOG]: ${message}`);
    }
    
    public info(message: string): void {
        const timestamp = new Date().toISOString();
        console.info(`[${timestamp}] [INFO]: ${message}`);
    }

    public warn(message: string): void {
        const timestamp = new Date().toISOString();
        console.warn(`[${timestamp}] [WARN]: ${message}`);
    }

    public error(message: string): void {
        const timestamp = new Date().toISOString();
        console.error(`[${timestamp}] [ERROR]: ${message}`);
    }
}

