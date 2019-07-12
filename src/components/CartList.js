import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart} from '../actions/cartActions';

class CartList extends Component{

    //to remove the item completely
    handleRemove = (item)=>{
        this.props.actions.removeFromCart(item);
    }
 
    render(){
        console.log("cartlist", this.props);
              
        let cart = this.props.cart.length ?
            (  
                this.props.cart.map(item=>{
                    return(
                        <li key={item.id}>
                                <span className="title">{item.title}</span>
                                <p>{item.description}</p>
                                <p><b>Price:</b>  ${item.price}</p> 
                                <p>
                                    <b>Quantity:</b>  {item.quantity}
                                </p>
                                <button  onClick={()=>{this.handleRemove(item)}}>Remove</button>
                        </li>
                    )
                })
            ):

             (
                <p>Cart is empty.</p>
             )
       return(
                <div>
                    <h5>You have ordered:</h5>
                    <ul>
                        {cart}
                    </ul>
                </div> 
       )
    }
}


export default CartList;