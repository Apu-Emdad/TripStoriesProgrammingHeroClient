import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import AuthProvider from "./Components/Context/AuthProvider";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home/Home";
import BlogDetail from "./Components/Home/BlogDetail/BlogDetail";
import Login from "./Components/Login/Login/Login";
import Notfound from "./Components/Notfound/Notfound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Purchase from "./Components/Purchase/Purchase";
import Register from "./Components/Register/Register";
import Blogs from "./Components/Home/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/blogs/:blogId">
              <BlogDetail></BlogDetail>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            {/* private route  */}
            <Route path="/purchase/:purchaseId">
              <Purchase></Purchase>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
