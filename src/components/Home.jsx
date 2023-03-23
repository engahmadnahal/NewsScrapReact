import React from "react";
import Card from "./ArticleCard";

function Home() {
  return (
    // <!--  #container-fluid -->
    <div className="container-fluid">
      <div className="row fh5co-post-entry">
        <Card
          imgPath={require("../images/pic_1.jpg").default}
          categoris="Food &amp; Drink"
          articleTitle="Boat Travel in The Vietnam River"
        />
        <Card
          imgPath="../images/pic_2.jpg"
          categoris="Food &amp; Drink"
          articleTitle="Enjoying the Native Juice Drink in Brazil"
        />
        <div className="clearfix visible-xs-block"></div>

        <Card
          imgPath="../images/pic_3.jpg"
          categoris="Travel,Style"
          articleTitle="A Modernize Huge and Beautiful Building"
        />
        <Card
          imgPath="../images/pic_4.jpg"
          categoris="Photography"
          articleTitle="We Took A Photo"
        />
        <div className="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>

        <Card
          imgPath="../images/pic_5.jpg"
          categoris="Photography"
          articleTitle="We Eat and Drink All Night"
        />
        <Card
          imgPath="../images/pic_6.jpg"
          categoris="Travel,Style"
          articleTitle="A Wildlife In The Mountain of India"
        />
        <div className="clearfix visible-xs-block"></div>

        <Card
          imgPath="../images/pic_7.jpg"
          categoris="Food &amp; Drink"
          articleTitle="An Overlooking River at the East Cost"
        />
        <Card
          imgPath="../images/pic_8.jpg"
          categoris="Travel,Style"
          articleTitle="Beef Steak at Guatian Restaurant"
        />

        <Card
          imgPath="../images/pic_1.jpg"
          categoris="Food &amp; Drink"
          articleTitle="Boat Travel in The Vietnam River"
        />
        <Card
          imgPath="../images/pic_2.jpg"
          categoris="Food &amp; Drink"
          articleTitle="Enjoying the Native Juice Drink in Brazil"
        />
        <div className="clearfix visible-xs-block"></div>

        <Card
          imgPath="../images/pic_3.jpg"
          categoris="Travel,Style"
          articleTitle="A Modernize Huge and Beautiful Building"
        />
        <Card
          imgPath="../images/pic_4.jpg"
          categoris="Photography"
          articleTitle="We Took A Photo"
        />
        <div className="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>

        <Card
          imgPath="../images/pic_5.jpg"
          categoris="Photography"
          articleTitle="We Eat and Drink All Night"
        />
        <Card
          imgPath="../images/pic_6.jpg"
          categoris="Travel,Style"
          articleTitle="A Wildlife In The Mountain of India"
        />
        <div className="clearfix visible-xs-block"></div>

        <Card
          imgPath="../images/pic_7.jpg"
          categoris="Food &amp; Drink"
          articleTitle="An Overlooking River at the East Cost"
        />
        <Card
          imgPath="../images/pic_8.jpg"
          categoris="Travel,Style"
          articleTitle="Beef Steak at Guatian Restaurant"
        />
        <div className="clearfix visible-xs-block"></div>
      </div>
    </div>
  );
}
export default Home;
