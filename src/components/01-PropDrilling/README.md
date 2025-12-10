# Prop Drilling

## What is it?

Passing props through multiple component levels even when intermediate components don't need them.

## When to USE prop drilling

- **Small component trees** (2-3 levels deep)
- **Clear data flow** - makes it obvious where data comes from
- **Simple apps** - avoiding premature optimization
- **Type safety** - easier to track prop types through the tree
- **Debugging** - can trace data flow more easily

## When it becomes problematic

- Deep nesting (4+ levels)
  - Before making this call there is a lot context to consider:
    - How many other components need this data
    - How many times is this prop be repeatedly passed down in other distinct branches of the tree
    - Contexts are more of a organizational tool for cross-cutting concerns (themes, auth, i18n) rather than a solution for every prop drilling scenario
- Many components need the same data
- Intermediate components get cluttered with pass-through props
- Refactoring becomes painful when prop signatures change

## Solutions when needed

- React Context API (for cross-cutting concerns)
- Component composition (restructure to avoid deep nesting)
- State management libraries (Redux, Zustand for complex state)

## Rule of thumb

Start with prop drilling. Only reach for Context or state management when you actually feel the pain of prop drilling, not just because you might need it later.
