import { ShapeFactory } from "./ShapeFactory";
import { Shape } from "./Shape";

// The client code works with an instance of a concrete creator, albeit through
// its base interface. As long as the client keeps working with the creator via
// the base interface, you can pass it any creator's subclass.
function clientCode(factory: ShapeFactory, shapeType: string) {
    console.log(`Client: I'm not aware of the creator's class, but it still works.`);
    const shape: Shape | null = factory.createShape(shapeType);
    if (shape) {
        shape.draw();
    } else {
        console.log(`Could not create shape of type: ${shapeType}`);
    }
}

console.log('App: Launched with the Circle shape creation.');
clientCode(new ShapeFactory(), 'CIRCLE');
console.log('');

console.log('App: Launched with the Square shape creation.');
clientCode(new ShapeFactory(), 'SQUARE');
console.log('');

console.log('App: Launched with an unknown shape creation.');
clientCode(new ShapeFactory(), 'TRIANGLE');

