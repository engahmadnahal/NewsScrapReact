import React from "react";
// import logo from "../images/pic_1.jpg";

function Card(props) {
  return (
    <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
      <figure>
        <a href="./Single.jsx">
          <img
            src={props.element.imgPath}
            alt="souvenir"
            className="img-responsive"
          />
        </a>
      </figure>
      <span className="fh5co-meta">
        <a href="./Single.jsx">{props.element.categoris}</a>
      </span>
      <h2 className="fh5co-article-title">
        <a href="./Single.jsx">{props.element.articleTitle}</a>
      </h2>
      <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
    </article>
  );
}
export default Card;
