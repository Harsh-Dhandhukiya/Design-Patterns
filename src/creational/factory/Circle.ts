import { Shape } from "./Shape";

// Concrete Products provide various implementations of the Product interface.
export class Circle implements Shape {
    public draw(): void {
        console.log("Drawing a Circle.");
        console.log("  *** ");
        console.log(" * * ");
        console.log("* *");
        console.log(" * * ");
        console.log("  *** ");
    }
}

