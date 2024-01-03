import "./App.css";
import Product from "./Product";
import Cart from "./Cart";
import { useState } from "react";
import NameCountFormatter from "./NameCountFormatter";

const cardsData = [
  {
    title: "Pineapple",
    price: 120000,
    stock: 40,
    totStock: 40,
    url: "https://www.foodrepublic.com/img/gallery/take-the-sting-out-of-pineapple-with-a-salt-water-soak/l-intro-1684948369.jpg",
    description:
      "a good combination of healthy, juicy and pleasureful exprience.",
    className: "product-1",
  },
  {
    title: "Garlic",
    price: 50000,
    stock: 70,
    totStock: 70,
    url: " https://files.nccih.nih.gov/garlic-thinkstockphotos-514990456-square.jpg",
    description: "Enhance flavors with this aromatic essential.",
    className: "product-1",
  },
  {
    title: "Cabbage",
    price: 20000,
    stock: 200,
    totStock: 200,
    url: "https://www.lifespan.org/sites/default/files/styles/featured_image_large/public/2023-09/cabbage-900x600.jpg?h=b69e0e0e&itok=ezYK7-ip",
    description: "fresh and intact.",
    className: "product-1",
  },
  {
    title: "Avacado",
    price: 120000,
    stock: 50,
    totStock: 50,
    url: "https://dims.healthgrades.com/dims3/MMH/81ecc05/2147483647/strip/true/crop/3987x2228+0+264/resize/800x447!/quality/75/?url=https%3A%2F%2Fucmscdn.healthgrades.com%2Fd1%2F63%2F836d13a7481a98f3b5380f34abb0%2Fgettyimages-453276061-rf-hg.jpg",
    description: "ready to be added to your healthy dish.",
    className: "product-1",
  },
  {
    title: "Cucumber",
    price: 30000,
    stock: 200,
    totStock: 200,
    url: "https://img.particlenews.com/image.php?type=thumbnail_580x000&url=2Ej7Mq_0mJnhrRX00",
    description: "best ingredient of every salad!",
    className: "product-1",
  },
  {
    title: "Tomato",
    price: 40000,
    stock: 150,
    totStock: 150,
    url: "https://assets.newatlas.com/dims4/default/d63c69b/2147483647/strip/true/crop/996x664+2+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fshutterstock_268999940.jpg",
    description: "best quality-greenhouse.",
    className: "product-1",
  },
  {
    title: "Pitaya",
    price: 200000,
    stock: 30,
    totStock: 30,
    url: "https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN445-Dragonfruit-732x549-thumb-732x549.jpg",
    description: "best fit for people who search for new tastes.",
    className: "product-1",
  },
  {
    title: "Banana",
    price: 70000,
    stock: 100,
    totStock: 100,
    url: "https://images.everydayhealth.com/images/diet-nutrition/all-about-bananas-nutrition-facts-health-benefits-recipes-and-more-rm-722x406.jpg",
    description: "delicious like always.",
    className: "product-1",
  },
  {
    title: "Watermelon",
    price: 15000,
    stock: 500,
    totStock: 500,
    url: "https://www.wockhardthospitals.com/wp-content/uploads/2023/10/Top-5-Health-Benefits-of-Watermelon.jpg",
    description:
      "juicy, sweet and of course red: dont believe me? try it yourself.",
    className: "product-1",
  },
  {
    title: "Pomegrante",
    price: 45000,
    stock: 200,
    totStock: 200,
    url: "https://eqhct8esjgc.exactdn.com/wp-content/uploads/2022/11/pomegranate-and-seeds-s.jpg?strip=all&lossy=1&ssl=1",
    description: "hundreds of rubies are there in ordered manner (is it ?).",
    className: "product-1",
  },
];

// This will add commas as thousands separators (million function)
function formatTotal(total) {
  if (total >= 1000000) {
    return (total / 1000000).toFixed(3) + " million";
  } else {
    return total; //
  }
}

// discount function
function discount(total) {
  let discountedTotal = total;

  if (total >= 3000000) {
    discountedTotal = total * 0.85;
  } else if (total >= 2000000) {
    discountedTotal = total * 0.9;
  }

  return formatTotal(discountedTotal);
}

// function to show the amount of discount that is taken
function calculateDiscount(total) {
  if (total >= 3000000) {
    return total * 0.15;
  } else if (total >= 2000000) {
    return total * 0.1;
  } else {
    return 0;
  }
}

function App() {
  const [products, setProducts] = useState(cardsData);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState(``);
  const [cartVisibility, setCartVisibility] = useState(false);

  const stockHandlerAdd = (index) => {
    const newProducts = [...products];
    if (newProducts[index].stock > 0) {
      newProducts[index].stock -= 1;
    }
    setProducts(newProducts);
  };
  const stockHandlerRemove = (index) => {
    const newProducts = [...products];

    newProducts[index].stock += 1;

    setProducts(newProducts);
  };

  const handleAddToCart = (price, title, quantity) => {
    const newTotal = total + price;

    const newCart = cart + " " + title;

    setTotal(newTotal);
    setCart(newCart);
  };
  const handleRemoveFromCart = (price, title, quantity) => {
    if (total > 0) {
      const newTotal = total - price;
      const newCart = cart.replace(" " + title, "");
      setTotal(newTotal);
      setCart(newCart);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        {" "}
        <span>Happy Harvest</span>
      </header>
      <div className="Cart-Button-Holder">
        <Cart onClick={() => setCartVisibility(!cartVisibility)} />
        <div className={cartVisibility ? "Cart-Visible" : "Cart-Invisible"}>
          <NameCountFormatter inputString={cart} />
          <hr></hr>
          <div>
            <span
              style={{
                fontSize: "18px",
                color: "#333",
                fontFamily: "Lucida Typewriter",
                fontWeight: "bold",
              }}
            >
              Total: <br></br>
              <span
                style={{
                  color: "#E67E22",
                  fontSize: "22px",
                  fontWeight: "bold",
                  fontFamily: "Lucida Typewriter",
                }}
              >
                {discount(total)} tomans
              </span>{" "}
              <br></br>
              <br></br>
              <span>
                *Total discount:<br></br>{" "}
                <span style={{ color: "#4CAF50", fontWeight: "bold" }}>
                  {formatTotal(calculateDiscount(total))} tomans
                </span>
                <br></br>
                <br></br>
                <span style={{ fontSize: "12px" }}>
                  {" "}
                  (-10% for total of more than 2 million tomans) <br></br>(-15%
                  for total of more than 3 million tomans){" "}
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="products">
        {cardsData.map((product, index) => (
          <Product
            key={index}
            price={product.price}
            className={product.className}
            title={product.title}
            stock={product.stock}
            totStock={product.totStock}
            url={product.url}
            description={product.description}
            onAddToCart={() => {
              stockHandlerAdd(index);
              handleAddToCart(product.price, product.title, 1);
            }}
            onRemoveFromCart={() => {
              stockHandlerRemove(index);
              handleRemoveFromCart(product.price, product.title, 1);
            }}
          />
        ))}
      </div>
      <footer className="footer">
        <p>© 2024 Happy Harvest. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
