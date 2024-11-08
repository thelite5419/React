# ReactJS

## Why Learn React?

React is a popular JavaScript library that simplifies the process of building complex and interactive frontends for web applications. Its component-based structure allows developers to break down interfaces into manageable, reusable pieces, making it easier to maintain and scale.

React is primarily used to create dynamic User Interfaces (UIs), enabling efficient updates and rendering of components as data changes. Whether you're building a single-page application or integrating dynamic features into a larger project, React helps make UI development faster and more intuitive.

## Why Was React Created?

React was originally developed by Facebook to address issues in their applications, such as the "phantom message problem." For example, in Facebook Messenger, users would sometimes see a notification badge indicating unread messages, even after opening the messages. This inconsistency arose due to challenges with keeping the UI in sync with the underlying state.

React introduced a powerful solution to this issue by providing a way to synchronize JavaScript state with the Document Object Model (DOM). React achieves this by maintaining a "virtual DOM" — a lightweight representation of the actual DOM — that allows efficient updates and rendering. This means that React can update only the necessary parts of the UI, providing a smoother, more consistent experience.

### Key Points:
- **Efficient UI management**: React keeps the UI in sync with the application's state.
- **Virtual DOM**: Allows updates without reloading the whole page, enhancing performance.
- **Component-based architecture**: Helps in building reusable, manageable components.

## Is React a Library or a Framework?

React is a **library** — not a full framework — focused primarily on the view layer. This gives developers flexibility, as they can integrate React with other libraries or frameworks as needed. For example, React applications often use additional libraries for routing (like React Router) or state management (like Redux) to handle broader application requirements.

## Setting Up React

While React itself is platform-independent, it has a few key libraries for different environments:
- **React DOM**: Used to render React applications in web browsers.
- **React Native**: A separate library for building native mobile applications with React.

### Setting Up a React Project

One of the simplest ways to start with React is to use the `create-react-app` tool, which sets up a fully configured environment. However, this setup can be somewhat slow and may include more dependencies than needed for smaller projects. To streamline the process, alternative tools like **Vite** and **Parcel** are increasingly popular for faster, lighter React setups.

#### Quick Setup Using Vite

Vite is a modern build tool that offers a faster, simpler setup process than `create-react-app`. Here's how to set up a new React project with Vite:

1. **Initialize a Vite project**:
   ```bash
   npm create vite@latest
   ```
2. **Configure project settings**: 
   - Enter a name for your project and choose **React** as the framework.
   - Select **JavaScript** (or **TypeScript**, if preferred).

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

Your Vite-powered React environment is now ready. To see the initial code, open the `App.jsx` file, where you can modify and add components to customize your application.

### Example Project Structure

If you've followed the steps above, your project structure should look like this:

```plaintext
react/
├── 01BasicReact/
│   └── 01BasicVite/
```

In the `01BasicVite` folder, you can explore the basic "Hello World" React application set up via Vite.

### Editing Your React Code

To start building your app, open the `App.jsx` file and modify the code as needed. Here, you can define components, apply styles, and manage your app's state.

---

# Understanding the Flow and Structure

## How React Works Internally

React uses a virtual DOM (Document Object Model) to optimize updates and efficiently manage the app's structure. The virtual DOM is an in-memory representation of the actual DOM, allowing React to apply updates without directly interacting with the real DOM until necessary. This process makes updates faster and reduces the load on the browser.

### Flow of a Basic React App

1. **Creating the Root**:
   - In a React application, the main entry point is usually `main.jsx` (or `index.js` in older setups). This file defines the root of the app and connects it to the root HTML element.
   - In `main.jsx`, the root element from `index.html` (often a `<div id="root"></div>`) is referenced and becomes the target for React's rendering.

2. **Rendering Components**:
   - React renders content by using the `.render` function, which is typically called in `main.jsx`. The main component, `<App />`, is rendered within this root element.
   - The `App` function is a core component that returns JSX (JavaScript XML), which looks like HTML but can also include JavaScript expressions.

3. **Including JavaScript in JSX**:
   - JSX allows embedding JavaScript directly within the HTML structure using curly braces `{}`. This capability makes React dynamic and interactive.

4. **Role of `package.json` Scripts**:
   - In a typical React app created with `create-react-app`, React scripts specified in `package.json` handle the loading of the root div and manage the development server, build process, and other tasks.
   - However, when using Vite, the `main.jsx` file is directly linked through a script tag, making the setup lighter and faster. Vite simplifies the development process by offering a quicker setup and build time compared to traditional React apps.

