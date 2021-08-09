import React from "react";
import InputForm from "./InputForm/InputForm";
import NavBar from "./NavBar/NavBar";
import { Route } from "react-router-dom";
import SearchPage from "./SearchPage/SearchPage";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="App">
        <Route exact path="/" component={InputForm} />
        <Route exact path="/search" component={SearchPage} />
      </main>
    </>
  );
}

export default App;
