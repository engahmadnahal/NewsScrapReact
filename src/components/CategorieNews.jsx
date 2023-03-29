import React from "react";
import { Link } from "react-router-dom";
import Card from "./ArticleCard";
// ----------
import single_1 from "../images/single_1.jpg";
import pic_1 from "../images/pic_1.jpg";
import pic_2 from "../images/pic_2.jpg";
import pic_3 from "../images/pic_3.jpg";
import pic_4 from "../images/pic_4.jpg";

function CategoriesNews(props) {
  return (
    <div className="singlePage">
      <Link to="/" className="fh5co-post-prev">
        <span>
          <i className="icon-chevron-left"></i> Prev
        </span>
      </Link>
      <Link to="/single" className="fh5co-post-next">
        <span>
          Next <i className="icon-chevron-right"></i>
        </span>
      </Link>
      <div className="container-fluid">
        <div className="row fh5co-post-entry single-entry">
          <article className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0">
            <figure className="animate-box">
              <img src={single_1} alt="phot" className="img-responsive" />
            </figure>
            <span className="fh5co-meta animate-box">
              <Link to="/Single">{props.categori}</Link>
            </span>
            <h2 className="fh5co-article-title animate-box">
              <Link to="/Single">My First Time Traveling in Vietnam</Link>
            </h2>
            <span className="fh5co-meta fh5co-date animate-box">
              March 6th, 2016
            </span>
          </article>
          <div className="row fh5co-post-entry">
            <Card
              imgPath={pic_1}
              categoris="Food &amp; Drink"
              articleTitle="Boat Travel in The Vietnam River"
            />
            <Card
              imgPath={pic_2}
              categoris="Food &amp; Drink"
              articleTitle="Enjoying the Native Juice Drink in Brazil"
            />
            <div className="clearfix visible-xs-block"></div>

            <Card
              imgPath={pic_3}
              categoris="Travel,Style"
              articleTitle="A Modernize Huge and Beautiful Building"
            />
            <Card
              imgPath={pic_4}
              categoris="Photography"
              articleTitle="We Took A Photo"
            />
            <div className="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesNews;
