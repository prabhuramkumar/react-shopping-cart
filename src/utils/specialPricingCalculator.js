const specialPricingCalculator = function (specialPricing, cart, total) { 
	if (!specialPricing)
		return false;

	let selectedPromotions = specialPricing.promotions;
	let totalOverallDiscount = 0;

	if(selectedPromotions.percentageDiscount) 
		totalOverallDiscount += percentageDiscount(selectedPromotions.percentageDiscount, total);

	if(selectedPromotions.priceDrop) 
		totalOverallDiscount += priceDrop(selectedPromotions.priceDrop, cart);
	
	return Number((total - totalOverallDiscount).toFixed(2));
};


// percentageDiscount function calculates the discount based on promotion attributes.
// Takes into consideration minimum quantity purchased and applies the discount.
const percentageDiscount = function(promotions, total) {
	let discount = 0;
	promotions.forEach(promotion => {
		if(total >= promotion.minimumPurchase) 
			discount += (total*promotion.percentage/100)
	});

	return discount;
}

// Pricedrop function calculates the discount based on promotion
// Takes into consideration if priceDrop of one product depedents on quantity purchased of other product.
// if priceDrop doesn't depedent on another prodcut then same product would be treated as dependent product.
const priceDrop = function(promotions, cart) {
	let discount = 0, dependentProductQuantity, productToDiscount;
	promotions.forEach(promotion => {
	  	cart.forEach(product=>{
	  		if(!dependentProductQuantity)
	  			dependentProductQuantity = product.id === promotion.depedentCategoryId ? product.quantity : dependentProductQuantity;
			if(!productToDiscount)
				productToDiscount =	product.id === promotion.categoryId ? product : null;
		});
		if(productToDiscount && dependentProductQuantity >= promotion.minimumPurchase) 
			discount += (productToDiscount.price-promotion.newPrice) * productToDiscount.quantity;
	});

	return discount;
}

export default specialPricingCalculator;
