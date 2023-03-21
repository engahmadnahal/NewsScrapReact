import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Home() {
  return (
    <div className="homeStyle">
      <div id="fh5co-offcanvas">
        <a href="#" class="fh5co-close-offcanvas js-fh5co-close-offcanvas">
          <span>
            <i class="icon-cross3"></i> <span>Close</span>
          </span>
        </a>
        <div class="fh5co-bio">
          <figure>
            <img
              src="../../public/assets/images/person1.jpg"
              alt="Free HTML5 Bootstrap Template"
              class="img-responsive"
            />
          </figure>
          <h3 class="heading">About Me</h3>
          <h2>Emily Tran Le</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <ul class="fh5co-social">
            <li>
              <a href="{#}">
                <i class="icon-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="fh5co-menu">
          <div class="fh5co-box">
            <h3 class="heading">Categories</h3>
            <ul>
              <li>
                <a href="#">Travel</a>
              </li>
              <li>
                <a href="#">Style</a>
              </li>
              <li>
                <a href="#">Photography</a>
              </li>
              <li>
                <a href="#">Food &amp; Drinks</a>
              </li>
              <li>
                <a href="#">Culture</a>
              </li>
            </ul>
          </div>
          <div class="fh5co-box">
            <h3 class="heading">Search</h3>
            <form action="#">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
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
      <div class="container-fluid">
        <div class="row fh5co-post-entry">
          <article class="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_1.jpg"
                  alt="souvenir"
                  class="img-responsive"
                />
              </a>
            </figure>
            <span class="fh5co-meta">
              <a href="./Single.jsx">Food &amp; Drink</a>
            </span>
            <h2 class="fh5co-article-title">
              <a href="./Single.jsx">We Eat and Drink All Night</a>
            </h2>
            <span class="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <article class="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_2.jpg"
                  alt="souvenir"
                  class="img-responsive"
                />
              </a>
            </figure>
            <span class="fh5co-meta">
              <a href="./Single.jsx">Food &amp; Drink</a>
            </span>
            <h2 class="fh5co-article-title">
              <a href="./Single.jsx">Beef Steak at Guatian Restaurant</a>
            </h2>
            <span class="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <div class="clearfix visible-xs-block"></div>
          <article class="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_3.jpg"
                  alt="souvenir"
                  class="img-responsive"
                />
              </a>
            </figure>
            <span class="fh5co-meta">
              <a href="./Single.jsx">Travel</a>,<a href="./Single.jsx">Style</a>
            </span>
            <h2 class="fh5co-article-title">
              <a href="./Single.jsx">An Overlooking River at the East Cost</a>
            </h2>
            <span class="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <article class="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_4.jpg"
                  alt="souvenir"
                  class="img-responsive"
                />
              </a>
            </figure>
            <span class="fh5co-meta">
              <a href="./Single.jsx">Travel</a>,<a href="./Single.jsx">Style</a>
            </span>
            <h2 class="fh5co-article-title">
              <a href="./Single.jsx">A Wildlife In The Mountain of India</a>
            </h2>
            <span class="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <div class="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>
          <article class="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_5.jpg"
                  alt="photo"
                  class="img-responsive"
                />
              </a>
            </figure>
            <span class="fh5co-meta">
              <a href="./Single.jsx">Photography</a>
            </span>
            <h2 class="fh5co-article-title">
              <a href="./Single.jsx">We Took A Photo</a>
            </h2>
            <span class="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <article class="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_6.jpg"
                  alt="photo"
                  class="img-responsive"
                />
              </a>
            </figure>
            <span class="fh5co-meta">
              <a href="./Single.jsx">Travel</a>,<a href="./Single.jsx">Style</a>
            </span>
            <h2 class="fh5co-article-title">
              <a href="./Single.jsx">A Modernize Huge and Beautiful Building</a>
            </h2>
            <span class="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <div class="clearfix visible-xs-block"></div>
          <article class="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_7.jpg"
                  alt="photo"
                  class="img-responsive"
                />
              </a>
            </figure>
            <span class="fh5co-meta">
              <a href="./Single.jsx">Food &amp; Drinks</a>
            </span>
            <h2 class="fh5co-article-title">
              <a href="./Single.jsx">
                Enjoying the Native Juice Drink in Brazil
              </a>
            </h2>
            <span class="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <article class="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_8.jpg"
                  alt="photo"
                  class="img-responsive"
                />
              </a>
            </figure>
            <span class="fh5co-meta">
              <a href="./Single.jsx">Travel</a>,<a href="./Single.jsx">Style</a>
            </span>
            <h2 class="fh5co-article-title">
              <a href="./Single.jsx">Boat Travel in The Vietnam River</a>
            </h2>
            <span class="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <div class="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>

          <article class="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_1.jpg"
                  alt="photo"
                  class="img-responsive"
                />
              </a>
            </figure>
            <span class="fh5co-meta">
              <a href="./Single.jsx">Food &amp; Drink</a>
            </span>
            <h2 class="fh5co-article-title">
              <a href="./Single.jsx">We Eat and Drink All Night</a>
            </h2>
            <span class="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <article class="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_2.jpg"
                  alt="photo"
                  class="img-responsive"
                />
              </a>
            </figure>
            <span class="fh5co-meta">
              <a href="./Single.jsx">Food &amp; Drink</a>
            </span>
            <h2 class="fh5co-article-title">
              <a href="./Single.jsx">Beef Steak at Guatian Restaurant</a>
            </h2>
            <span class="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <div class="clearfix visible-xs-block"></div>
          <article class="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_3.jpg"
                  alt="photo"
                  class="img-responsive"
                />
              </a>
            </figure>
            <span class="fh5co-meta">
              <a href="./Single.jsx">Travel</a>,<a href="./Single.jsx">Style</a>
            </span>
            <h2 class="fh5co-article-title">
              <a href="./Single.jsx">An Overlooking River at the East Cost</a>
            </h2>
            <span class="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <article class="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_4.jpg"
                  alt="photo"
                  class="img-responsive"
                />
              </a>
            </figure>
            <span class="fh5co-meta">
              <a href="./Single.jsx">Travel</a>,<a href="./Single.jsx">Style</a>
            </span>
            <h2 class="fh5co-article-title">
              <a href="./Single.jsx">A Wildlife In The Mountain of India</a>
            </h2>
            <span class="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <div class="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>
          <article class="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_5.jpg"
                  alt="Image"
                  class="img-responsive"
                />
              </a>
            </figure>
            <span class="fh5co-meta">
              <a href="./Single.jsx">Photography</a>
            </span>
            <h2 class="fh5co-article-title">
              <a href="./Single.jsx">We Took A Photo</a>
            </h2>
            <span class="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <article class="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_6.jpg"
                  alt="photo"
                  class="img-responsive"
                />
              </a>
            </figure>
            <span class="fh5co-meta">
              <a href="./Single.jsx">Travel</a>,<a href="./Single.jsx">Style</a>
            </span>
            <h2 class="fh5co-article-title">
              <a href="./Single.jsx">A Modernize Huge and Beautiful Building</a>
            </h2>
            <span class="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <div class="clearfix visible-xs-block"></div>
          <article class="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_7.jpg"
                  alt="photo"
                  class="img-responsive"
                />
              </a>
            </figure>
            <span class="fh5co-meta">
              <a href="./Single.jsx">Food &amp; Drinks</a>
            </span>
            <h2 class="fh5co-article-title">
              <a href="./Single.jsx">
                Enjoying the Native Juice Drink in Brazil
              </a>
            </h2>
            <span class="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <article class="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <figure>
              <a href="./Single.jsx">
                <img
                  src="../../public/assets/images/pic_8.jpg"
                  alt="photo"
                  class="img-responsive"
                />
              </a>
            </figure>
            <span class="fh5co-meta">
              <a href="./Single.jsx">Travel</a>,<a href="./Single.jsx">Style</a>
            </span>
            <h2 class="fh5co-article-title">
              <a href="./Single.jsx">Boat Travel in The Vietnam River</a>
            </h2>
            <span class="fh5co-meta fh5co-date">March 6th, 2016</span>
          </article>
          <div class="clearfix visible-xs-block"></div>
        </div>
      </div>
      <Footer />
      {/* <!-- jQuery --> */}
      <script src="../../public/assets/js/jquery.min.js"></script>
      {/* <!-- jQuery Easing --> */}
      <script src="../../public/assets/js/jquery.easing.1.3.js"></script>
      {/* <!-- Bootstrap --> */}
      <script src="../../public/assets/js/bootstrap.min.js"></script>
      {/* <!-- Waypoints --> */}
      <script src="../../public/assets/js/jquery.waypoints.min.js"></script>
      {/* <!-- Main JS --> */}
      <script src="../../public/assets/js/main.js"></script>
    </div>
  );
}
export default Home;
