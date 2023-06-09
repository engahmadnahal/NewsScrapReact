import React from "react";
import { Link } from "react-router-dom";
import person_1 from "../images/person1.jpg";

function Header() {
  return (
    <>
      {/* <!--  #fh5co-offcanvas --> */}
      <div id="fh5co-offcanvas">
        <a href="/" className="fh5co-close-offcanvas js-fh5co-close-offcanvas">
          <span>
            <i className="icon-cross3"></i> <span>Close</span>
          </span>
        </a>
        <div className="fh5co-bio">
          <figure>
            <img
              src={person_1}
              alt="GoalSports News: Scraping"
              className="img-responsive"
              style={{ height: "20rem" }}
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
              <a href="https://twitter.com/CNN?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                <i className="icon-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/cnn/">
                <i className="icon-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/foxnews/?hl=en">
                <i className="icon-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="fh5co-menu">
          <div className="fh5co-box">
            <h3 className="heading">Main Categories</h3>
            <ul>
              <li>
                <Link to="/MainCategorieNews">Football</Link>
              </li>
              <li>
                <Link to="/MainCategorieNews">Tennis</Link>
              </li>
              <li>
                <Link to="/MainCategorieNews">Basketball</Link>
              </li>
              <li>
                <Link to="/MainCategorieNews">Cricket</Link>
              </li>
              <li>
                <Link to="/MainCategorieNews">Motorsports</Link>
              </li>
              <li>
                <Link to="/MainCategorieNews">NBA</Link>
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
            <a href="/" className="js-fh5co-nav-toggle fh5co-nav-toggle">
              <i></i>
            </a>
            <ul className="fh5co-social">
              <li>
                <a href="https://twitter.com/CNN?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                  <i className="icon-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/cnn/">
                  <i className="icon-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/foxnews/?hl=en">
                  <i className="icon-instagram"></i>
                </a>
              </li>
            </ul>
            <div className="col-lg-12 col-md-12 text-center">
              <h1 id="fh5co-logo" className="logo-size">
                <Link to="/">
                  GoalSports <sup>News</sup>
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
