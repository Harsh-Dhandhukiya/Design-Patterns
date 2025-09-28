import { Stock } from "./Stock";

export interface Observer {
    update(stock: Stock): void;
}

