import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />
}

function HelloWorldArticle() {
  return (<article>
    <h1> HelloWorldArticle </h1>
    <p> Article body : Today learing basics of React JS</p>
  </article>);
}
