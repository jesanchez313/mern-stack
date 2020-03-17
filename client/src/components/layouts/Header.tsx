import React, { useState, useContext } from "react";
import { Collapse } from "reactstrap";
import useRouter from "useRouter";
import { Store } from "global/Store";
import Swal from "sweetalert2";

const Menu: React.FC = () => {
  const { history } = useRouter();
  const {
    state: { user },
    dispatch
  } = useContext(Store);

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  const goHome = () => {
    window.localStorage.removeItem("creating");
    history.push("/");
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("creating");
    window.localStorage.removeItem("user");
    setCollapsed(!collapsed);
    Swal.fire("Logout", "Successfully logged out", "success");
  };

  return (
    <header>
      <Collapse className="bg-dark pt-4" isOpen={!collapsed} navbar>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {user ? (
                <>
                  <h4 className="text-white">Log Out</h4>
                  <p className="text-muted">
                    If you want to log out you can click on the following
                    button, but remember, to create a profile you will reopen
                    the session.
                  </p>
                  <button onClick={handleLogout} className="btn btn-danger">
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <h4 className="text-white">Guest</h4>
                  <p className="text-muted">
                    To create a profile you must enter with a github account.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </Collapse>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          <span
            onClick={goHome}
            className="navbar-brand d-flex align-items-center u-cursor-pointer"
          >
            {user ? (
              <img
                className="mr-2"
                width="25"
                height="25"
                src={user.photos[0].value}
                alt="home"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                aria-hidden="true"
                className="mr-2"
                viewBox="0 0 24 24"
                focusable="false"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            )}

            <strong>{user ? user.username : "Guest"}</strong>
          </span>
          <button
            onClick={toggleNavbar}
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Menu;
