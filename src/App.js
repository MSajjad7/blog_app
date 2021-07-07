import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Createblog from "./Createblog";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

//exact means to exact match the path 
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Createblog />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            
            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
