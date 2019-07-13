import specialPricingCalculator from './utils/specialPricingCalculator';

const initialState = {
    cart:[],
    total: 0,
    specialTotal: 0,
    specialPricing: null
}

const indexReducer= (state = initialState, action)=>{
let existedItem, newTotal, newItem, updatedCart, specialTotal;

	switch(action.type) {

		case 'ADD_TO_CART':
	     	existedItem= state.cart.find(item=> action.val.id === item.id);

	        if(existedItem) {
	            existedItem.quantity += 1 
	            newTotal = state.total + existedItem.price;
            	updatedCart = [...state.cart];
	        } else {
	            newItem =action.val;
	            newItem.quantity = 1;
	            newTotal = state.total + newItem.price;
	            updatedCart = [...state.cart, newItem];
			}
			return{
                ...state,
                cart: updatedCart,
                total : newTotal,
                specialTotal: specialPricingCalculator(state.specialPricing, updatedCart, newTotal)
            }

		case 'REMOVE_FROM_CART':
	     	 existedItem= state.cart.find(item=> action.val.id === item.id)

	        if(existedItem.quantity > 1) {
	            existedItem.quantity -= 1 
	            newTotal = state.total - existedItem.price;
	            updatedCart = [...state.cart];
	        } else {
	        	let newItems = state.cart.filter(item=>item.id !== action.val.id)
	            newTotal = state.total - existedItem.price;
	            updatedCart = [...newItems];
			}

		 	return{
                ...state,
                cart: updatedCart,
                total : newTotal,
                specialTotal: specialPricingCalculator(state.specialPricing, updatedCart, newTotal)
            }

        case 'UPDATE_SPECIAL_PRICING':
			console.log("specialPricing", action.val)
		 	return{
                ...state,
                specialPricing: action.val,
                specialTotal: specialPricingCalculator(action.val, state.cart, state.total)
            }

		default:
	    	return state;
    }

}
export default indexReducer;