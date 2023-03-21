import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Single() {
  return (
    <div className="singlePage">
      <div id="fh5co-offcanvas">
        <a
          href="./Single.jsx"
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
              alt="Free HTML5 Bootstrap Template"
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
              <a href="./Single.jsx">
                <i className="icon-twitter"></i>
              </a>
            </li>
            <li>
              <a href="./Single.jsx">
                <i className="icon-facebook"></i>
              </a>
            </li>
            <li>
              <a href="./Single.jsx">
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
                <a href="./Single.jsx">Style</a>
              </li>
              <li>
                <a href="./Single.jsx">Photography</a>
              </li>
              <li>
                <a href="./Single.jsx">Food &amp; Drinks</a>
              </li>
              <li>
                <a href="./Single.jsx">Culture</a>
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
      <Header />
      <a href="./Single.jsx" className="fh5co-post-prev">
        <span>
          <i className="icon-chevron-left"></i> Prev
        </span>
      </a>
      <a href="./Single.jsx" className="fh5co-post-next">
        <span>
          Next <i className="icon-chevron-right"></i>
        </span>
      </a>
      {/* <!-- END #fh5co-header --> */}
      <div className="container-fluid">
        <div className="row fh5co-post-entry single-entry">
          <article className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0">
            <figure className="animate-box">
              <img
                src="../../public/assets/images/single_1.jpg"
                alt="Image"
                className="img-responsive"
              />
            </figure>
            <span className="fh5co-meta animate-box">
              <a href="./Single.jsx">Travel</a>
            </span>
            <h2 className="fh5co-article-title animate-box">
              <a href="./Single.jsx">My First Time Traveling in Vietnam</a>
            </h2>
            <span className="fh5co-meta fh5co-date animate-box">
              March 6th, 2016
            </span>

            <div className="col-lg-12 col-lg-offset-0 col-md-12 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-left content-article">
              <div className="row">
                <div className="col-lg-8 cp-r animate-box">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large{" "}
                    <a href="./Single.jsx">language</a>
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
                <div className="col-lg-4 animate-box">
                  <div className="fh5co-highlight right">
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

              <div className="row rp-b">
                <div className="col-md-12 animate-box">
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

              <div className="row rp-b">
                <div className="col-lg-6 col-md-12 animate-box">
                  <figure>
                    {/* <img src="/pic_1.jpg" alt="Free HTML5 Bootstrap Template by FREEHTML5.co" className="img-responsive"> */}
                    <figcaption>
                      This is a sweet image caption. Far far away, behind the
                      word mountains, far from the countries Vokalia and
                      Consonantia
                    </figcaption>
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 cp-l animate-box">
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
                    coast of the Semantics, a large{" "}
                    <a href="./Single.jsx">language</a>
                    ocean. A small river named Duden flows by their place and
                    supplies it with the necessary regelialia. It is a
                    paradisematic country, in which roasted parts of sentences
                    fly into your mouth.
                  </p>
                </div>
              </div>

              <div className="row rp-b">
                <div className="col-lg-6 col-lg-push-6 col-md-12 col-md-push-0 animate-box">
                  <figure>
                    <img
                      src="../../public/assets/images/pic_4.jpg"
                      alt="Free HTML5 Bootstrap Template by FREEHTML5.co"
                      className="img-responsive"
                    />
                    <figcaption>
                      This is a sweet image caption. Far far away, behind the
                      word mountains, far from the countries Vokalia and
                      Consonantia
                    </figcaption>
                  </figure>
                </div>
                <div className="col-lg-6 col-lg-pull-6 col-md-12 col-md-pull-0 cp-r animate-box">
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
                    coast of the Semantics, a large{" "}
                    <a href="./Single.jsx">language</a>
                    ocean. A small river named Duden flows by their place and
                    supplies it with the necessary regelialia. It is a
                    paradisematic country, in which roasted parts of sentences
                    fly into your mouth.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 animate-box">
                  <h2>Pointing has no control about the blind texts</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large{" "}
                    <a href="./Single.jsx">language</a>
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
                <div className="col-md-4 animate-box">
                  <figure>
                    <img
                      src="../../public/assets/images/pic_5.jpg"
                      alt="Free HTML5 Bootstrap Template by FREEHTML5.co"
                      className="img-responsive"
                    />
                    <figcaption>
                      This is a sweet image caption. Far far away, behind the
                      word mountains, far from the countries Vokalia and
                      Consonantia
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4 animate-box">
                  <figure>
                    <img
                      src="../../public/assets/images/pic_6.jpg"
                      alt="Free HTML5 Bootstrap Template by FREEHTML5.co"
                      className="img-responsive"
                    />
                    <figcaption>
                      This is a sweet image caption. Far far away, behind the
                      word mountains, far from the countries Vokalia and
                      Consonantia
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4 animate-box">
                  <figure>
                    <img
                      src="../../public/assets/images/pic_7.jpg"
                      alt="Free HTML5 Bootstrap Template by FREEHTML5.co"
                      className="img-responsive"
                    />
                    <figcaption>
                      This is a sweet image caption. Far far away, behind the
                      word mountains, far from the countries Vokalia and
                      Consonantia
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-12 animate-box">
                  <h2>Pointing has no control about the blind texts</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large{" "}
                    <a href="./Single.jsx">language</a> ocean. A small river
                    named Duden flows by their place and supplies it with the
                    necessary regelialia. It is a paradisematic country, in
                    which roasted parts of sentences fly into your mouth.
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
    </div>
  );
}

export default Single;
