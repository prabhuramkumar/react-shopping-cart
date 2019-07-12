const initialState = {
    cart:[],
    total: 0
}

const indexReducer= (state = initialState, action)=>{

	switch(action.type) {

		case 'ADD_TO_CART':
	     	let existedItem= state.cart.find(item=> action.val.id === item.id)

	        if(existedItem) {
	            existedItem.quantity += 1 
	            let newTotal = state.total + existedItem.price ;

	            return{
	                ...state,
	                cart: [...state.cart],
	                total: newTotal
                }
	        } else {
	            let newItem =action.val
	            newItem.quantity = 1;
	            let newTotal = state.total + newItem.price 
	            
	            return{
	                ...state,
	                cart: [...state.cart, newItem],
	                total : newTotal
	            }
			}

		default:
	    	return state;
    }

}
export default indexReducer;