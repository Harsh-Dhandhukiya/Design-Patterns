import { BasicCoffee } from './BasicCoffee';
import { MilkDecorator } from './MilkDecorator';
import { SugarDecorator } from './SugarDecorator';
import { Coffee } from './Coffee';

// The client code works with all objects using the Coffee interface.
// This way it can stay independent of the concrete classes of
// components it works with.
function clientCode(component: Coffee) {
    console.log(`- DESCRIPTION: ${component.getDescription()}`);
    console.log(`- COST: $${component.getCost()}`);
    console.log('-------------------------');
}

console.log('--- Decorator Pattern Demo ---');

// 1. Start with a simple, basic coffee component.
const simpleCoffee = new BasicCoffee();
console.log('Client: I\'ve got a simple coffee:');
clientCode(simpleCoffee);

// 2. Now, let's decorate it with milk.
// The client code can now treat the decorated object in the same way
// as the simple coffee object.
const coffeeWithMilk = new MilkDecorator(simpleCoffee);
console.log('Client: Now I\'ve got a coffee with milk:');
clientCode(coffeeWithMilk);

// 3. We can decorate it even further.
// Note how decorators can wrap not only simple components but also
// other decorators.
const sweetCoffeeWithMilk = new SugarDecorator(coffeeWithMilk);
console.log('Client: Now I\'ve got a sweet coffee with milk:');
clientCode(sweetCoffeeWithMilk);

