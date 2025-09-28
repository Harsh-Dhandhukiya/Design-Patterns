import { Circle } from "./Circle";
import { Shape } from "./Shape";
import { Square } from "./Square";

// The Creator class declares the factory method that is supposed to return an
// object of a Product class. The Creator's subclasses usually provide the
// implementation of this method.
export class ShapeFactory {

    /**
     * The Factory Method.
     * Note that the ShapeFactory may also provide some default implementation of the factory method.
     */
    public createShape(shapeType: string): Shape | null {
        if (shapeType.toUpperCase() === 'CIRCLE') {
            return new Circle();
        } else if (shapeType.toUpperCase() === 'SQUARE') {
            return new Square();
        }
        return null; // or throw an error if the shape type is unknown
    }
}

