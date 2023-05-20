import React from "react";
import Card from "./ArticleCard";
import DataList from "../Data/DataListCard";
// ----------
// import pic_1 from "../images/pic_1.jpg";
// import pic_2 from "../images/pic_2.jpg";
// import pic_3 from "../images/pic_3.jpg";
// import pic_4 from "../images/pic_4.jpg";
// import pic_5 from "../images/pic_5.jpg";
// import pic_6 from "../images/pic_6.jpg";
// import pic_7 from "../images/pic_7.jpg";
// import pic_8 from "../images/pic_8.jpg";

function Home() {
  const listCard = DataList.map((element) => {
    return (
      <>
        <Card
          key={element.id}
          imgPath={element.imagePath}
          categoris={element.categoris}
          articleTitle={element.articleTitle}
          element={element}
        />
      </>
    );
  });
  return (
    // <!--  #container-fluid -->
    <div className="container-fluid">
      <div className="row fh5co-post-entry">{listCard}</div>
    </div>
  );
}
export default Home;
