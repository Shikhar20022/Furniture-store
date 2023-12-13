import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function OurProducts({ tabs, loading, activeTabId, productData, handleTab }) {
  return (
    <div className="our-product">
      <h2>Our Product</h2>
      <div className="product-links">
        <div className="links">
          <ul>
            {tabs.map((item, index) => (
              <li
                key={item.id}
                className={activeTabId === index ? "tab-active" : "tab"}
                onClick={() => handleTab(index, item)}
              >
                {item.tabName}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="btn">Filter</button>
        </div>
      </div>
      {loading ? (
        <p style={{ color: "green" }}>Loading...</p>
      ) : (
        <ProductCard productData={productData} />
      )}
    </div>
  );
}

export default OurProducts;
