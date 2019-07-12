import React, { Component } from 'react';
import './App.css';
import products from './data/products';
import ProductList from './components/ProductList';
import CartList from './components/CartList';

class App extends Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render(){
		const cart = this.props.cart;
		console.log("app", this.props)
	  return (
	    <div className="App">
	      <ProductList list={products} actions={this.props.actions}/>
	      <CartList cart={cart} actions={this.props.actions}/>
	    </div>
	  )
	};
}


export default App;
