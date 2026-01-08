# Composition vs Inheritance

The choice between combining components (composition) and extending classes (inheritance) to share behavior and build UIs.

## React's Philosophy

React strongly recommends composition over inheritance. Facebook says they haven't found any use cases where inheritance is better than composition.

## What is Composition (✅ Recommended)?

Composition is a design principle where you build complex components by combining simpler ones. In React, this means creating components that can be nested, passed as props, or used as children to other components, allowing for more flexible and reusable code.

Benefits:

- **Flexibility**: Components can be easily combined and reused in different contexts.
- **Clear**: Composition promotes a clear separation of concerns, making it easier to understand and maintain code.
- **Reusability**: Small, focused components can be composed in various ways to achieve different functionalities.
- **Works with hooks**: Composition works seamlessly with React hooks, allowing you to encapsulate stateful logic and side effects in reusable functions.
- **Simple**: Composition encourages simpler, more understandable code by breaking down complex UIs into smaller, manageable pieces.

## What is Inheritance (❌ Not Recommended)?

Inheritance is a design principle where a class can extend another class, inheriting its properties and methods. In React, this means creating components that extend `React.Component` or another custom component, allowing for code reuse through a hierarchical relationship.

Problems:

- **Rigid**: Inheritance creates a rigid hierarchy, making it difficult to change or extend functionality without affecting other parts of the application.
- **Tightly coupled**: Inheritance tightly couples components, making it harder to reuse or modify them independently.
- **Forces classes to be aware of each other**: Inheritance requires classes to have knowledge of their parent classes, leading to a higher degree of coupling and reduced flexibility.
- **Complex**: Inheritance can lead to complex and hard-to-maintain code, especially as the hierarchy grows deeper.

## Key Principle

> Think in terms of "has-a" (composition) rather than "is-a" (inheritance)

Instead of "UserPanel is a Panel", think "UserPanel has a Panel that contains UserDetails"
