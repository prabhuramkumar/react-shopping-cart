import specialPricingCalculator from './utils/specialPricingCalculator';

const initialState = {
    cart:[],
    total: 0,
    specialTotal: 0,
    specialPricing: null
}

const indexReducer= (state = initialState, action)=>{
let existedItem, newTotal, newItem, updatedCart;

	switch(action.type) {

		case 'ADD_TO_CART':
	     	existedItem= state.cart.find(item=> action.val.id === item.id);

	        if(existedItem) {
	            existedItem.quantity += 1 
	            newTotal = Number((state.total + existedItem.price).toFixed(2));
            	updatedCart = [...state.cart];
	        } else {
	            newItem =action.val;
	            newItem.quantity = 1;
	            newTotal = Number((state.total + newItem.price).toFixed(2));
	            updatedCart = [...state.cart, newItem];
			}
			return Object.assign({},
                state,
                {
	                cart: updatedCart,
	                total : newTotal,
	                specialTotal: specialPricingCalculator(state.specialPricing, updatedCart, newTotal)
	            }
            )

		case 'REMOVE_FROM_CART':
	     	 existedItem= state.cart.find(item=> action.val.id === item.id)

	        if(existedItem.quantity > 1) {
	            existedItem.quantity -= 1 
	            newTotal = Number((state.total - existedItem.price).toFixed(2));
	            updatedCart = [...state.cart];
	        } else {
	        	let newItems = state.cart.filter(item=>item.id !== action.val.id)
	            newTotal = Number((state.total - existedItem.price).toFixed(2));
	            updatedCart = [...newItems];
			}

		 	return Object.assign({},
                state,
                {
	                cart: updatedCart,
	                total : newTotal,
	                specialTotal: specialPricingCalculator(state.specialPricing, updatedCart, newTotal)
	            }
            )

        case 'UPDATE_SPECIAL_PRICING':
		 	return Object.assign({}, 
                state,
                {
	                specialPricing: action.val,
	                specialTotal: specialPricingCalculator(action.val, state.cart, state.total)
	            }
            )

		default:
	    	return state;
    }

}
export default indexReducer;