import React, { Component } from 'react';
import '../styles/productList.css'

 class ProductList extends Component{
    
    handleClick = (item)=>{
        this.props.actions.addToCart(item); 
    }

    render(){
      console.log("ProductList", this.props);
        let itemList = this.props.list.map(item=>{
            return(
              <div className="productList__product" key={item.id}>
                <p className="productList__title">{item.title}</p>
                <p>{item.description}</p>
                <p className="productList__price">Price: ${item.price}</p>
                <button className="btn btn__green" onClick={()=>{this.handleClick(item)}}>Add to Cart</button>
              </div>
            )
        })

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