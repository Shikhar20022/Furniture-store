import { Home2 } from "iconsax-react";
import React from "react";
import { useNavigate, useParams } from "react-router";

function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  } 
  return <li className="item">{name}</li>;
}

function Products() {
  //   let navigate = useNavigate();
  //   let { id } = useParams();
  return (
    <>
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item isPacked={true} name="Space suit" />
          <Item isPacked={true} name="Helmet with a golden leaf" />
          <Item isPacked={false} name="Photo of Tam" />
        </ul>
      </section>
    </>
  );
}

export default Products;
