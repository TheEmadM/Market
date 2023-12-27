import "./App.css";
import Product from "./Product";
import Cart from "./Cart";
import { useState } from "react";

const cardsData = [
  {
    title: "tomato",
    price: 40,
    stock: 150,
    totStock: 150,
    url: "https://assets.newatlas.com/dims4/default/d63c69b/2147483647/strip/true/crop/996x664+2+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fshutterstock_268999940.jpg",
    description: "best quality-greenhouse",
  },
  {
    title: "garlic",
    price: 50,
    stock: 70,
    totStock: 70,
    url: " https://files.nccih.nih.gov/garlic-thinkstockphotos-514990456-square.jpg",
    description:
      "make your dish delicious with a small portion of this amazing",
  },
  {
    title: "cabbage",
    price: 20,
    stock: 200,
    totStock: 200,
    url: "https://www.lifespan.org/sites/default/files/styles/featured_image_large/public/2023-09/cabbage-900x600.jpg?h=b69e0e0e&itok=ezYK7-ip",
    description: "fresh and intact",
  },
  {
    title: "avacado",
    price: 120,
    stock: 50,
    totStock: 50,
    url: "https://dims.healthgrades.com/dims3/MMH/81ecc05/2147483647/strip/true/crop/3987x2228+0+264/resize/800x447!/quality/75/?url=https%3A%2F%2Fucmscdn.healthgrades.com%2Fd1%2F63%2F836d13a7481a98f3b5380f34abb0%2Fgettyimages-453276061-rf-hg.jpg",
    description: "ready to be added to your healthy dish",
  },
  {
    title: "cocumber",
    price: 30,
    stock: 200,
    totStock: 200,
    url: "https://img.particlenews.com/image.php?type=thumbnail_580x000&url=2Ej7Mq_0mJnhrRX00",
    description: "best ingredient of every salad!",
  },
  {
    title: "pineapple",
    price: 120,
    stock: 40,
    totStock: 40,
    url: "https://www.foodrepublic.com/img/gallery/take-the-sting-out-of-pineapple-with-a-salt-water-soak/l-intro-1684948369.jpg",
    description:
      "a good combination of healthy, juicy and pleasureful exprience",
  },
  {
    title: "Pitaya",
    price: 200,
    stock: 30,
    totStock: 30,
    url: "https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN445-Dragonfruit-732x549-thumb-732x549.jpg",
    description: "best fit for people who search for new tastes",
  },
  {
    title: "banana",
    price: 70,
    stock: 100,
    totStock: 100,
    url: "https://images.everydayhealth.com/images/diet-nutrition/all-about-bananas-nutrition-facts-health-benefits-recipes-and-more-rm-722x406.jpg",
    description: "delicious like always",
  },
  {
    title: "watermelon",
    price: 10,
    stock: 500,
    totStock: 500,
    url: "https://www.wockhardthospitals.com/wp-content/uploads/2023/10/Top-5-Health-Benefits-of-Watermelon.jpg",
    description:
      "juicy, sweet and of course red: dont believe me? try it yourself",
  },
  {
    title: "pomegrante",
    price: 30,
    stock: 200,
    totStock: 200,
    url: "https://eqhct8esjgc.exactdn.com/wp-content/uploads/2022/11/pomegranate-and-seeds-s.jpg?strip=all&lossy=1&ssl=1",
    description: "hundreds of rubies are there in ordered manner (is it ?)",
  },
];

function App() {
  const [products, setProducts] = useState(cardsData);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState(``);

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

    console.log(`Total Price: ${newTotal}`);

    setTotal(newTotal);
    setCart(newCart);

    // this part takes the output string and makes duplicated products pack together in the final result.
    const seperatedCart = newCart.split(/,?\s+/);
    const nameCounts = {};
    seperatedCart.forEach((name) => {
      nameCounts[name] = (nameCounts[name] || 0) + 1;
    });
    const result = Object.entries(nameCounts)
      .filter(([name, _]) => name.trim() !== "")
      .map(([name, count]) => `${name} (${count} kgs)`)
      .join(", ");
    console.log(result);
  };
  const handleRemoveFromCart = (price, title, quantity) => {
    if (total > 0) {
      const newTotal = total - price;

      console.log(`Total Price: ${newTotal}`);

      setTotal(newTotal);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        {" "}
        سوپرمیوه سامان و آروین
        <div className="cart-holder">
          <Cart />
        </div>
      </header>
      <div className="products">
        {cardsData.map((product, index) => (
          <Product
            key={index}
            price={product.price}
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
    </div>
  );
}

export default App;
