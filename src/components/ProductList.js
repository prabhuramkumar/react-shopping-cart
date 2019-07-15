import React, { Component } from 'react';
import '../styles/productList.css';
import products from '../data/products';

 class ProductList extends Component{
    constructor() {
        super();
        this.state={showProducts: false, listState: "loading"};
        this.errorMessage = 'Oops! Something went wrong. Please try Again Later';
    }
    
    handleClick = (item)=>{
        this.props.actions.addToCart(item); 
    }

    componentDidMount () { 
      //API call goes here
      if(products && products.length)
      {
        this.setState({showProducts: true});
      }else{
        this.setState({listState: this.errorMessage});
      }
    }

    render(){
      let itemList;
      if(this.state.showProducts) {
         itemList = products.map(item=>{
            return(
              <div className="productList__product" key={item.id}>
                <p className="productList__title">{item.title}</p>
                <p>{item.description}</p>
                <p className="productList__price">Price: ${item.price}</p>
                <button className="btn btn__green" onClick={()=>{this.handleClick(item)}}>Add to Cart</button>
              </div>
            )
        })
      }else {
        return(<div>{this.state.listState}</div>)
      }

        return(
            <div className="productList">
              <h2 className="productList__title">Our Products</h2>
              <div className="productList__container">
                {itemList}
              </div>
            </div>
        )
    }
}

export default ProductList;