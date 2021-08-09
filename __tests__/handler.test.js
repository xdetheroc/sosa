const proc = require('../process');

describe('getProducts', () => {
    test('test get all products', async () => {
        const result = await proc.getProducts();
        expect(Array.isArray(result)).toBe(true);
    })
})