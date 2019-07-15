import React, { Component } from 'react';
import '../styles/checkout.css'
import specialPricing from '../data/specialPricing';

class Checkout extends Component{
    constructor() {
        super();
        this.state={promotionText: "", thankYouMessage: ""};
        this.thankYouMessage = "Thanks for shopping with us.";
    }

    handleChange = (e)=>{
        let selectedPricing = specialPricing[e.target.value];
       this.props.actions.updateSpecialPricing(selectedPricing);
       let promotionText = selectedPricing.description.map((item)=>{return item + "\n"});
       this.setState({promotionText});
    }

    //static message display.
    handlePayment = ()=>{
        this.setState({thankYouMessage: this.thankYouMessage})
    }

    promotionList = () => {
         return specialPricing.map((item, index)=>{
            return <option value={index} key={item.id}>{item.company}</option>
        });
    }

    //if special pricing is not avialibale, regular checkut continues.
    specialPricing = () => {
        if(specialPricing && specialPricing.length) {
            return (  
                <div>
                    <p>Check if your company is eligible for the special pricing.</p>
                    <select className="checkout__select" onChange={(e)=>this.handleChange(e)}>
                        <option value={null} >Choose</option>
                        {this.promotionList()}
                    </select>
                    <p>{this.state.promotionText}</p>
                    <div className="checkout__total">
                        <b>Discounted Total:</b> ${this.props.specialTotal}
                    </div>
                </div>
            )
        }
    }
 
    render(){
       return(
            <div className="checkout">
                <h3>Checkout:</h3>
                {this.specialPricing()}
                <button className="btn btn__green btn__green--payment" onClick={()=>this.handlePayment()}>Continue & Pay</button>
                <p className="checkout__thankyou">{this.state.thankYouMessage}</p>
            </div> 
       )
    }
}


export default Checkout;