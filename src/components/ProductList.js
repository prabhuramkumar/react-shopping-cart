import React from 'react';
import '../styles/productList.css';
import products from '../data/products';

function ProductList(props){
    
    const handleClick = (item)=>{
        props.actions.addToCart(item); 
    }

    const generateProductList = ()=> {
      if(products && products.length) {
         return products.map(item=>{
            return(
              <div className="productList__product" key={item.id}>
                <p className="productList__title">{item.title}</p>
                <p className="productList__price">Price: ${item.price}</p>
                <button className="btn btn__green" onClick={()=>{handleClick(item)}}>Add to Cart</button>
              </div>
            )
        })
      }else {
          throw new Error('No Product');
        }
    }

    return(
        <div className="productList">
          <h2 className="productList__title">Our Products</h2>
          <div className="productList__container">
            {generateProductList()}
          </div>
        </div>
    )
}

export default ProductList;