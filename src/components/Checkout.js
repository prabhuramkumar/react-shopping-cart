import React, { Component, useState, useEffect } from 'react';
import '../styles/checkout.css'
import specialPricing from '../data/specialPricing';

function Checkout(props){
    const [messages, setMessage] = useState({promotionText: "", thankYouMessage: ""});
    const [promotions, setPromotions] = useState(null);
    const thankYouMessage = "Thanks for shopping with us.";

    useEffect(() => {
        setPromotions(specialPricing);
    });

    const handleChange = (e)=>{
        let selectedPricing = specialPricing[e.target.value];
        props.actions.updateSpecialPricing(selectedPricing);
        let promotionText = selectedPricing && selectedPricing.description.map((item)=>{return item + "\n"});
        setMessage({promotionText})
    }

    //static message display.
    const handlePayment = ()=>{
        setMessage({thankYouMessage})
    }

    const promotionOptions = ()=>{
        return promotions.map((item, index)=>{
            return <option value={index} key={item.id}>{item.promotionReference}</option>
        });
    }

    
    const generatePromotionList = () => {
        if(promotions && promotions.length) {
            return (  
                <div>
                    <p>Check if you are eligible for the special pricing with your promotion reference.</p>
                    <select className="checkout__select" onChange={(e)=>handleChange(e)}>
                        <option value={null} >Choose</option>
                        {promotionOptions()}
                    </select>
                    <p>{messages.promotionText}</p>
                    <div className="checkout__total">
                        <b>Discounted Total:</b> ${props.specialTotal}
                    </div>
                </div>
            )
        }
    }
 
   return(
        <div className="checkout">
            <h3>Checkout:</h3>
            {generatePromotionList()}
            <button className="btn btn__green btn__green--payment" onClick={()=>handlePayment()}>Continue & Pay</button>
            <p className="checkout__thankyou">{messages.thankYouMessage}</p>
        </div> 
   )
}


export default Checkout;