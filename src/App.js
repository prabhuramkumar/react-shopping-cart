import React, { Component, lazy, Suspense } from 'react';
import './styles/app.css';
import ErrorBoundary  from './components/ErrorBoundary';
const ProductList = lazy(() => import('./components/ProductList'));
const CartList = lazy(() => import('./components/CartList'));
const Checkout = lazy(() => import('./components/Checkout'));


class App extends Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render(){
	  const {cart, total, specialTotal} = this.props.appState;
	  return (
	    <div className="app">
	    	<ErrorBoundary>
	    		<Suspense fallback={<div>Loading...</div>}>
	      			<ProductList actions={this.props.actions}/>
	      			<CartList cart={cart} actions={this.props.actions} total={total}/>
	      			<Checkout cart={cart} specialTotal={specialTotal} total={total} actions={this.props.actions}/>
	      		</Suspense>
	      	</ErrorBoundary>
	    </div>
	  )
	};
}


export default App;
