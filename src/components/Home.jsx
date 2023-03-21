import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Home() {
  return (
    <div className="homeStyle">
      <div id="fh5co-offcanvas">
        <a
          href="./Home.jsx"
          className="fh5co-close-offcanvas js-fh5co-close-offcanvas"
        >
          <span>
            <i className="icon-cross3"></i> <span>Close</span>
          </span>
        </a>
        <div className="fh5co-bio">
          <figure>
            <img
              src="../../public/assets/images/person1.jpg"
              alt="Persone Scraper"
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
        </div>

        <div className="fh5co-menu">
          <div className="fh5co-box">
            <h3 className="heading">Categories</h3>
            <ul>
              <li>
                <a href="./Home.jsx">Travel</a>
              </li>
              <li>
                <a href="./Home.jsx">Style</a>
              </li>
              <li>
                <a href="./Home.jsx">Photography</a>
              </li>
              <li>
                <a href="./Home.jsx">Food &amp; Drinks</a>
              </li>
              <li>
                <a href="./Home.jsx">Culture</a>
              </li>
            </ul>
          </div>
          <div className="fh5co-box">
            <h3 className="heading">Search</h3>
            <form action="#">
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
      {/* <!-- END #fh5co-offcanvas --> */}
      <Header />
      {/* <!-- END #fh5co-header --> */}
      <div className="container-fluid">
        <div className="row fh5co-post-entry">
          <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_1.jpg"
                  alt="souvenir"
                  className="img-responsive"
                />
              </a>
            </figure>
            <span className="fh5co-meta">
              <a href="./Single.jsx">Food &amp; Drink</a>
            </span>
            <h2 className="fh5co-article-title">
              <a href="./Single.jsx">We Eat and Drink All Night</a>
            </h2>
            <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_2.jpg"
                  alt="souvenir"
                  className="img-responsive"
                />
              </a>
            </figure>
            <span className="fh5co-meta">
              <a href="./Single.jsx">Food &amp; Drink</a>
            </span>
            <h2 className="fh5co-article-title">
              <a href="./Single.jsx">Beef Steak at Guatian Restaurant</a>
            </h2>
            <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <div className="clearfix visible-xs-block"></div>
          <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_3.jpg"
                  alt="souvenir"
                  className="img-responsive"
                />
              </a>
            </figure>
            <span className="fh5co-meta">
              <a href="./Single.jsx">Travel</a>,<a href="./Single.jsx">Style</a>
            </span>
            <h2 className="fh5co-article-title">
              <a href="./Single.jsx">An Overlooking River at the East Cost</a>
            </h2>
            <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_4.jpg"
                  alt="souvenir"
                  className="img-responsive"
                />
              </a>
            </figure>
            <span className="fh5co-meta">
              <a href="./Single.jsx">Travel</a>,<a href="./Single.jsx">Style</a>
            </span>
            <h2 className="fh5co-article-title">
              <a href="./Single.jsx">A Wildlife In The Mountain of India</a>
            </h2>
            <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <div className="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>
          <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_5.jpg"
                  alt="cutest kitten"
                  className="img-responsive"
                />
              </a>
            </figure>
            <span className="fh5co-meta">
              <a href="./Single.jsx">Photography</a>
            </span>
            <h2 className="fh5co-article-title">
              <a href="./Single.jsx">We Took A Photo</a>
            </h2>
            <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_6.jpg"
                  alt="cutest kitten"
                  className="img-responsive"
                />
              </a>
            </figure>
            <span className="fh5co-meta">
              <a href="./Single.jsx">Travel</a>,<a href="./Single.jsx">Style</a>
            </span>
            <h2 className="fh5co-article-title">
              <a href="./Single.jsx">A Modernize Huge and Beautiful Building</a>
            </h2>
            <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <div className="clearfix visible-xs-block"></div>
          <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_7.jpg"
                  alt="cutest kitten"
                  className="img-responsive"
                />
              </a>
            </figure>
            <span className="fh5co-meta">
              <a href="./Single.jsx">Food &amp; Drinks</a>
            </span>
            <h2 className="fh5co-article-title">
              <a href="./Single.jsx">
                Enjoying the Native Juice Drink in Brazil
              </a>
            </h2>
            <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_8.jpg"
                  alt="cutest kitten"
                  className="img-responsive"
                />
              </a>
            </figure>
            <span className="fh5co-meta">
              <a href="./Single.jsx">Travel</a>,<a href="./Single.jsx">Style</a>
            </span>
            <h2 className="fh5co-article-title">
              <a href="./Single.jsx">Boat Travel in The Vietnam River</a>
            </h2>
            <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <div className="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>

          <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_1.jpg"
                  alt="cutest kitten"
                  className="img-responsive"
                />
              </a>
            </figure>
            <span className="fh5co-meta">
              <a href="./Single.jsx">Food &amp; Drink</a>
            </span>
            <h2 className="fh5co-article-title">
              <a href="./Single.jsx">We Eat and Drink All Night</a>
            </h2>
            <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_2.jpg"
                  alt="cutest kitten"
                  className="img-responsive"
                />
              </a>
            </figure>
            <span className="fh5co-meta">
              <a href="./Single.jsx">Food &amp; Drink</a>
            </span>
            <h2 className="fh5co-article-title">
              <a href="./Single.jsx">Beef Steak at Guatian Restaurant</a>
            </h2>
            <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <div className="clearfix visible-xs-block"></div>
          <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_3.jpg"
                  alt="cutest kitten"
                  className="img-responsive"
                />
              </a>
            </figure>
            <span className="fh5co-meta">
              <a href="./Single.jsx">Travel</a>,<a href="./Single.jsx">Style</a>
            </span>
            <h2 className="fh5co-article-title">
              <a href="./Single.jsx">An Overlooking River at the East Cost</a>
            </h2>
            <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_4.jpg"
                  alt="cutest kitten"
                  className="img-responsive"
                />
              </a>
            </figure>
            <span className="fh5co-meta">
              <a href="./Single.jsx">Travel</a>,<a href="./Single.jsx">Style</a>
            </span>
            <h2 className="fh5co-article-title">
              <a href="./Single.jsx">A Wildlife In The Mountain of India</a>
            </h2>
            <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <div className="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>
          <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_5.jpg"
                  alt="cutest kitten"
                  className="img-responsive"
                />
              </a>
            </figure>
            <span className="fh5co-meta">
              <a href="./Single.jsx">Photography</a>
            </span>
            <h2 className="fh5co-article-title">
              <a href="./Single.jsx">We Took A Photo</a>
            </h2>
            <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_6.jpg"
                  alt="cutest kitten"
                  className="img-responsive"
                />
              </a>
            </figure>
            <span className="fh5co-meta">
              <a href="./Single.jsx">Travel</a>,<a href="./Single.jsx">Style</a>
            </span>
            <h2 className="fh5co-article-title">
              <a href="./Single.jsx">A Modernize Huge and Beautiful Building</a>
            </h2>
            <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <div className="clearfix visible-xs-block"></div>
          <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_7.jpg"
                  alt="cutest kitten"
                  className="img-responsive"
                />
              </a>
            </figure>
            <span className="fh5co-meta">
              <a href="./Single.jsx">Food &amp; Drinks</a>
            </span>
            <h2 className="fh5co-article-title">
              <a href="./Single.jsx">
                Enjoying the Native Juice Drink in Brazil
              </a>
            </h2>
            <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_8.jpg"
                  alt="cutest kitten"
                  className="img-responsive"
                />
              </a>
            </figure>
            <span className="fh5co-meta">
              <a href="./Single.jsx">Travel</a>,<a href="./Single.jsx">Style</a>
            </span>
            <h2 className="fh5co-article-title">
              <a href="./Single.jsx">Boat Travel in The Vietnam River</a>
            </h2>
            <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <div className="clearfix visible-xs-block"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
