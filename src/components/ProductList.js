import React, { Component } from 'react';
import { addToCart } from '../actions/cartActions'

 class ProductList extends Component{
    
    handleClick = (item)=>{
        this.props.actions.addToCart(item); 
    }

    render(){
      console.log("ProductList", this.props);
        let itemList = this.props.list.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <span className="card-title">{item.title}</span>
                            <button onClick={()=>{this.handleClick(item)}}>Add to Cart</button>
                        </div>
                        <p>Price: ${item.price}</p>
                 </div>

            )
        })

        return(
            <div className="container">
              <h3 className="center">Our Products</h3>
              {itemList}
            </div>
        )
    }
}

export default ProductList;