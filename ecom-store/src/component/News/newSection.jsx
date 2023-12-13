import React from "react";

function NewSection({ newsCard }) {
  return (
    <div className="news">
      <h1>Latest News</h1>
      <div className="news-content">
        {newsCard.map((cards, index) => (
          <img
            key={cards.id}
            src={cards.imageurl}
            alt="card-image"
            width={"350px"}
            height={"300px"}
          />
        ))}
      </div>
    </div>
  );
}

export default NewSection;
