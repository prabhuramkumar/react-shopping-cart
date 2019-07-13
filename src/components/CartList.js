import React, { Component } from 'react';
import '../styles/cartList.css';

class CartList extends Component{

    handleRemove = (item)=>{
        this.props.actions.removeFromCart(item);
    }
 
    render(){
        let cart = this.props.cart.length ?
            (  
                this.props.cart.map(item=>{
                    return(
                        <li className="cartList_list__item" key={item.id}>
                            <p><b>{item.title}</b></p>
                            <p><b>Price:</b>  ${item.price}</p> 
                            <p><b>Quantity:</b>  {item.quantity}</p>
                            <button className="btn btn__ember"  onClick={()=>{this.handleRemove(item)}}>Remove</button>
                        </li>
                    )
                })
            ):

             (
                <p>Shopping Cart is empty.</p>
             )
       return(
            <div className="cartList">
                <h3>Shopping Cart:</h3>
                <ul className="cartList_list">
                    {cart}
                </ul>
                <div className="cartList__total">
                    <b>Total:</b> ${this.props.total}
                </div>
            </div> 
       )
    }
}


export default CartList;