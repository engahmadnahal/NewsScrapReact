import React from "react";
import { Link } from "react-router-dom";
import Card from "./ArticleCard";
import DataList from "../Data/DataListCard";
// ----------
import single_1 from "../images/single_1.jpg";

function CategoriesNews(props) {
  const card_style = {
    fontSize: "34px ",
  };

  const listCard = DataList.map((element) => {
    return (
      <Card
        key={element.id}
        imgPath={single_1}
        categoris={element.categoris}
        articleTitle={element.articleTitle}
        element={element}
        style={card_style}
      />
    );
  });

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
            <h3 className="fh5co-article-title animate-box">
              {props.categori}
              <h1>My First Time Traveling in Vietnam</h1>
            </h3>
          </article>
          <div
            className="row fh5co-post-entry"
            style={{ marginLeft: 5, marginRight: 5 }}
          >
            {listCard}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesNews;
