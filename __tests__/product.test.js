const productDAO = require('../daos/products');

describe('Get Products', () => {
    test('test get all products', async () => {
        const result = await productDAO.getProducts();
        expect(Array.isArray(result)).toBe(true);
    })
});
