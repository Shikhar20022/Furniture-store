import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import TopCategory from "./component/Category/TopCategory";
import ProductCard from "./component/ProductCard/ProductCard";
import {
  Facebook,
  Instagram,
  Google,
  Location,
  Call,
  Message,
} from "iconsax-react";

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

  return (
    <>
      <div className="background">
        <div>
          <Navbar />
          <div className="content">
            <h1>
              Furniture That Gives You <br />
              Great Comfort
            </h1>
            <p>
              This seashell-inspired barrel chair adds a touch of texture to
              your
              <br />
              living room decor. It’s made from a solid material that feel so
              smooth and relax for your body.
            </p>
            <button className="btn">Shop Now</button>
          </div>
        </div>
      </div>
      <TopCategory />
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
      <div className="discount">
        <div className="discount-content">
          <h2>Discount</h2>
          <h4>Wonder sofa</h4>
          <span>25% 0FF</span>
        </div>
        <div className="dicount-image">
          <img src="../public/sofa.png" alt="sofa" />
        </div>
      </div>
      <div className="news">
        <h1>Latest News</h1>
        <div className="news-content">
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1672136336540-2dd39fd4d1e2?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={"350px"}
              height={"300px"}
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1618221710640-c0eaaa2adb49?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={"350px"}
              height={"300px"}
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={"350px"}
              height={"300px"}
            />
          </div>
        </div>
      </div>

      <div className="footer">
        {/* <div className="footer-content"> */}
        <div className="footer-item">
          <h2>Furniture</h2>
          <p>
            This seashell-inspired barrel chair adds touch of texture to your
            living room decor. It's made from a solid material that feel so
            smooth and relax for your body.
          </p>
          <div className="footer-icons">
            <Facebook size="25" color="#FFF" variant="Bold" />
            <Instagram size="25" color="#FFF" variant="Bold" />
            <Google size="25" color="#FFF" variant="Bold" />
          </div>
        </div>

        <div className="footer-item">
          <h2>Special Menu</h2>
          <ul>
            <li>Conatct</li>
            <li>Help</li>
            <li>Checkout</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-item">
          <h2>Conatct Us</h2>
          <>
            <div className="text-icon">
              <Location size="30" color="#FFF" variant="Bold" />
              <p>House No 26 Buildeing H1 Delhi, India</p>
            </div>
            <div className="text-icon">
              <Call size="25" color="#FFF" variant="Bold" />
              <p>+91-9628363667</p>
            </div>
            <div className="text-icon">
              <Message size="25" color="#FFF" variant="Bold" />
              <p>yourmail@gmail.com</p>
            </div>
          </>
        </div>

        <div className="footer-item">
          <h2>Join to NewsLetter</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, est!
          </p>
          <div className="input-box">
            <input type="email" placeholder="enter your email" />

            <button>Subscribe</button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
