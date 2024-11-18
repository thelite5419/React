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

# Interview Question on Counter 

## Question: Why does the following code increment the counter by only 1 when the `addValue` function is called, despite calling `setCounter(counter + 1)` multiple times?

```javascript
import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>thelite</h1>
      <h2>Counter value</h2>
      <h3>is {counter}</h3>
      <button onClick={addValue}>Add Value</button>
    </>
  );
}

export default App;
```

### Answer:
When `addValue` is called, you might expect `counter` to increment by 5. However, the value only increments by 1. This behavior occurs because React batches state updates when they are called in quick succession within the same function or event handler.

### Why Does This Happen?
In React, state updates with `setCounter` are asynchronous and may be batched for performance reasons. Here’s why the counter only increments by 1:

1. Each call to `setCounter(counter + 1)` uses the current `counter` value at the time the function `addValue` runs, which is `0` in this case.
2. React will batch these updates and, because they are based on the same initial `counter` value, it only applies the last update, resulting in a single increment by 1.

### How to Increment the Counter Multiple Times Properly
To increment the counter multiple times as intended, use a functional update with `setCounter`. This way, each `setCounter` call receives the latest value of `counter`, allowing each increment to build on the previous one:

```javascript
function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <>
      <h1>thelite</h1>
      <h2>Counter value</h2>
      <h3>is {counter}</h3>
      <button onClick={addValue}>Add Value</button>
    </>
  );
}

export default App;
```

### Explanation
In the revised code, each call to `setCounter` receives the latest updated value through the `prevCounter` argument. Here’s what happens on each call to `addValue`:
- The first call updates `counter` from 0 to 1.
- The second call updates `counter` from 1 to 2.
- And so on, until it reaches 5.

Using this approach, the counter will increment by 5 each time you click the button, as intended.

### Key Takeaways
- React batches state updates, so multiple calls to `setCounter(counter + 1)` in the same function can result in only one update.
- Using a functional update `setCounter((prevCounter) => prevCounter + 1)` ensures each state update is based on the latest value.
- This technique is essential when you want to perform multiple increments or when your new state depends on the current state.
- 

--- 

### 1. `useCallback`
- **Purpose**: `useCallback` is a React Hook that caches a function definition between re-renders, which optimizes performance by preventing unnecessary re-creations of the same function.
- **Why Use It**: When passing functions to child components or as dependencies in other hooks, React will often re-create these functions on each render, which can cause unnecessary re-renders and performance issues. `useCallback` helps by memoizing (caching) the function so that it’s not recreated unless one of its dependencies changes.
  
  **Syntax**:
  ```javascript
  const cachedFunction = useCallback(fn, [dependencies]);
  ```

- **Example**:
  ```javascript
  import React, { useState, useCallback } from 'react';

  function ExampleComponent() {
    const [count, setCount] = useState(0);

    const incrementCount = useCallback(() => {
      setCount(count + 1);
    }, [count]);

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Increment</button>
      </div>
    );
  }
  ```

- **Practical Use Case**:
  In a scenario where multiple components (such as a password generator with different toggles) need to call the same function, `useCallback` prevents the function from being redefined on each render, thereby improving efficiency. Only when the dependencies change (e.g., selected length, include numbers, etc.) does React re-create the function.


