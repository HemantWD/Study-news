import React from "react";

const Headers = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/business">
          Study News
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/business">
                Business
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/entertainment">
                Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/general">
                General
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/health">
                Health
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/science">
                Science
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sports">
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/technology">
                Technology
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Headers;
