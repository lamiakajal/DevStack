# DevStack

DevStack is a curated platform for developers to explore frontend, backend, database, and tooling technologies side-by-side and assemble their customized development stack.

## Live Demo

- **Live Site:** [(https://dev-stack-peach-chi.vercel.app)]
- **GitHub Live Site:** [(https://lamiakajal.github.io/DevStack/)]

## Technologies Used

- **Frontend Framework:** React (with TypeScript)
- **Bundler:** Vite
- **Styling:** Tailwind CSS
- **Notifications:** React Toastify
- **Icons:** React Icons / Custom SVG

## Key Features

1. **Interactive Stack Builder:** Users can browse through various modern technologies and add their preferred choices to a live stack sidebar.
2. **Duplicate Prevention & Stack Management:** Prevents adding the same technology twice with toast warning alerts, and allows single-item or bulk stack removal.
3. **Fully Responsive Design:** Optimized for all screen sizes (mobile, tablet, and desktop) with smooth loading states and clean visual hierarchy.

---

## React Concepts & Questions

### 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It is a syntax extension that allows us to write HTML-like elements directly inside JavaScript code. It makes writing and understanding UI structures easier and compiles down to standard JavaScript function calls (`React.createElement`).

### 2. What is the difference between props and state?

- **Props (Properties):** Read-only data passed from a parent component down to a child component. Props cannot be modified by the receiving child component.
- **State:** Internal, mutable data managed directly within a component. When state changes, React automatically re-renders the component to reflect the new data.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook allows functional components to declare and track local reactive state variables. In this project, `useState` is used in `TechnologySection.tsx` to manage:

- The list of fetched technologies (`technologies`)
- The user's selected stack list (`selectedStack`)
- The loading spinner status (`loading`)

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` handles side effects in functional components, such as API calls, subscriptions, or DOM updates. It was used here to execute a `fetch` request once when the component initially mounts (`[]` dependency array) to load data from `technologies.json` into state without triggering infinite re-renders.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React relies on the `key` prop to identify which list items have changed, been added, or removed. A unique key allows React's reconciliation process (virtual DOM diffing) to update only the specific elements that changed rather than re-rendering the whole list.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering is the practice of displaying different UI elements based on specific conditions or state values. In this project, it is used in `TechnologySection.tsx` to toggle between the empty state message and the list of selected cards:

```tsx
{
  selectedStack.length === 0 ? (
    <div className="border border-dashed ...">
      <p>No technology selected yet.</p>
    </div>
  ) : (
    <div className="space-y-4">...</div>
  );
}
```
