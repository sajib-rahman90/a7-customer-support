1. What is JSX, and why is it used?
   **Ans of 1**
   JSX is a special syntax used in React that lets write HTML-like code inside JavaScript. It is used because it makes the UI code easier to read and understand, and React can quickly turn it into real JavaScript that the browser understands.

2. What is the difference between State and Props?
   **Ans of 2**
   State and Props are both used to handle data, but they are different in how they work. State is data that belongs to a component and can change over time, usually because of user actions.
   Props are data passed from a parent component to a child component, and the child cannot change them.

3. What is the useState hook, and how does it work?
   **Ans of 3**
   The useState hook is a React feature that lets a component remember data and update it when needed. It gives you a value and a function to change that value, and when the value changes, React automatically updates the screen.

4. How can you share state between components in React?
   **Ans of 4**
   State can be shared between components by lifting the state up to a common parent component. The parent keeps the state and passes it down to child components as props, so they all stay in sync.

5. How is event handling done in React?
   **Ans of 5**
   Event handling in React is done by attaching events like onClick or onChange directly to elements. When the event happens, a function runs, and that function can update state or do any other required action.
