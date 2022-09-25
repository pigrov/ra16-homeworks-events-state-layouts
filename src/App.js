import "./App.css";
import Store from "./components/Store";
import data from "./data/products.json";

function App() {
  const products = JSON.parse(JSON.stringify(data));
  //const listing = JSON.parse(data);

  return <Store products={products} />;
}

export default App;
