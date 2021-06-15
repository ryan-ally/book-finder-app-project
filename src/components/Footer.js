import React from "react";


export default class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <p>
          Created with{" "}
          <img id="footerLogo" src="logo.svg" alt="logo"></img> by:
          Ryan Hanrahan
          <br />© All rights reserved
        </p>
      </footer>
    );
  }
}