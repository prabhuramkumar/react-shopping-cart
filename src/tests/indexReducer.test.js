import indexReducer from '../indexReducer';

const initialState = {
    cart:[],
    total: 0,
    specialTotal: 0,
    specialPricing: null,
    promotions: null
}

const mockProducts = [
    {id:1,title:'wf', description: "Workflow", price:10},
    {id:2,title:'docgen', description: "Document Generation", price:10},
    {id:3,title:'form', description: "Form", price:10},
]

  
let newState;

describe('Reducer test - Testing initialState, Add_To_Cart and Remove_From_Cart', () => {
  it('should return the initial state', () => {
    expect(indexReducer(undefined, {})).toEqual(initialState);
  });

  it('should add a product to the state and update total', () => {
  	let actions = {
  		type: 'ADD_TO_CART',
  		val: mockProducts[0]
  	}
  	newState = indexReducer(initialState, actions);
    expect(newState.total).toEqual(10);
	expect(newState.cart.length).toEqual(1);
  });

  it('should update quantity when same product added again and should update total', () => {
  	let actions = {
  		type: 'ADD_TO_CART',
  		val: mockProducts[0]
  	}
  	newState = indexReducer(newState, actions);
    expect(newState.total).toEqual(20);
	 expect(newState.cart.length).toEqual(1);
	 expect(newState.cart[0].quantity).toEqual(2);
  });


  it('should update quantity when a product is removed and should update total', () => {
  	let actions = {
  		type: 'REMOVE_FROM_CART',
  		val: mockProducts[0]
  	}
  	newState = indexReducer(newState, actions);
    expect(newState.total).toEqual(10);
	 expect(newState.cart.length).toEqual(1);
	 expect(newState.cart[0].quantity).toEqual(1);
  });

});


describe('Reducer test - priceDrop logic', () => {
  beforeEach(() => {
     newState = initialState;
  });

  it('should test price drop when it discount depends on the same product', () => {
    let actions1 = {
      type: 'ADD_TO_CART',
      val: mockProducts[0]
    }

    for(let i=0; i<6; i++) {
     newState = indexReducer(newState, actions1);
    }
    
    let actions = {
        type: 'UPDATE_SPECIAL_PRICING',
        val: {
          id: 1,
          promotionReference: 'YYGWKJD',
          promotions: {
            'priceDrop': [{newPrice: 8, categoryId: 1, depedentCategoryId: 1, minimumPurchase: 4}]
          },
          description: ['Price drops']
        }
      }
    newState = indexReducer(newState, actions);
    expect(newState.total).toEqual(60.00);
    expect(newState.specialTotal).toEqual(48.00);
  });

  it('should test price drop when discount depends on other product', () => {
  	let specialPricing = {
  		id: 1,
  		promotionReference: 'YYGWKJD',
  		promotions: {
  			'priceDrop': [{newPrice: 8, categoryId: 3, depedentCategoryId: 1, minimumPurchase: 1}]
  		},
  		description: ['Price drops to 89.99 for form when atleast 1 wf is purchased']
  	}
    let actions1 = {
      type: 'ADD_TO_CART',
      val: mockProducts[2]
    }

    let actions2 = {
      type: 'ADD_TO_CART',
      val: mockProducts[0]
    }
    newState = indexReducer(newState, actions1);
    newState = indexReducer(newState, actions2);
    let actions = {
  		type: 'UPDATE_SPECIAL_PRICING',
  		val: {
              id: 2,
              promotionReference: 'YYGWKJD',
              promotions: {
                'priceDrop': [{newPrice: 8, categoryId: 3, depedentCategoryId: 1, minimumPurchase: 1}]
              },
              description: ['Price drops']
            }
  	  }
  	newState = indexReducer(newState, actions);
    expect(newState.total).toEqual(20.00);
    expect(newState.specialTotal).toEqual(18.00);
  });
});


describe('Reducer test - percentage discount logic', () => {
  beforeEach(() => {
     newState = initialState;
  });

  it('should test 10% percenatge discount', () => {
    let actions1 = {
      type: 'ADD_TO_CART',
      val: mockProducts[0]
    }

    for(let i=0; i<5; i++) {
     newState = indexReducer(newState, actions1);
    }
    
    let actions = {
        type: "UPDATE_SPECIAL_PRICING",
        val: {
            id: 1,
            promotionReference: 'RRD4D32',
            promotions: {
              'percentageDiscount': [{percentage: 10, minimumPurchase: 50}]
            },
            description: ['10% discount']
          }
    }
    newState = indexReducer(newState, actions);
    expect(newState.total).toEqual(50.00);
    expect(newState.specialTotal).toEqual(45.00);
  });

  it('should test 15% percenatge discount', () => {
    let actions = {
      type: 'ADD_TO_CART',
      val: mockProducts[0]
    }

    for(let i=0; i<10; i++) {
     newState = indexReducer(newState, actions);
    }
    
    actions = {
        type: "UPDATE_SPECIAL_PRICING",
        val: {
            id: 1,
            promotionReference: 'RRD4D32',
            promotions: {
              'percentageDiscount': [{percentage: 15, minimumPurchase: 100}]
            },
            description: ['10% discount']
          }
    }
    newState = indexReducer(newState, actions);
    expect(newState.total).toEqual(100.00);
    expect(newState.specialTotal).toEqual(85.00);
  });

});