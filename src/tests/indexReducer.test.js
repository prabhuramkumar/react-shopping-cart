import indexReducer from '../indexReducer';

describe('shopping cart reducer', () => {
	const products = [
	    {id:1,title:'Classic Ad', description: "This is classic ad", price:10},
	    {id:2,title:'Stand out Ad', description: "This is stand out ad", price:10},
	    {id:3,title:'Premium Ad', description: "This is Premium ad", price:10},
	];

	const initialState = {
	    cart:[],
	    total: 0,
	    specialTotal: 0,
	    specialPricing: null
	}
	let newState;

  it('should return the initial state', () => {
    expect(indexReducer(undefined, {})).toEqual(initialState);
  });

  it('should add a product to the state and update total', () => {
  	let actions = {
  		type: 'ADD_TO_CART',
  		val: products[0]
  	}
  	newState = indexReducer(initialState, actions);
    expect(newState.total).toEqual(10);
	expect(newState.cart.length).toEqual(1);
  });

  it('should update quantity when same product added again and update total', () => {
  	let actions = {
  		type: 'ADD_TO_CART',
  		val: products[0]
  	}
  	newState = indexReducer(newState, actions);
    expect(newState.total).toEqual(20);
	expect(newState.cart.length).toEqual(1);
	expect(newState.cart[0].quantity).toEqual(2);
  });

  it('should update special pricing and update specialTotal', () => {
  	let specialPricing = {
		id: 3,
		company: 'SecondBite',
		promotions: {
			'XforY': [{x: 3, y: 2, categoryId: 1}]
		},
		description: ['3 for 2 deal on Classic Ads.']
	}

	let actions = {
  		type: 'UPDATE_SPECIAL_PRICING',
  		val: specialPricing
  	}
  	newState = indexReducer(newState, actions);
    expect(newState.specialPricing.id).toEqual(3);
    expect(newState.specialTotal).toEqual(20.00);
  });

  it('should 3for2 offer applied once when 3 quantities added', () => {
  	let actions = {
  		type: 'ADD_TO_CART',
  		val: products[0]
  	}
  	
  	newState = indexReducer(newState, actions);
    expect(newState.specialTotal).toEqual(20.00);
    expect(newState.cart[0].quantity).toEqual(3);
  });

  it('should 3for2 offer applied once when 4 quantities added', () => {
  	let actions = {
  		type: 'ADD_TO_CART',
  		val: products[0]
  	}
  	
  	newState = indexReducer(newState, actions);
    expect(newState.specialTotal).toEqual(30.00);
    expect(newState.cart[0].quantity).toEqual(4);
  });

});