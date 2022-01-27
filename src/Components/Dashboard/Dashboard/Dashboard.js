import React, { useEffect, useState } from "react";
// import { Button, Offcanvas } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import AddProduct from "../Admin/AddProduct/AddProduct";
import MakeAdmin from "../Admin/MakeAdmin/MakeAdmin";
import ManageOrders from "../Admin/ManageOrders/ManageOrders";
import ManageProduct from "../Admin/ManageProduct/ManageProduct";
import DashboardHome from "../DashboardHome/DashboardHome";
import MyOrder from "../User/MyOrder/MyOrder";
import Pay from "../User/Pay/Pay";
import Review from "../User/Review/Review";

const Dashboard = () => {
  const [show, setShow] = useState(true);
  const [users, setUsers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useAuth();
  // console.log(user.email);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    fetch("https://serene-retreat-28688.herokuapp.com/users/")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        const p = data.find((d) => d.email === user.email);
        // console.log(p);
        if (p?.role) {
          setIsAdmin(true);
        }
        // setUsers(data);
      });
  }, []);
  // console.log(user);

  return (
    <>
      <Router>
        <DashboardHome isAdmin={isAdmin}></DashboardHome>

        {!isAdmin && (
          <Switch>
            <Route exact path="/dashboard">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/dashboard/myorders">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/dashboard/pay">
              <Pay></Pay>
            </Route>
            <Route path="/dashboard/review">
              <Review></Review>
            </Route>
          </Switch>
        )}
        {/* admin route  */}
        {isAdmin && (
          <Switch>
            <Route exact path="/dashboard/">
              <ManageOrders></ManageOrders>
            </Route>
            <Route path="/dashboard/manageOrders">
              <ManageOrders></ManageOrders>
            </Route>
            <Route path="/dashboard/addProduct">
              <AddProduct></AddProduct>
            </Route>
            <Route path="/dashboard/manageproduct">
              <ManageProduct></ManageProduct>
            </Route>
            <Route path="/dashboard/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </Route>
          </Switch>
        )}
      </Router>
    </>
  );
};

export default Dashboard;

/* 
   <div>
      <div className="text-start my-2">
        <button
          className="btn btn-primary "
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          My Dashboard -->
        </button>
      </div>
      <div
        className="offcanvas  offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
            Colored with scrolling
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>
            Try scrolling the rest of the page to see this option in action.
          </p>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasWithBackdrop"
        aria-labelledby="offcanvasWithBackdropLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBackdropLabel">
            Offcanvas with backdrop
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>.....</p>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Backdrop with scrolling
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>
            Try scrolling the rest of the page to see this option in action.
          </p>
        </div>
      </div>
    </div>

*/
