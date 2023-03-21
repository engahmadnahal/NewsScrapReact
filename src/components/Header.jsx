function Header() {
  return (
    <header id="fh5co-header">
      <div className="container-fluid">
        <div className="row">
          <a href="./Home.jsx" className="js-fh5co-nav-toggle fh5co-nav-toggle">
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
  );
}
export default Header;
