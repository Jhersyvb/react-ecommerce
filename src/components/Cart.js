import React from 'react'

const Cart = props => {
  if (!props.cart.length) return ''

  return (
    <div className="section cart">
      <table>
        <tbody>
          <tr>
            <td colSpan="3">
              <h2>Cart</h2>
            </td>
          </tr>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Total price</th>
          </tr>

          {props.cart.map((value, index) => (
            <tr key={index}>
              <td>{value.product.name}</td>
              <td>{value.quantity}</td>
              <td>${value.quantity * value.product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Cart
