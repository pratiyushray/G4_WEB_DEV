import productData from "../data";
import ProductCardComponent from "../components/ProductCardComponent";

const BodyComponent = () => {
  return (
    <div id="body-container">
      <div id="search-box">
        <input placeholder="Search Here"></input>
        <button>Search</button>
      </div>
      <div id="product-detail-card">
        <ProductCardComponent data= {productData}/>
        <ProductCardComponent data= {productData}/>
        <ProductCardComponent data= {productData}/>
        <ProductCardComponent data= {productData}/>
       
      </div>
    </div>
  );
};


export default BodyComponent;