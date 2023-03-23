import React from 'react';
// import redbus_logo from '../../Images/redbus_logo.png'
// import nav_down_arrow from '../../Images/down_Arrow-removebg-preview.png'
// import user_nav_img from '../../Images/user.png'
import "../../styles/Nav.css";
function Nav() {
    return (
      <>
        <nav className="redbus_nav">
          <nav className="navbar navbar-expand-sm bg-danger navbar-dark fixed-top">
            <div className="container">
              <a className="navbar-brand" href="">
                <img
                  src="https://i.postimg.cc/zXFNsGkg/redbus-white.png"
                  alt="redBus"
                  width="60px"
                />
              </a>

              {/*   Navbar links    */}
              <div className="collapse navbar-collapse" id="menu-nav">
                {/*   Left-aligned nav (default)    */}
                <div>
                  <ul className="navbar-nav">
                    <li className="nav-item hover_effect">
                      <a className="nav-link text-white text-uppercase" href="">
                        Bus Tickets
                      </a>
                    </li>
                    <li className="nav-item hover_effect">
                      <a className="nav-link text-white text-uppercase" href="">
                        Hotels
                      </a>
                    </li>
                    <li className="nav-item hover_effect">
                      <a className="nav-link text-white text-uppercase" href="">
                        Bus Hire
                      </a>
                    </li>
                    <li className="nav-item hover_effect">
                      <a className="nav-link text-white text-uppercase" href="">
                        Pilgrimages
                      </a>
                    </li>
                  </ul>
                </div>

                {/*   Right-aligned nav    */}
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="menu-nav"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item hover_effect">
                      <a className="nav-link text-white" href="">
                        Help
                      </a>
                    </li>
                    <li className="nav-item dropdown hover_effect">
                      <a
                        className="nav-link dropdown-toggle text-white"
                        href=""
                        data-toggle="dropdown"
                      >
                        Manage Booking
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="">
                          Link 1
                        </a>
                        <a className="dropdown-item" href="">
                          Link 2
                        </a>
                        <a className="dropdown-item" href="">
                          Link 3
                        </a>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle text-white"
                        href=""
                        data-toggle="dropdown"
                      >
                        <i className="fas fa-user-circle"></i>
                      </a>
                      <div className="dropdown-menu hover_effect">
                        <a className="dropdown-item " href="">
                          Sign In/Sign Up
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </nav>
      </>
    );
  }
  
  export default Nav;
  