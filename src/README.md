TypeScript Design Patterns Demo
This project contains six use cases demonstrating common software design patterns, as required by Exercise 1. The patterns are implemented in TypeScript and organized by category: Behavioral, Creational, and Structural.

Project Structure
The project is organized into the following directories:

/
|-- src/
|   |-- behavioral/
|   |   |-- observer/
|   |   `-- strategy/
|   |-- creational/
|   |   |-- singleton/
|   |   `-- factory/
|   `-- structural/
|       |-- adapter/
|       `-- decorator/
|-- dist/
|-- README.md
`-- tsconfig.json

src/: Contains all the TypeScript source code for the design patterns.

dist/: Contains the compiled JavaScript output. This directory is generated automatically.

README.md: This file.

tsconfig.json: TypeScript compiler configuration.

Prerequisites
Node.js (which includes npm)

TypeScript compiler (tsc)

Installation and Compilation
Clone the repository and navigate to the project directory.

Install dependencies (though there are no external ones for this project):

npm install

Compile the TypeScript code:
This command reads the tsconfig.json file and compiles all files from the src directory into JavaScript in the dist directory.

npx tsc

Running the Demos
After compiling, you can run each design pattern's demo using node.

1. Behavioral Patterns
Patterns that are concerned with algorithms and the assignment of responsibilities between objects.

Observer

Purpose: Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

Run Demo:

node dist/behavioral/observer/Main.js

Strategy

Purpose: Defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

Run Demo:

node dist/behavioral/strategy/Main.js

2. Creational Patterns
Patterns that provide object creation mechanisms, which increase flexibility and reuse of existing code.

Singleton

Purpose: Ensures a class only has one instance, while providing a global access point to this instance.

Run Demo:

node dist/creational/singleton/Main.js

Factory Method

Purpose: Creates objects without specifying the exact class of object that will be created.

Run Demo:

node dist/creational/factory/Main.js

3. Structural Patterns
Patterns that explain how to assemble objects and classes into larger structures, while keeping these structures flexible and efficient.

Adapter

Purpose: Allows objects with incompatible interfaces to collaborate.

Run Demo:

node dist/structural/adapter/Main.js

Decorator

Purpose: Attaches new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

Run Demo:

node dist/structural/decorator/Main.js
