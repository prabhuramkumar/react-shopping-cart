const initialState = {
    cart:[],
    total: 0
}

const indexReducer= (state = initialState, action)=>{
let existedItem, newTotal, newItem, updatedCart;;

	switch(action.type) {

		case 'ADD_TO_CART':
	     	existedItem= state.cart.find(item=> action.val.id === item.id);

	        if(existedItem) {
	            existedItem.quantity += 1 
	            newTotal = state.total + existedItem.price ;
            	updatedCart = [...state.cart];
	        } else {
	            newItem =action.val
	            newItem.quantity = 1;
	            newTotal = state.total + newItem.price ;
	            updatedCart = [...state.cart, newItem];
			}
			return{
                ...state,
                cart: updatedCart,
                total : newTotal
            }

		case 'REMOVE_FROM_CART':
		console.log("val", action.val)
	     	 existedItem= state.cart.find(item=> action.val.id === item.id)

	        if(existedItem.quantity > 1) {
	            existedItem.quantity -= 1 
	            newTotal = state.total - existedItem.price;
	            updatedCart = [...state.cart];
	            console.log("updatedCart",updatedCart);
	        } else {
	        	let newItems = state.cart.filter(item=>item.id !== action.val.id)
	            newTotal = state.total - existedItem.price;
	            updatedCart = [...newItems];
			}

		 	return{
                ...state,
                cart: updatedCart,
                total : newTotal
            }

		default:
	    	return state;
    }

}
export default indexReducer;