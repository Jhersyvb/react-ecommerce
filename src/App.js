import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'

import AddProduct from './components/AddProduct'
import ProductsList from './components/ProductsList'
import SingleProduct from './components/SingleProduct'

function App() {
  return (
    <Router>
      <div className="App">
        <aside>
          <Link to={`/`}>Products</Link>
          <Link to={`/add-product`}>Add product</Link>
        </aside>

        <main>
          <Route exact path="/" component={ProductsList} />
          <Route path="/add-product" component={AddProduct} />
          <Route path="/product/:slug" component={SingleProduct} />
        </main>
      </div>
    </Router>
  )
}

export default App
