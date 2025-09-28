import { Shape } from "./Shape";

// Concrete Products provide various implementations of the Product interface.
export class Square implements Shape {
    public draw(): void {
        console.log("Drawing a Square.");
        console.log("*****");
        console.log("* *");
        console.log("* *");
        console.log("*****");
    }
}

