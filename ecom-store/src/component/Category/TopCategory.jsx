import React from "react";
import Card from "../Card/Card";

function TopCategory(type, image) {
  return (
    <>
      <div className="category">
        <h2>Top Category</h2>
        <div className="category-content">
          <div className="category-item">
            <Card
              image={
                "https://mysleepyhead.com/media/catalog/product/4/t/4thaug_2ndhalf5934_blue_1_1.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=375&width=840&auto=webp&format=pjpg"
              }
              text={"Comfortable Sofa"}
            />
            <Card
              image={
                "https://wakefitdev.gumlet.io/img/npl_modified_images/darcy/sofa_WLCHRDRCFVBL/sofa_WLCHRDRCFVBL_1.jpg?w=732"
              }
              text={"Comfortable chair"}
            />
            <Card
              image={
                "https://dekorspace.com/cdn/shop/files/dk-816_1.jpg?v=1690799099"
              }
              text={"House Lighting"}
            />
            <Card
              image={
                "https://dekorspace.com/cdn/shop/files/dk-818_1.jpg?v=1690799131"
              }
              text={"Home Elements"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopCategory;
