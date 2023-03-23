import React from "react";

function Header() {
  return (
    <>
      {/* <!--  #fh5co-offcanvas --> */}
      <div id="fh5co-offcanvas">
        <a
          href="../App.js"
          className="fh5co-close-offcanvas js-fh5co-close-offcanvas"
        >
          <span>
            <i className="icon-cross3"></i> <span>Close</span>
          </span>
        </a>
        <div className="fh5co-bio">
          <figure>
            <img
              src={require("../images/person1.jpg")}
              alt="Magazine TM Scraping"
              className="img-responsive"
            />
          </figure>
          <h3 className="heading">About Me</h3>
          <h2>Emily Tran Le</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <ul className="fh5co-social">
            <li>
              <a href="../App.js">
                <i className="icon-twitter"></i>
              </a>
            </li>
            <li>
              <a href="../App.js">
                <i className="icon-facebook"></i>
              </a>
            </li>
            <li>
              <a href="../App.js">
                <i className="icon-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="fh5co-menu">
          <div className="fh5co-box">
            <h3 className="heading">Categories</h3>
            <ul>
              <li>
                <a href="./Single.jsx">Travel</a>
              </li>
              <li>
                <a href="../App.js">Style</a>
              </li>
              <li>
                <a href="../App.js">Photography</a>
              </li>
              <li>
                <a href="../App.js">Food &amp; Drinks</a>
              </li>
              <li>
                <a href="../App.js">Culture</a>
              </li>
            </ul>
          </div>
          <div className="fh5co-box">
            <h3 className="heading">Search</h3>
            <form action="../App.js">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type a keyword"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- s #fh5co-header --> */}
      <header id="fh5co-header">
        <div className="container-fluid">
          <div className="row">
            <a
              href="./Home.jsx"
              className="js-fh5co-nav-toggle fh5co-nav-toggle"
            >
              <i></i>
            </a>
            <ul className="fh5co-social">
              <li>
                <a href="./Home.jsx">
                  <i className="icon-twitter"></i>
                </a>
              </li>
              <li>
                <a href="./Home.jsx">
                  <i className="icon-facebook"></i>
                </a>
              </li>
              <li>
                <a href="./Home.jsx">
                  <i className="icon-instagram"></i>
                </a>
              </li>
            </ul>
            <div className="col-lg-12 col-md-12 text-center">
              <h1 id="fh5co-logo">
                <a href="./Home.jsx">
                  Magazine <sup>TM</sup>
                </a>
              </h1>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