### 2. `useEffect`
- **Purpose**: `useEffect` is a React Hook that lets you perform side effects in function components. It runs after every render, unless you specify dependencies that control when it should re-run.
- **Why Use It**: Common use cases for `useEffect` include data fetching, updating the DOM, and setting up subscriptions or event listeners. It replaces the lifecycle methods `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

  **Syntax**:
  ```javascript
  useEffect(() => {
    // code to run after component mounts or updates
    return () => {
      // cleanup code to run on unmount
    };
  }, [dependencies]);
  ```

- **Example**:
  ```javascript
  import React, { useState, useEffect } from 'react';

  function TimerComponent() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(interval); // cleanup on unmount
    }, []); // empty dependency array means this runs only once on mount

    return <div>Timer: {seconds}s</div>;
  }
  ```

- **Practical Use Case**:
  You might use `useEffect` to re-run certain code every time a dependency changes. For instance, in a password generator, you could run a `generatePassword` function every time a user changes the password length, toggles a button, or selects options. Setting these dependencies in the `useEffect` array ensures it re-runs only when necessary.



### 3. `useRef`
- **Purpose**: `useRef` is a hook that provides a way to access and manipulate a DOM element or to store any mutable value that persists across renders. Unlike `useState`, changing a `useRef` value doesn’t trigger a re-render.
- **Why Use It**: `useRef` is useful for storing a reference to a DOM node (e.g., focusing an input field) or storing a mutable value that shouldn’t cause re-renders when updated (like a timer ID or a previous value).

  **Syntax**:
  ```javascript
  const refContainer = useRef(initialValue);
  ```

- **Example**:
  ```javascript
  import React, { useRef, useEffect } from 'react';

  function FocusInputComponent() {
    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus(); // Focus on the input when component mounts
    }, []);

    return <input ref={inputRef} type="text" placeholder="Focus on me!" />;
  }
  ```

- **Practical Use Case**:
  For example, in a form, `useRef` could be used to programmatically focus an input field or store the previous state of a variable that doesn’t need to trigger re-renders. It's also useful in handling mutable values across renders without causing additional renders.

---

# Custom Hooks
In React, custom hooks allow you to extract and reuse logic across multiple components, making your code more modular and easier to maintain. Here's a step-by-step guide on creating a custom hook, with an example.

### 1. Setting Up the Custom Hook Folder
- In the `src` folder of your React project, create a new folder named `Hooks` (or `hooks`).
- Inside this folder, create a file for your custom hook. The file name should start with "use" to follow React's convention (e.g., `useCurrencyInfo.js`).

### 2. Creating the Custom Hook
A custom hook is simply a JavaScript function that uses built-in React hooks (e.g., `useState`, `useEffect`, etc.). Custom hooks should start with `use` as a naming convention, which also ensures they follow React’s hook rules.

### Example: `useCurrencyInfo` Custom Hook

Let's create a custom hook that fetches currency information. This hook could, for example, fetch the current exchange rates.

**`src/Hooks/useCurrencyInfo.js`:**
```javascript
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!currency) return;

        const fetchCurrencyInfo = async () => {
            const url = `https://exchangerate-api.p.rapidapi.com/rapid/latest/${currency}`;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': "5cb0d9e17cmsh4dea313c6f9d047p1c599fjsndf304ac8b8dd", 
                    'x-rapidapi-host': 'exchangerate-api.p.rapidapi.com'
                }
            };
            
            try {
                const response = await fetch(url, options);
                if (!response.ok) throw new Error('Network response was not ok');
                const result = await response.json();
                console.log(result.rates)
                setData(result.rates || {});
            } catch (error) {
                console.error("Fetch error:", error.message);
                setError(error.message);
            }
        };

        fetchCurrencyInfo();
    }, [currency]);

    return { data, error };
}

export default useCurrencyInfo; // Default export