### Naming Conventions in React

- **Component Naming**: In React, component functions and modules should start with an uppercase letter. This convention helps React identify components and distinguish them from standard HTML tags.

## Building Components in React

In a React app, every component file (usually with a `.jsx` extension) should return a single root element. For instance:

```jsx
// A simple component named Thelite
function Thelite() {
    return (
        <h1>This is written by Thelite</h1>
    );
}

export default Thelite;
```

### Returning Multiple Elements

To return multiple elements from a component, they need to be wrapped within a single parent element. You can use a `<div>`, or an empty wrapper `<> </>` (also called a React fragment), to enclose multiple elements:

```jsx
// A component with multiple elements wrapped in a <div>
function Thelite() {
    return (
        <div>
            <p>This is wrapped by Thelite.</p>
            <p>It demonstrates returning multiple elements in one component.</p>
            <p>We use a <div> tag or a fragment to group multiple elements.</p>
        </div>
    );
}

export default Thelite;
```

Alternatively, you can use a fragment (`<> </>`) to avoid adding an extra `<div>` in the HTML structure:

```jsx
// Using a fragment to return multiple elements without an extra <div>
function Thelite() {
    return (
        <>
            <p>This is wrapped by Thelite.</p>
            <p>Using a fragment keeps the HTML structure cleaner.</p>
        </>
    );
}

export default Thelite;
```

---

# Understanding How React Works Under the Hood

React simplifies building user interfaces by allowing developers to write components as functions that define what a UI should look like for different states. But how does React manage to create and update elements efficiently? Under the hood, React utilizes an optimized technique to create and inject elements into the DOM, managing updates to ensure fast and efficient rendering.

## How React Renders Elements

In traditional JavaScript, we manually create and insert elements into the DOM, which can look like this:

```javascript
function createElement(reactElement, container) {
    // Create a DOM element based on the specified type
    const domElement = document.createElement(reactElement.type);

    // Set the inner content
    domElement.innerHTML = reactElement.children;

    // Loop through props and set attributes
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    // Append the created element to the container
    container.appendChild(domElement);
}

// Example usage
const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click here to visit Google"
};

const mainElement = document.querySelector("#root");
createElement(reactElement, mainElement);
```

In the code above:
- A JavaScript function manually creates and configures a DOM element, attaching properties and appending it to the main element in the DOM.
- This approach directly manipulates the DOM, which can become slow and inefficient with complex or frequently updating interfaces.

### Optimized React Approach

React improves upon this manual process by:
- Creating a "virtual DOM" to keep track of UI changes in memory.
- Using a **diffing algorithm** to identify changes and update only the necessary parts of the actual DOM.
- Reducing the performance cost of directly interacting with the DOM for every update.

### JSX and the `React.createElement` Method

React developers typically use **JSX**, a syntax that looks like HTML, to define UI components. Under the hood, JSX is transpiled into JavaScript that calls `React.createElement`. This function produces a JavaScript object representing the UI element, which React later renders in the DOM.

Here's an example of creating an element with `React.createElement`:

```javascript
const reactElement = React.createElement(
    'a',
    { href: "https://google.com", target: "_blank" },
    'Click here to visit Google'
);
```

In this example:
- `React.createElement` generates an object that React uses to create and manage the element in the DOM.
- This object specifies the type (`'a'`), props (`href`, `target`), and children (link text) for the anchor tag.

## Injecting Variables in React Components

In React, you can directly embed JavaScript variables within JSX using curly braces `{}`, known as **evaluated expressions**. This allows you to dynamically update the UI based on the component's state or data passed as props.

For example:

```javascript
const username = "thelite";

function WelcomeMessage() {
    return (
        <p>{username}
            <br /> This is a message from {username}.
        </p>
    );
}
```

In this code:
- `{username}` is used within the JSX to insert the value of `username` into the rendered output.
- This capability enables React to render dynamic, data-driven UIs.

## React's Component Tree and Bundlers

When you build a React app, tools like **Vite** and **Webpack** serve as **bundlers**, processing and organizing the component hierarchy and dependencies. React’s component tree structure, defined in the code, is transformed by the bundler, which optimizes and compiles the code for the browser.

