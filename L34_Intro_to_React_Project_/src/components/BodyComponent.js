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
        {
          productData.map((product)=>{
            // console.log(product)
            return( <ProductCardComponent key= {product.id} data= {product}/>)
          })
        }
       
      </div>
    </div>
  );
};


export default BodyComponent;