```

### 3. Using the Custom Hook in a Component

Once you’ve created your custom hook, you can use it in any component just like a built-in React hook.

**Example Component Using `useCurrencyInfo`:**

```javascript
import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './Hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState("");
  const [to, toSet] = useState("INR");
  const [from, setFrom] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { data: currencyInfo, error } = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    toSet(from);
    setFrom(to);
  };

  const convert = () => {
    if (currencyInfo[from] && currencyInfo[to]) {
      const fromRate = currencyInfo[from];
      const toRate = currencyInfo[to];
  
      // Convert amount based on the rates
      const conversionRate = toRate / fromRate;
      setConvertedAmount(amount * conversionRate);
    } else {
      // If no rate is found, set converted amount to 0
      setConvertedAmount(0);
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://www.istockphoto.com/photo/businesswoman-using-digital-tablet-with-holding-bar-graph-gm1225058659-360453706?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ftrading&utm_medium=affiliate&utm_source=unsplash&utm_term=trading%3A%3Aaffiliate-collections%3Aa')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOption={options}
                onAmountChange={(value) => setAmount(value)}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChange={(currency) => toSet(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

```

### Key Points
1. **Naming Convention**: Start custom hook names with `use` (e.g., `useCurrencyInfo`) to follow React conventions and ensure that React treats it as a hook.
2. **Logic Reusability**: Custom hooks allow you to reuse logic across components without duplicating code.
3. **Return Values**: Custom hooks can return any value(s) you need in your component, including multiple values via an object.

### Benefits of Custom Hooks
- **Code Organization**: Keeps components clean and focused on rendering by moving logic to the hook.
- **Reusability**: Centralizes logic that can be used across multiple components.
- **Testing**: Makes it easier to test isolated logic

---

# React Router
React Router is an external library for React applications, allowing for efficient, client-side navigation without reloading the entire page. Here’s a breakdown of its key components and usage:

### 1. Basic Routing with React Router
React Router is installed separately (`npm install react-router-dom`) and provides several key components like `Link`, `NavLink`, `Route`, and `Outlet`.

- **Link**: Replaces the `<a>` tag in HTML to navigate between routes without page reload. In `Link`, use `to="/"` instead of `href` to set the target path.
  
- **NavLink**: Similar to `Link`, but allows additional styling based on the active route. For example:
  ```jsx
  <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-700" : "text-gray-700"}>
    Home
  </NavLink>
  ```

### 2. Setting Up Routes
Set up your routes in `main.jsx` or a similar entry point file. Use `createBrowserRouter` and `RouterProvider` for route configuration and rendering.

**Example in `main.jsx`**:
```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'user/:userid', element: <User /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
```

### 3. Layout and Outlet
For components like headers or footers that should remain on the page across different routes, use the `Outlet` component to render child routes dynamically within a layout.

**Example in `Layout.jsx`**:
```jsx
import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />  {/* Renders the current route's component */}
      <Footer />
    </div>
  );
}

export default Layout;
```

### 4. Dynamic Route Parameters with `useParams`
React Router’s `useParams` hook allows you to access dynamic segments in a route, such as user IDs.

**Example of using `useParams` in `User.jsx`**:
```jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { userid } = useParams();
  return <div>User ID: {userid}</div>;
}

export default User;
```

### 5. Loading Data with Loaders
Loaders in React Router allow you to fetch data before rendering a component. This data can then be accessed via the `useLoaderData` hook.

**Example of using a loader function**:
```jsx
import { useLoaderData } from 'react-router-dom';

export const GithubInfoLoader = async () => {
  const url = 'https://api.github.com/users/thelite5419';
  const res = await fetch(url);
  return res.json();
};

function UserProfile() {
  const data = useLoaderData();
  return <div>User: {data.name}</div>;
}

// Use the loader in your route setup:
<Route path="/user-profile" element={<UserProfile />} loader={GithubInfoLoader} />
```

---

# Context API
The Context API in React is a powerful way to manage and share state globally, avoiding "prop drilling" — the process of passing props through many nested components. Here’s a guide on how to implement and use the Context API effectively, especially in cases where a deeply nested component needs access to certain data.

### Why Use Context API?
In a typical scenario, you might need to pass props through multiple components to reach a deeply nested child. Context API simplifies this by allowing components to access shared data without passing it explicitly through each level.

For example:
```jsx
<RightSide title="thelite">
  <TopSide title="thelite">
    <Card title="thelite" />
  </TopSide>
</RightSide>
```
To avoid passing `title` through `RightSide` and `TopSide`, you can use the Context API to make `title` globally accessible.

## prop passing to the components 
![Image Alt Text](https://github.com/thelite5419/React/blob/main/propPassing.png)

## prop Drilling 
![Image Alt Text](https://github.com/thelite5419/React/blob/main/propDrilling.png)


### Setting Up Context API

1. **Create a Context Folder**:
   Organize your context-related files by creating a `context` folder in your `src` directory.

2. **Create a Context File**:
   Define your context by creating a file (e.g., `UserContext.js`).

   ```javascript
   import React from 'react';

   const UserContext = React.createContext();

   export default UserContext;
   ```

3. **Create a Context Provider Component**:
   The provider component wraps the part of the component tree that needs access to the context data. Create a file, e.g., `UserContextProvider.jsx`, to define this provider.

   ```javascript
   import React, { useState } from 'react';
   import UserContext from './UserContext';

   const UserContextProvider = ({ children }) => {
     const [user, setUser] = useState(null); // Define the state you want to share

     return (
       <UserContext.Provider value={{ user, setUser }}>
         {children}
       </UserContext.Provider>
     );
   };

   export default UserContextProvider;
   ```

   Here, `UserContext.Provider` provides `user` and `setUser` to any component that needs access.

4. **Wrap Your Application with the Provider**:
   In your main application file (e.g., `App.jsx` or `index.js`), wrap the component tree with `UserContextProvider`.

   ```javascript
   import React from 'react';
   import ReactDOM from 'react-dom';
   import App from './App';
   import UserContextProvider from './context/UserContextProvider';

   ReactDOM.render(
     <UserContextProvider>
       <App />
     </UserContextProvider>,
     document.getElementById('root')
   );
   ```

### Using Context in Components
To use the context data in a component, you can use the `useContext` hook.

1. **Import and Use Context**:
   In the component that needs access to the `user` data, import `useContext` and `UserContext`.

   ```javascript
   import React, { useContext } from 'react';
   import UserContext from './context/UserContext';

   const Card = () => {
     const { user } = useContext(UserContext); // Access user data

     return <h1>User: {user ? user.name : 'Guest'}</h1>;
   };

   export default Card;
   ```

2. **Updating Context Data**:
   Components that need to update context data can call `setUser`.

   ```javascript
   const Login = () => {
     const { setUser } = useContext(UserContext);

     const handleLogin = () => {
       setUser({ name: 'thelite' }); // Update the context value
     };

     return <button onClick={handleLogin}>Login</button>;
   };
   ```

### Benefits of Context API
- **Avoids Prop Drilling**: No need to pass props through each nested component.
- **Shared State**: Easily share data and functions across multiple components.
- **Global State Management**: Works well for managing global states in small to medium applications.

### Alternatives to Context API
For complex applications with extensive state management needs, consider alternatives like:
- **Redux**: Provides a more structured way of managing global state.
- **Redux Toolkit**: Simplifies Redux setup with pre-built utilities.
- **Zustand**: A lightweight library for state management with a simple API.

---

# Redux-React-Toolkit

Redux Toolkit is a modern approach to managing global state in React applications, addressing the complexity of traditional Redux setups. It simplifies state management with an opinionated, efficient, and developer-friendly toolset.

### Key Concepts of Redux Toolkit
1. **Store**:  
   The centralized state container that holds the global state for your application. Components interact with the store to get or update the state.

2. **Reducers**:  
   Functions that define how the state is updated in response to actions. Redux Toolkit introduces slices, which group related reducers and state logic.

3. **Actions**:  
   Payloads of information that describe changes to the state.

4. **Selectors**:  
   Functions used to retrieve specific pieces of state from the store.

5. **Dispatch**:  
   Used to send actions to the store to update the state.


### Why Redux Toolkit?
- **Simplified Setup**: Reduces boilerplate code compared to traditional Redux.
- **Built-in Best Practices**: Opinionated defaults make state management cleaner and more predictable.
- **Powerful APIs**: Includes tools like `createSlice`, `createAsyncThunk`, and `nanoid` to handle common use cases.
- **Scalability**: Works well for both small and large applications.

### Setting Up Redux Toolkit

1. **Installation**:
   ```bash
   npm install @reduxjs/toolkit react-redux
   ```

2. **Configure the Store**:
   Create a `store.js` file to set up the store:
   ```javascript
   import { configureStore } from '@reduxjs/toolkit';
   import todoReducer from './todoSlice';

   export const store = configureStore({
     reducer: {
       todo: todoReducer, // Combine slices here
     },
   });
   ```
### Creating a Slice
Slices combine actions and reducers into a single file for better organization.

1. **Define a Slice**:
   Create a `todoSlice.js` file:
   ```javascript
   import { createSlice, nanoid } from '@reduxjs/toolkit';

   const initialState = {
     todos: [{ id: 1, text: 'Sample Todo' }],
   };

   const todoSlice = createSlice({
     name: 'todo',
     initialState,
     reducers: {
       addTodo: (state, action) => {
         const newTodo = {
           id: nanoid(),
           text: action.payload,
         };
         state.todos.push(newTodo);
       },
       removeTodo: (state, action) => {
         state.todos = state.todos.filter((todo) => todo.id !== action.payload);
       },
     },
   });

   export const { addTodo, removeTodo } = todoSlice.actions;
   export default todoSlice.reducer;
   ```

2. **Reducer Explanation**:
   - `addTodo`: Adds a new todo item to the list using `nanoid` for a unique ID.
   - `removeTodo`: Filters out a todo based on its ID.

### Using Redux in Components

1. **Wrap Application with `Provider`**:
   In `main.jsx`, use `Provider` to give the app access to the Redux store:
   ```javascript
   import React from 'react';
   import ReactDOM from 'react-dom';
   import { Provider } from 'react-redux';
   import { store } from './store';
   import App from './App';

   ReactDOM.render(
     <Provider store={store}>
       <App />
     </Provider>,
     document.getElementById('root')
   );
   ```

2. **Dispatch Actions**:
   Use `useDispatch` to update the store:
   ```javascript
   import React, { useState } from 'react';
   import { useDispatch } from 'react-redux';
   import { addTodo } from './todoSlice';

   const TodoInput = () => {
     const [input, setInput] = useState('');
     const dispatch = useDispatch();

     const handleAdd = () => {
       dispatch(addTodo(input)); // Dispatch action with payload
       setInput(''); // Reset input field
     };

     return (
       <div>
         <input value={input} onChange={(e) => setInput(e.target.value)} />
         <button onClick={handleAdd}>Add Todo</button>
       </div>
     );
   };

   export default TodoInput;
   ```

3. **Access State**:
   Use `useSelector` to retrieve state from the store:
   ```javascript
   import React from 'react';
   import { useSelector } from 'react-redux';

   const TodoList = () => {
     const todos = useSelector((state) => state.todo.todos); // Access todos state

     return (
       <ul>
         {todos.map((todo) => (
           <li key={todo.id}>{todo.text}</li>
         ))}
       </ul>
     );
   };

   export default TodoList;
   ```

### Benefits of Redux Toolkit Over Context API
- **Predictable Data Flow**: Redux enforces a strict structure with actions and reducers.
- **Better Tooling**: Includes the Redux DevTools extension for debugging.
- **Performance**: Optimized for large applications with more complex state interactions.
- **Advanced Features**: Built-in support for middleware, async actions (`createAsyncThunk`), and more.

---

