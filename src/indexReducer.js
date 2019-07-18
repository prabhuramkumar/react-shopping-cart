import promotionalPriceCalculator from './utils/promotionsUtils';

const initialState = {
    cart:[],
    total: 0,
    specialTotal: 0,
    specialPricing: null,
    promotions: null
}

const indexReducer= (state = initialState, action)=>{
let existingItem, newTotal, newItem, updatedCart;

	switch(action.type) {

		case 'ADD_TO_CART':
	     	existingItem= state.cart.find(item=> action.val.id === item.id);

	        if(existingItem) {
	            existingItem.quantity += 1 
	            newTotal = Number((state.total + existingItem.price).toFixed(2));
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
	                specialTotal: promotionalPriceCalculator(state.specialPricing, updatedCart, newTotal)
	            }
            )

		case 'REMOVE_FROM_CART':
	     	 existingItem= state.cart.find(item=> action.val.id === item.id)

	        if(existingItem.quantity > 1) {
	            existingItem.quantity -= 1 
	            newTotal = Number((state.total - existingItem.price).toFixed(2));
	            updatedCart = [...state.cart];
	        } else {
	        	let newItems = state.cart.filter(item=>item.id !== action.val.id)
	            newTotal = Number((state.total - existingItem.price).toFixed(2));
	            updatedCart = [...newItems];
			}

		 	return Object.assign({},
                state,
                {
	                cart: updatedCart,
	                total : newTotal,
	                specialTotal: promotionalPriceCalculator(state.specialPricing, updatedCart, newTotal)
	            }
            )

        case 'UPDATE_SPECIAL_PRICING':
		 	return Object.assign({}, 
                state,
                {
	                specialPricing: action.val,
	                specialTotal: promotionalPriceCalculator(action.val, state.cart, state.total)
	            }
            )

		default:
	    	return state;
    }

}
export default indexReducer;