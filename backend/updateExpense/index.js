const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_NAME;

exports.handler = async (event) => {
    try {
        const body = JSON.parse(event.body);

        const { date, amount, category, description } = body;

        const userId = event.requestContext.authorizer.claims.sub;
        const expenseId = event.pathParameters.id;

        await dynamoDb.update({
            TableName: TABLE_NAME,
            Key: {
                userId,
                expenseId
            },
            UpdateExpression: 'SET #d = :date, amount = :amount, category = :category, description = :description',
            ExpressionAttributeNames: {
                '#d': 'date'
            },
            ExpressionAttributeValues: {
                ':date': date,
                ':amount': amount,
                ':category': category,
                ':description': description
            }
        }).promise();

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ message: 'Expense updated successfully' })
        };

    } catch (error) {
        console.error(error);

        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Server error' })
        };
    }
};
