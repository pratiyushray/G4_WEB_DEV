const ProductCardComponent = (props) =>{
  // console.log(props?.data[0]?.title)

  //DESTRUCUTURE YOUR DATA
  //ALWAYS USE OPTIONAL CHAINING
  const { title,price,discountPercentage,rating} = props?.data[0];
  return (
    <div id="product-container">
      <div id="img-product">
        <img src={props?.data[0]?.images[0]}></img>
      </div>
      <span>{title}</span>
      <span>{price}</span>
      <span>{discountPercentage}</span>
      <span>{rating}</span>
      <button> ADD TO CART</button>
      <button> BUY NOW</button>
    </div>
  )
}

export default ProductCardComponent