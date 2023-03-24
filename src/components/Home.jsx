import React from "react";
import Card from "./ArticleCard";
// import DataList from "../Data/DataListCard";

function Home() {
  // const listCard = DataList.map((element) => {
  //   return (
  //     <Card
  //       key={element.id}
  //       imgPath={element.imagePath}
  //       categoris={element.categoris}
  //       articleTitle={element.articleTitle}
  //       element={element}
  //     />
  //   );
  // });
  return (
    // <!--  #container-fluid -->
    <div className="container-fluid">
      <div className="row fh5co-post-entry">
        {/* {listCard} */}
        <Card
          imgPath={require("../images/pic_1.jpg")}
          categoris="Food &amp; Drink"
          articleTitle="Boat Travel in The Vietnam River"
        />
        <Card
          imgPath={require("../images/pic_2.jpg")}
          categoris="Food &amp; Drink"
          articleTitle="Enjoying the Native Juice Drink in Brazil"
        />
        <div className="clearfix visible-xs-block"></div>

        <Card
          imgPath={require("../images/pic_3.jpg")}
          categoris="Travel,Style"
          articleTitle="A Modernize Huge and Beautiful Building"
        />
        <Card
          imgPath={require("../images/pic_4.jpg")}
          categoris="Photography"
          articleTitle="We Took A Photo"
        />
        <div className="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>

        <Card
          imgPath={require("../images/pic_5.jpg")}
          categoris="Photography"
          articleTitle="We Eat and Drink All Night"
        />
        <Card
          imgPath={require("../images/pic_6.jpg")}
          categoris="Travel,Style"
          articleTitle="A Wildlife In The Mountain of India"
        />
        <div className="clearfix visible-xs-block"></div>

        <Card
          imgPath={require("../images/pic_7.jpg")}
          categoris="Food &amp; Drink"
          articleTitle="An Overlooking River at the East Cost"
        />
        <Card
          imgPath={require("../images/pic_8.jpg")}
          categoris="Travel,Style"
          articleTitle="Beef Steak at Guatian Restaurant"
        />
        <div className="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>
        <Card
          imgPath={require("../images/pic_1.jpg")}
          categoris="Food &amp; Drink"
          articleTitle="Boat Travel in The Vietnam River"
        />
        <Card
          imgPath={require("../images/pic_2.jpg")}
          categoris="Food &amp; Drink"
          articleTitle="Enjoying the Native Juice Drink in Brazil"
        />
        <div className="clearfix visible-xs-block"></div>

        <Card
          imgPath={require("../images/pic_3.jpg")}
          categoris="Travel,Style"
          articleTitle="A Modernize Huge and Beautiful Building"
        />
        <Card
          imgPath={require("../images/pic_4.jpg")}
          categoris="Photography"
          articleTitle="We Took A Photo"
        />
        <div className="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>

        <Card
          imgPath={require("../images/pic_5.jpg")}
          categoris="Photography"
          articleTitle="We Eat and Drink All Night"
        />
        <Card
          imgPath={require("../images/pic_6.jpg")}
          categoris="Travel,Style"
          articleTitle="A Wildlife In The Mountain of India"
        />
        <div className="clearfix visible-xs-block"></div>

        <Card
          imgPath={require("../images/pic_7.jpg")}
          categoris="Food &amp; Drink"
          articleTitle="An Overlooking River at the East Cost"
        />
        <Card
          imgPath={require("../images/pic_8.jpg")}
          categoris="Travel,Style"
          articleTitle="Beef Steak at Guatian Restaurant"
        />
        <div className="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>
      </div>
    </div>
  );
}
export default Home;
