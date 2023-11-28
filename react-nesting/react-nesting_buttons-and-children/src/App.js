import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>{"hello"}</Button>
      <Button>{"hello"}</Button>
      <Button>{"hello"}</Button>
      <Button>{"hello"}</Button>
    </main>
  );
}

function Button({children}) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
