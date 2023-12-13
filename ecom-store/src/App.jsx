import React, { useState, useEffect } from "react";
import TopCategory from "./component/Category/TopCategory";
import NewSection from "./component/News/newSection";
import Footer from "./component/footer/footer";
import OfferBanner from "./component/offer-banner/offerBanner";
import OurProducts from "./component/our-products/ourProducts";
import HeroSection from "./component/Hero/heroSection";
import "./App.css";

const tabs = [
  {
    id: 1,
    tabName: "Furniture",
    category: "furniture",
  },
  {
    id: 2,
    tabName: "Laptops",
    category: "laptops",
  },
  {
    id: 3,
    tabName: "Tops",
    category: "tops",
  },
  {
    id: 4,
    tabName: "Groceries",
    category: "groceries",
  },
  {
    id: 5,
    tabName: "Fragrances",
    category: "fragrances",
  },
];

function App() {
  const [activeTabId, setactiveTabId] = useState(0);
  const [productData, setProductData] = useState([]);
  const [category, setCategory] = useState("furniture");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/category/${category}`
      );
      const data = await response.json();

      setProductData(data.products);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  const handleTab = (index, item) => {
    setactiveTabId(index);
    setCategory(item.category);
  };

  const newsCard = [
    {
      id: 0,
      imageurl: "https://rb.gy/tm7zf4",
    },

    {
      id: 1,
      imageurl: "https://rb.gy/tm7zf4",
    },

    {
      id: 2,
      imageurl: "https://rb.gy/tm7zf4",
    },
  ];

  return (
    <>
      <HeroSection />
      <TopCategory />
      <OurProducts
        tabs={tabs}
        activeTabId={activeTabId}
        loading={loading}
        productData={productData}
        handleTab={handleTab}
      />
      <OfferBanner />
      <NewSection newsCard={newsCard} />
      <Footer />
    </>
  );
}

export default App;
