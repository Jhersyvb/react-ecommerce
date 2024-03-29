import React from 'react'

const SingleProduct = props => {
  const addToCart = () => {
    props.addToCart({ product: props.product, quantity: 1 })
  }

  return (
    <div className="section single-product">
      <img src={props.product.image} alt="" />
      <h2>{props.product.name}</h2>
      <p className="description">{props.product.description}</p>
      <p className="price">${props.product.price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  )
}

export default SingleProduct
