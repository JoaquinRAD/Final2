const handler = require('../backend/createExpense/index').handler;

describe('Create Expense', () => {

    test('Should fail when missing fields', async () => {

        const event = {
            body: JSON.stringify({})
        };

        const response = await handler(event);

        expect(response.statusCode).toBe(400);
    });
});
