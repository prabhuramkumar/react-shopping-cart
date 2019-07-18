const specialPricing = [
	{
		id: 1,
		promotionReference: 'RRD4D32',
		promotions: {
			'percentageDiscount': [{percentage: 10, minimumPurchase: 1000}]
		},
		description: ['10% discount for orders above $1000 (pre-discount)']
	},
	{
		id: 2,
		promotionReference: '44F4T11',
		promotions: {
			'percentageDiscount': [{percentage: 15, minimumPurchase: 1500}]
		},
		description: ['15% discount for orders above $1500 (pre-discount)']
	},
	{
		id: 3,
		promotionReference: 'FF9543D1',
		promotions: {
			'priceDrop': [{newPrice: 8.99, categoryId: 'docgen', depedentCategoryId: 'docgen', minimumPurchase: 10}]
		},
		description: ['Price drops to 8.99 for docgen when atleast 10 docgen are purchased']
	},
	{
		id: 4,
		promotionReference: 'YYGWKJD',
		promotions: {
			'priceDrop': [{newPrice: 89.99, categoryId: 'form', depedentCategoryId: 'wf', minimumPurchase: 1}]
		},
		description: ['Price drops to 89.99 for form when atleast 1 wf is purchased']
	}
];
export default specialPricing;