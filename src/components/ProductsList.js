import React from 'react'

const ProductsList = props => {
  const deleteProduct = index => {
    props.deleteProduct(index)
  }

  return (
    <div className="products-list">
      {props.products
        ? props.products.map((value, index) => (
            <div
              className="box"
              key={index}
              onClick={() => props.history.push('/product/' + value.slug)}
            >
              <img src={value.image} alt={value.name} />
              <h2>{value.name}</h2>
              <p className="description">{value.description}</p>
              <p className="price">${value.price}</p>
              <button onClick={() => deleteProduct(index)}>ⓧ</button>
            </div>
          ))
        : 'No products'}
    </div>
  )
}

export default ProductsList
