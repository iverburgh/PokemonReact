import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

// components
import Header from "./components/Header/";
import Footer from "./components/Footer/";

// Pages
import Home from "./pages/Home";

const App: React.FC = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Route exact={true} path="/" component={Home} />
      {/* <Route path="/toetsen" component={Toetsen} />*/}
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
