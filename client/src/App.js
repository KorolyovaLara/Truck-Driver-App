import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import { PrivateRoute } from "./components/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Runsheet from "./pages/Runhseet"
import Summary from "./pages/Summary";

const client = new ApolloClient({

  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  // LOCAL
   // uri: "http://localhost:3001/graphql",
  // HEROKU
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>

            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/profile" exact component={Profile} />
              <Route path="/runsheet" exact component={Runsheet} />
              <Route path="/summary" exact component={Summary} />
              <Route path="/about" exact component={About} />
              <Route path="/contact" exact component={Contact} />
            </Switch>
            <Footer />

      </Router>
    </ApolloProvider>
  );
}

export default App;