- **React.render**: React's render function inserts the main component (e.g., `<App />`) into a root element in the `index.html` file, starting the app.
- **Bundlers**: Tools like Vite directly inject the `main.jsx` file, handling dependencies and compiling the app efficiently.

### Example: Rendering a JSX Element Directly

Instead of creating elements manually, we can also render JSX directly:

```javascript
const newElement = (
    <a href="https://google.com" target="_blank">Visit Google</a>
);

ReactDOM.render(newElement, document.getElementById('root'));
```

This method is simpler, as the JSX element is compiled by React into the appropriate JavaScript structure.

## Folder Structure and Additional Examples

The `02UnderTheHood` folder includes examples demonstrating these concepts.

---

# Understanding Hooks and UI State Management

In React, **hooks** are functions that allow you to use state and other React features in functional components, providing a way to manage dynamic content and updates more easily than with traditional JavaScript. The most commonly used hook is `useState`, which manages and updates state variables in React components. 

## Why Use React Hooks?

In classic JavaScript, updating UI elements requires:
1. Selecting the element by ID or class.
2. Updating the inner content.
3. Re-rendering the changed content manually.

With React, however, hooks provide a much cleaner approach to managing these updates. Using the `useState` hook allows React to automatically re-render components wherever the state variable is used, making your UI more interactive and responsive.

## The `useState` Hook: Managing State in Functional Components

The `useState` hook allows you to create a state variable and a function to update that variable. Here’s the basic syntax:

```javascript
import { useState } from "react";

const [variable, setVariable] = useState(initialValue);
```

- `variable` holds the current state.
- `setVariable` is the function used to update the state.
- `initialValue` is the starting value for the variable.

Whenever you call `setVariable(newValue)`, React automatically re-renders any part of the UI that uses `variable`, ensuring the display is always in sync with the data.

## Example: Creating a Counter with `useState`

Let’s say you want to create a simple counter that increments every time a button is clicked. Here’s how you might do it:

### Code Example

```javascript
import { useState } from "react";
import "./App.css";

function App() {
  // Initialize a state variable `counter` with a value of 0
  const [counter, setCounter] = useState(0);

  // Function to handle incrementing the counter
  const addValue = () => {
    setCounter(counter + 1); // Update the counter state
  };

  return (
    <>
      <h1>Counter Example</h1>
      <h2>Current Value:</h2>
      <h3>{counter}</h3>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={() => setCounter(counter - 1)}>Remove Value</button>
    </>
  );
}

export default App;
```

### Explanation of the Code

1. **Using `useState`**:
   - We declare `counter` as our state variable and `setCounter` as the function to update it.
   - The initial value of `counter` is set to `0`.

2. **Updating the State**:
   - When the **Add Value** button is clicked, the `addValue` function is called.
   - Inside `addValue`, we call `setCounter(counter + 1)`, updating the state to the new value of `counter`.
   - React automatically re-renders the component, displaying the updated `counter` value.

3. **Directly Calling `setCounter`**:
   - For the **Remove Value** button, we use an inline function to call `setCounter(counter - 1)`, decreasing the `counter` by 1 whenever the button is clicked.

### Why `useState` Works Differently from Regular Variables

In standard JavaScript, if we use a `let` variable to store the counter, updating it alone would not cause a re-render. React needs `useState` to track and re-render components efficiently. For instance:

```javascript
// This won't work in React as expected:
let counter = 0;
const addValue = () => {
  counter++;
  console.log("Counter:", counter); // The counter updates here but doesn't re-render the UI
};
```

Without `useState`, the UI won't reflect changes in `counter` because React doesn't know it should re-render. This is why we use the `useState` hook to tell React which variables to watch for changes.

---

# Understanding Virtual DOM and React Fiber

## What is the Virtual DOM?

The **Virtual DOM** is a lightweight copy of the actual DOM that React uses to improve the efficiency of UI updates. Unlike directly modifying the browser DOM (which can be slow and performance-intensive), React creates its own virtual representation of the DOM. This virtual DOM allows React to efficiently manage and track changes without impacting the actual DOM until necessary.

### How the Virtual DOM Works

1. **Creating a Virtual DOM**: React uses the `createRoot` method to create a virtual DOM tree based on your React component structure.
2. **Updating Only What’s Needed**: When a component’s state or props change, React generates a new virtual DOM tree. It then compares this new tree with the previous one to identify what has changed.
3. **Efficient Updates**: Instead of re-rendering the entire page, React only updates the parts of the DOM that have changed. This process minimizes the number of operations required on the actual browser DOM, making updates faster and smoother.

