export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_SPECIAL_PRICING = 'UPDATE_SPECIAL_PRICING';

export const addToCart= (val)=>{
    return{
        type: ADD_TO_CART,
        val
    }
}
export const removeFromCart=(val)=>{
    return{
        type: REMOVE_FROM_CART,
        val
    }
}

export const updateSpecialPricing=(val)=>{
    return{
        type: UPDATE_SPECIAL_PRICING,
        val
    }
}


