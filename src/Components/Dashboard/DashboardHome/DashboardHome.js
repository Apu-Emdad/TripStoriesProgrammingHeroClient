import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams,
//   useRouteMatch,
// } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Admin from "../Admin/Admin";
import User from "../User/User";

const DashboardHome = (props) => {
  const { isAdmin } = props;
  const { user } = useAuth();
  // console.log(isAdmin);

  const [show, setShow] = useState(true);
  const { logOut } = useAuth();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="text-start   bg-secondary row ">
        <div className="col-4">
          <Button variant="primary" onClick={handleShow}>
            Manage
            <i class="fas fa-chevron-right ms-1"></i>
            <i class="fas fa-chevron-right"></i>
          </Button>
        </div>
        <div className="col-8 " style={{}}>
          <h4 className="text-light px-2  text-end">My Dashboard</h4>
        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{user.displayName}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {!isAdmin && <User handleClose={handleClose}></User>}
          {isAdmin && <Admin handleClose={handleClose}></Admin>}
          <button className="btn btn-primary py-1 px-3 my-3" onClick={logOut}>
            Log Out
          </button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default DashboardHome;
