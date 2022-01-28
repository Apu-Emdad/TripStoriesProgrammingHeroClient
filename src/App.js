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
import Review from "./Components/Review/Review";
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

            <PrivateRoute path="/blogs/:blogId">
              <BlogDetail></BlogDetail>
            </PrivateRoute>

            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            {/* private route  */}
            <PrivateRoute path="/review/:blogId">
              <Review></Review>
            </PrivateRoute>
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
