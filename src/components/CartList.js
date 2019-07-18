import React from 'react';
import '../styles/cartList.css';

function CartList(props){

    const handleRemove = (item)=>{
        props.actions.removeFromCart(item);
    }

    const generateCart = ()=>{
       return props.cart.length ?
        (  
            props.cart.map(item=>{
                return(
                    <li className="cartList_list__item" key={item.id}>
                        <p><b>{item.title}</b></p>
                        <p><b>Price:</b>  ${item.price}</p> 
                        <p><b>Quantity:</b>  {item.quantity}</p>
                        <button className="btn btn__ember"  onClick={()=>{handleRemove(item)}}>Remove</button>
                    </li>
                )
            })
        ):
        (
            <p>Shopping Cart is empty.</p>
        )
    }
 
     
   return(
        <div className="cartList">
            <h3>Shopping Cart:</h3>
            <ul className="cartList_list">
                {generateCart()}
            </ul>
            <div className="cartList__total">
                <b>Total:</b> ${props.total}
            </div>
        </div> 
   )
}


export default CartList;