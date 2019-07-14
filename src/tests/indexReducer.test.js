import indexReducer from '../indexReducer';

const initialState = {
    cart:[],
    total: 0,
    specialTotal: 0,
    specialPricing: null
}

const products = [
    {id:1,title:'Classic Ad', description: "This is classic ad", price:10},
    {id:2,title:'Stand out Ad', description: "This is stand out ad", price:10},
    {id:3,title:'Premium Ad', description: "This is Premium ad", price:10},
];

describe('Reducer test - Testing initialState, Add_To_Cart and Remove_From_Cart', () => {
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


  it('should update quantity when a product removed and update total', () => {
  	let actions = {
  		type: 'REMOVE_FROM_CART',
  		val: products[0]
  	}
  	newState = indexReducer(newState, actions);
    expect(newState.total).toEqual(10);
	expect(newState.cart.length).toEqual(1);
	expect(newState.cart[0].quantity).toEqual(1);
  });

});


describe('Reducer test - 3for2 logic', () => {
	let newState = initialState;

	it('should reset state and add stand out ad 5 times and total be 30', () => {
		let actions = {
			type: 'ADD_TO_CART',
			val: products[0]
		}
		
		for (var i = 0; i < 3; i++) {
			newState = indexReducer(newState, actions);
		}
		expect(newState.total).toEqual(30.00);
		expect(newState.cart[0].quantity).toEqual(3);
	});

	it('should test 3for2 logic and totol shold be 20', () => {
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
		expect(newState.total).toEqual(30.00);
		expect(newState.specialTotal).toEqual(20.00);
	});

});


describe('Reducer test -  5for4 logic', () => {
  let newState = initialState;

  it('should reset state and add stand out ad 5 times and total be 50', () => {
  	let actions = {
  		type: 'ADD_TO_CART',
  		val: products[1]
  	}
  	
  	for (var i = 0; i < 5; i++) {
	  newState = indexReducer(newState, actions);
	}
  	
    expect(newState.total).toEqual(50.00);
    expect(newState.cart[0].quantity).toEqual(5);
  });

  it('should test 5for4 logic for MYER and standout combination', () => {
  	let specialPricing = {
		id: 1,
		company: 'MYER',
		promotions: {
			'priceDrop': [{newPrice: 10, categoryId: 3}],
			'XforY': [{x: 5, y: 4, categoryId: 2}]
		},
		description: ['5 for 4 deal on Stand out Ads.', 'Discount on Premium Ads where the price drops to $389.99 per ad']
	}

	let actions = {
  		type: 'UPDATE_SPECIAL_PRICING',
  		val: specialPricing
  	}
  	newState = indexReducer(newState, actions);
    expect(newState.total).toEqual(50.00);
    expect(newState.specialTotal).toEqual(40.00);
    expect(newState.cart[0].quantity).toEqual(5);
  });
});


describe('Reducer test - priceDrop logic', () => {
  let newState = initialState;

  it('should reset state and add premium ad 5 times and total be 50', () => {
  	let actions = {
  		type: 'ADD_TO_CART',
  		val: products[2]
  	}
  	
  	for (var i = 0; i < 5; i++) {
	  newState = indexReducer(newState, actions);
	}
  	
    expect(newState.total).toEqual(50.00);
    expect(newState.cart[0].quantity).toEqual(5);
  });

  it('should test price drop logic for MYER and premium ads', () => {
  	let specialPricing = {
		id: 1,
		company: 'MYER',
		promotions: {
			'priceDrop': [{newPrice: 8, categoryId: 3}],
			'XforY': [{x: 5, y: 4, categoryId: 2}]
		},
		description: ['5 for 4 deal on Stand out Ads.', 'Discount on Premium Ads where the price drops to $389.99 per ad']
	}

	let actions = {
  		type: 'UPDATE_SPECIAL_PRICING',
  		val: specialPricing
  	}
  	newState = indexReducer(newState, actions);
    expect(newState.total).toEqual(50.00);
    expect(newState.specialTotal).toEqual(40.00);
    expect(newState.cart[0].quantity).toEqual(5);
  });
});