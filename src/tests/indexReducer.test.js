import indexReducer from '../indexReducer';

const initialState = {
    cart:[],
    total: 0,
    specialTotal: 0,
    specialPricing: null
}

describe('shopping cart reducer', () => {

  it('should return the initial state', () => {
    expect(indexReducer(undefined, {})).toEqual(initialState);
  });

});