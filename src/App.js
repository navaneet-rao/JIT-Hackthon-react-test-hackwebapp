import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Aboutus from "./components/pages/Aboutus";

function App() {
  return (
    <div className="App">
      <header className="App-header header jumbotron">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact component={<Home />} />
            <Route path="/services" component={<Aboutus />} />
            <Route path="/products" component={<Products />} />
            <Route path="/sign-up" component={<SignUp />} />
          </Routes>
        </Router>
      </header>
      <body className="container-fluid bg-body">
        <div className="container">
          <h1 className="h1">About The College</h1>
          <h2>
            Jyothy Institute of Technology under the governance of Jyothy
            Charitable Trust which is headquartered at Bengaluru mainly focuses
            on delivering quality education that equips students for life and
            career. We offer Undergraduate, Postgraduate and Research Programmes
            in various disciplines. Focused teaching facilities coupled with
            practical and forward-thinking programmes lend a hand to students
            throughout their academic period. A significant amount of emphasis
            is given for extracurricular activities through various clubs,
            technical chapters, sports, and cultural activities.
          </h2>
        </div>
      </body>
      <footer className="footer">footer here</footer>
    </div>
  );
}

export default App;
