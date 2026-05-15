const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_NAME;

exports.handler = async (event) => {
    try {
        const body = JSON.parse(event.body);

        const { date, amount, category, description } = body;

        if (!date || !amount || !category) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Missing required fields' })
            };
        }

        const userId = event.requestContext.authorizer.claims.sub;

        const expense = {
            userId,
            expenseId: uuidv4(),
            date,
            amount,
            category,
            description: description || '',
            createdAt: new Date().toISOString()
        };

        await dynamoDb.put({
            TableName: TABLE_NAME,
            Item: expense
        }).promise();

        return {
            statusCode: 201,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(expense)
        };

    } catch (error) {
        console.error(error);

        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Server error' })
        };
    }
};
