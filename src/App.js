import React from 'react';
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <br />
   <hr />
   <br />
    <section>
      <form>
        <label>
          <span><strong>Search for books:</strong></span>
          <input
            type="search"
            placeholder="microservice, restful design, etc.,"
          />
          <button type="submit">Search</button>
        </label>
      </form>
    </section>
    <br />
      <List />
      <br />
      <hr />
    <Footer />
    </div>
  );
};

export default App;