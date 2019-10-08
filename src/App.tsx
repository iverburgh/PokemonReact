import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

// components
import Header from "./components/Header/";
import Footer from "./components/Footer/";

// Pages
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";

const App: React.FC = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Route exact={true} path="/" component={Home} />
      <Route path="/pokedex" component={Pokedex} />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
