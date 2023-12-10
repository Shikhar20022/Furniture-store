import React from "react";
import { Star1 } from "iconsax-react";

function ProductCard({ productData }) {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${4}, 1fr)`,
          gap: "2rem",
          marginTop: "2rem",
          padding: "1rem",
        }}
      >
        {productData.map((product, index) => {
          return (
            <div key={index}>
              <img
                src={
                  "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"
                }
                alt={product.title}
                width={"100%"}
                height={"270px"}
                style={{ backgroundColor: "lightgrey" }}
              />
              <p
                className="type"
                style={{
                  fontWeight: 500,
                  lineHeight: 0,
                  marginTop: "2rem",
                  whiteSpace: "nowrap",
                  textOverflow: "clip",
                }}
              >
                {product.title}
              </p>
              <div
                className="details"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p style={{ lineHeight: 0 }}>${product.price}</p>
                <div>
                  <Star1 size="16" color="#FF8A65" variant="Bold" />
                  <Star1 size="16" color="#FF8A65" variant="Bold" />
                  <Star1 size="16" color="#FF8A65" variant="Bold" />
                  <Star1 size="16" color="#FF8A65" variant="Bold" />
                  <Star1 size="16" color="#FF8A65" variant="Bulk" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductCard;
