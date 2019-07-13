import React, { Component } from 'react';
import './styles/app.css';
import products from './data/products';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import Checkout from './components/Checkout';

class App extends Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render(){
		const {cart, total, specialTotal} = this.props.appState;
	  return (
	    <div className="App">
	      <ProductList list={products} actions={this.props.actions}/>
	      <CartList cart={cart} actions={this.props.actions} total={total}/>
	      <Checkout cart={cart} specialTotal={specialTotal} total={total} actions={this.props.actions}/>
	    </div>
	  )
	};
}


export default App;
