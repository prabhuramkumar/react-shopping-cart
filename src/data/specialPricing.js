const specialPricing = [
	{
		id: 1,
		company: 'MYER',
		promotions: {
			'priceDrop': [{newPrice: 389.99, categoryId: 3}],
			'XforY': [{x: 5, y: 4, categoryId: 2}]
		},
		description: ['5 for 4 deal on Stand out Ads.', 'Discount on Premium Ads where the price drops to $389.99 per ad']
	},
	{
		id: 2,
		company: 'Axil Coffee Roasters',
		promotions: {
			'priceDrop': [{newPrice: 299.99, categoryId: 2}]
		},
		description: ['Discount on Stand out Ads where the price drops to $299.99 per ad']
	},
	{
		id: 3,
		company: 'SecondBite',
		promotions: {
			'XforY': [{x: 3, y: 2, categoryId: 1}]
		},
		description: ['3 for 2 deal on Classic Ads.']
	}
];
export default specialPricing;