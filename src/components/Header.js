import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <h1 className="Header">
        <img id="logoHeader" src='logo.svg' alt="logo"></img>
        <p>React Book Library</p>
      </h1>
    );
  }
}