By updating only the changed parts of the UI rather than reloading the entire page, React provides a highly efficient user experience, especially for applications with complex UIs.

## React Fiber: The Backbone of React's Virtual DOM

**React Fiber** is an advanced algorithm introduced by React to handle rendering and improve React’s efficiency in areas such as animations, layout, and user interactions.

### Key Benefits of React Fiber

1. **Enhanced Reconciliation**: Fiber manages the process of comparing the new virtual DOM with the existing one. This comparison, known as **reconciliation**, determines the minimum number of changes required in the actual DOM, keeping UI updates fast and efficient.
2. **Priority Scheduling**: React Fiber assigns different priorities to different tasks, allowing it to handle complex animations and interactions smoothly.
3. **Pausing and Resuming Work**: Fiber can pause rendering tasks and resume them later, which is useful for maintaining smooth animations and avoiding blocking the main thread.
4. **Reusing Completed Work**: Fiber can reuse work that has already been done, reducing redundant operations and increasing efficiency.

### How React Fiber Improves Performance

React Fiber allows React to "interrupt" ongoing rendering tasks to prioritize urgent updates, such as user interactions or animations. If part of a rendering task is no longer necessary, Fiber can cancel it, freeing resources and preventing unnecessary work.

### How Reconciliation Works in Fiber

When React updates a component:
1. **Tree Generation**: React generates a virtual DOM tree, representing the updated UI.
2. **Diffing Process**: The new tree is compared to the previous tree, identifying only the changes.
3. **DOM Updates**: These changes are then applied to the actual DOM, minimizing the operations and improving performance.

---


# React with Tailwind CSS and Props

## Setting up Tailwind with Vite

To use Tailwind CSS with Vite, follow these steps:

1. **Create Your Project**: Start by creating a new Vite project.
   ```bash
   npm create vite@latest my-project -- --template react
   cd my-project
   ```

2. **Install Tailwind CSS**: Install Tailwind CSS and its peer dependencies, then generate the configuration files.
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. **Configure Template Paths**: Add paths to all your template files in the `tailwind.config.js` file.
   ```js
   // tailwind.config.js
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

4. **Add Tailwind Directives to CSS**: In your `index.css` file, add the Tailwind directives to load its layers.
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. **Start the Development Server**: Run your development server to see Tailwind CSS in action.
   ```bash
   npm run dev
   ```

## Using Tailwind in Your React Components

With Tailwind installed, you can use utility classes in your React components for styling.

**Example**:
```jsx
import React from 'react';
import "./App.css";

function App() {
  return (
    <a
      href="#"
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy Technology Acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </a>
  );
}

export default App;
```

# Props in React

## Introduction to Props

**Props** (short for "properties") in React are used to pass data from a parent component to a child component. They enable us to reuse components with different data, making our UI more dynamic and flexible.

### Example of Using Props

Suppose we have a reusable card component, and we want to display different content in each card.

**Card Component (`Cards.jsx`)**:

```jsx
import React from 'react';

function Cards({ username = "default name" }) {
  return (
    <a
      href="#"
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {username}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021, in reverse chronological order.
      </p>
    </a>
  );
}

export default Cards;
```

In the parent component (`App.jsx`), we can reuse the `Cards` component multiple times and pass different values for the `username` prop:

**Parent Component (`App.jsx`)**:

```jsx
import { useState } from "react";
import Cards from "./components/Cards";

function App() {
  let myObj = { username: "gauri" };

  return (
    <>
      <Cards username="thelite" />
      <Cards username="gauri" />
      <Cards username="john" someObj={myObj} />
    </>
  );
}

export default App;
```

### Passing Objects or Arrays to Props

You can also pass objects or arrays as props:

```jsx
let myObj = {
  username: "gauri"
};

return (
  <>
    <Cards username="thelite" someObj={myObj} />
  </>
);
```

### Destructuring Props for Cleaner Code

To avoid repeatedly writing `props.[property]`, you can **destructure** the props in the function parameter:

```jsx
function Cards({ username = "default name" }) {
  return (
    <a
      href="#"
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {username}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021.
      </p>
    </a>
  );
}
```

### Default Props

In the example above, we set a default value for the `username` prop in case it’s not provided. This ensures that the component will always have a fallback value to display.

---
