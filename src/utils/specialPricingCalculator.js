const specialPricingCalculator = function (specialPricing, cart, total) { 
	if (!specialPricing){
		return false;
	}
	let selectedPromotions = specialPricing.promotions;
	let totalOverallDiscount = 0;

	if(selectedPromotions.XforY) {
		totalOverallDiscount += XforY(selectedPromotions.XforY, cart);
	}

	if(selectedPromotions.priceDrop) {
		totalOverallDiscount += priceDrop(selectedPromotions.priceDrop, cart);
	}
	return Number(total - totalOverallDiscount).toFixed(2);
};

const XforY = function(promotions, cart) {
	let discount = 0;
	promotions.forEach(promotion => {
	  	cart.forEach(product=>{
		  	let XYDiff = promotion.x-promotion.y, count = 0;
		  	let discountRange = promotion.x;
			if(product.id === promotion.categoryId) {
				 do{
					count++;
					if(count === discountRange) {
						discountRange = discountRange*2;
						discount += product.price*(XYDiff);
					}
				}while(count<product.quantity)
			}
		});
	});
	console.log("xfory", discount);
	return discount;
}

const priceDrop = function(promotions, cart) {
	let discount = 0;
	promotions.forEach(promotion => {
	  	cart.forEach(product=>{
			if(product.id === promotion.categoryId) {
				discount += (product.price-promotion.newPrice) * product.quantity;
			}
		});
	});
	return discount;
}

export default specialPricingCalculator;
