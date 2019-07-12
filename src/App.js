import React, { Component } from 'react';
import './styles/app.css';
import products from './data/products';
import ProductList from './components/ProductList';
import CartList from './components/CartList';

class App extends Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render(){
		const {cart, total} = this.props.appState;
		console.log("app", this.props)
	  return (
	    <div className="App">
	      <ProductList list={products} actions={this.props.actions}/>
	      <CartList cart={cart} actions={this.props.actions} total={total}/>
	    </div>
	  )
	};
}


export default App;
