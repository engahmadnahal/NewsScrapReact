import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Single() {
  return (
    <div className="singlePage">
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
              <a href="#">
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
      {/* <header id="fh5co-header">
        <div class="container-fluid">
          <div class="row">
            <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle">
              <i></i>
            </a>
            <ul class="fh5co-social">
              <li>
                <a href="#">
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
            <div class="col-lg-12 col-md-12 text-center">
              <h1 id="fh5co-logo">
                <a href="index.html">
                  Magazine <sup>TM</sup>
                </a>
              </h1>
            </div>
          </div>
        </div>
      </header> */}
      <Header />
      <a href="#" class="fh5co-post-prev">
        <span>
          <i class="icon-chevron-left"></i> Prev
        </span>
      </a>
      <a href="#" class="fh5co-post-next">
        <span>
          Next <i class="icon-chevron-right"></i>
        </span>
      </a>
      {/* <!-- END #fh5co-header --> */}
      <div class="container-fluid">
        <div class="row fh5co-post-entry single-entry">
          <article class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0">
            <figure class="animate-box">
              <img
                src="../../public/assets/images/single_1.jpg"
                alt="Image"
                class="img-responsive"
              />
            </figure>
            <span class="fh5co-meta animate-box">
              <a href="./Single.jsx">Travel</a>
            </span>
            <h2 class="fh5co-article-title animate-box">
              <a href="./Single.jsx">My First Time Traveling in Vietnam</a>
            </h2>
            <span class="fh5co-meta fh5co-date animate-box">
              March 6th, 2016
            </span>

            <div class="col-lg-12 col-lg-offset-0 col-md-12 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-left content-article">
              <div class="row">
                <div class="col-lg-8 cp-r animate-box">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large <a href="#">language</a>
                    ocean. A small river named Duden flows by their place and
                    supplies it with the necessary regelialia. It is a
                    paradisematic country, in which roasted parts of sentences
                    fly into your mouth.
                  </p>

                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar. The Big
                    Oxmox advised her not to do so, because there were thousands
                    of bad Commas, wild Question Marks and devious Semikoli, but
                    the Little Blind Text didn’t listen.
                  </p>

                  <p>
                    She packed her seven versalia, put her initial into the belt
                    and made herself on the way. When she reached the first
                    hills of the Italic Mountains, she had a last view back on
                    the skyline of her hometown Bookmarksgrove, the headline of
                    Alphabet Village and the subline of her own road, the Line
                    Lane. Pityful a rethoric question ran over her cheek, then
                    she continued her way.
                  </p>
                </div>
                <div class="col-lg-4 animate-box">
                  <div class="fh5co-highlight right">
                    <h4>Highlight</h4>
                    <p>
                      Separated they live in Bookmarksgrove right at the coast
                      of the Semantics, a large language ocean. A small river
                      named Duden flows by their place and supplies it with the
                      necessary regelialia
                    </p>
                  </div>
                </div>
              </div>

              <div class="row rp-b">
                <div class="col-md-12 animate-box">
                  <blockquote>
                    <p>
                      &ldquo;She packed her seven versalia, put her initial into
                      the belt and made herself on the way. When she reached the
                      first hills of the Italic Mountains, she had a last view
                      back on the skyline of her hometown Bookmarksgrove &rdquo;
                      <cite>&mdash; Jean Smith</cite>
                    </p>
                  </blockquote>
                </div>
              </div>

              <div class="row rp-b">
                <div class="col-lg-6 col-md-12 animate-box">
                  <figure>
                    {/* <img src="/pic_1.jpg" alt="Free HTML5 Bootstrap Template by FREEHTML5.co" class="img-responsive"> */}
                    <figcaption>
                      This is a sweet image caption. Far far away, behind the
                      word mountains, far from the countries Vokalia and
                      Consonantia
                    </figcaption>
                  </figure>
                </div>
                <div class="col-lg-6 col-md-12 cp-l animate-box">
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar. The Big
                    Oxmox advised her not to do so, because there were thousands
                    of bad Commas, wild Question Marks and devious Semikoli, but
                    the Little Blind Text didn’t listen.
                  </p>

                  <p>
                    She packed her seven versalia, put her initial into the belt
                    and made herself on the way. When she reached the first
                    hills of the Italic Mountains, she had a last view back on
                    the skyline of her hometown Bookmarksgrove, the headline of
                    Alphabet Village and the subline of her own road, the Line
                    Lane. Pityful a rethoric question ran over her cheek, then
                    she continued her way.
                  </p>

                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large <a href="#">language</a>
                    ocean. A small river named Duden flows by their place and
                    supplies it with the necessary regelialia. It is a
                    paradisematic country, in which roasted parts of sentences
                    fly into your mouth.
                  </p>
                </div>
              </div>

              <div class="row rp-b">
                <div class="col-lg-6 col-lg-push-6 col-md-12 col-md-push-0 animate-box">
                  <figure>
                    <img
                      src="../../public/assets/images/pic_4.jpg"
                      alt="Free HTML5 Bootstrap Template by FREEHTML5.co"
                      class="img-responsive"
                    />
                    <figcaption>
                      This is a sweet image caption. Far far away, behind the
                      word mountains, far from the countries Vokalia and
                      Consonantia
                    </figcaption>
                  </figure>
                </div>
                <div class="col-lg-6 col-lg-pull-6 col-md-12 col-md-pull-0 cp-r animate-box">
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar. The Big
                    Oxmox advised her not to do so, because there were thousands
                    of bad Commas, wild Question Marks and devious Semikoli, but
                    the Little Blind Text didn’t listen.
                  </p>

                  <p>
                    She packed her seven versalia, put her initial into the belt
                    and made herself on the way. When she reached the first
                    hills of the Italic Mountains, she had a last view back on
                    the skyline of her hometown Bookmarksgrove, the headline of
                    Alphabet Village and the subline of her own road, the Line
                    Lane. Pityful a rethoric question ran over her cheek, then
                    she continued her way.
                  </p>

                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large <a href="#">language</a>
                    ocean. A small river named Duden flows by their place and
                    supplies it with the necessary regelialia. It is a
                    paradisematic country, in which roasted parts of sentences
                    fly into your mouth.
                  </p>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 animate-box">
                  <h2>Pointing has no control about the blind texts</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large <a href="#">language</a>
                    ocean. A small river named Duden flows by their place and
                    supplies it with the necessary regelialia. It is a
                    paradisematic country, in which roasted parts of sentences
                    fly into your mouth.
                  </p>
                  <p>
                    She packed her seven versalia, put her initial into the belt
                    and made herself on the way. When she reached the first
                    hills of the Italic Mountains, she had a last view back on
                    the skyline of her hometown Bookmarksgrove, the headline of
                    Alphabet Village and the subline of her own road, the Line
                    Lane. Pityful a rethoric question ran over her cheek, then
                    she continued her way.
                  </p>
                </div>
                <div class="col-md-4 animate-box">
                  <figure>
                    <img
                      src="../../public/assets/images/pic_5.jpg"
                      alt="Free HTML5 Bootstrap Template by FREEHTML5.co"
                      class="img-responsive"
                    />
                    <figcaption>
                      This is a sweet image caption. Far far away, behind the
                      word mountains, far from the countries Vokalia and
                      Consonantia
                    </figcaption>
                  </figure>
                </div>
                <div class="col-md-4 animate-box">
                  <figure>
                    <img
                      src="../../public/assets/images/pic_6.jpg"
                      alt="Free HTML5 Bootstrap Template by FREEHTML5.co"
                      class="img-responsive"
                    />
                    <figcaption>
                      This is a sweet image caption. Far far away, behind the
                      word mountains, far from the countries Vokalia and
                      Consonantia
                    </figcaption>
                  </figure>
                </div>
                <div class="col-md-4 animate-box">
                  <figure>
                    <img
                      src="../../public/assets/images/pic_7.jpg"
                      alt="Free HTML5 Bootstrap Template by FREEHTML5.co"
                      class="img-responsive"
                    />
                    <figcaption>
                      This is a sweet image caption. Far far away, behind the
                      word mountains, far from the countries Vokalia and
                      Consonantia
                    </figcaption>
                  </figure>
                </div>
                <div class="col-md-12 animate-box">
                  <h2>Pointing has no control about the blind texts</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large <a href="#">language</a>{" "}
                    ocean. A small river named Duden flows by their place and
                    supplies it with the necessary regelialia. It is a
                    paradisematic country, in which roasted parts of sentences
                    fly into your mouth.
                  </p>
                  <p>
                    She packed her seven versalia, put her initial into the belt
                    and made herself on the way. When she reached the first
                    hills of the Italic Mountains, she had a last view back on
                    the skyline of her hometown Bookmarksgrove, the headline of
                    Alphabet Village and the subline of her own road, the Line
                    Lane. Pityful a rethoric question ran over her cheek, then
                    she continued her way.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <Footer />
      {/* <footer id="fh5co-footer">
        <p>
          <small>
            &copy; 2016. Magazine Free HTML5. All Rights Reserverd. <br />{" "}
            Designed by{" "}
            <a href="http://freehtml5.co" target="_blank">
              FREEHTML5.co
            </a>{" "}
            Demo :{" "}
            <a href="http://unsplash.com/" target="_blank">
              Unsplash
            </a>
          </small>
        </p>
      </footer> */}
    </div>
  );
}

export default Single;
