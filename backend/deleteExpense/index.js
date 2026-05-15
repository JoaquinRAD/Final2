const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_NAME;

exports.handler = async (event) => {
    try {
        const userId = event.requestContext.authorizer.claims.sub;
        const expenseId = event.pathParameters.id;

        await dynamoDb.delete({
            TableName: TABLE_NAME,
            Key: {
                userId,
                expenseId
            }
        }).promise();

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ message: 'Expense deleted successfully' })
        };

    } catch (error) {
        console.error(error);

        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Server error' })
        };
    }
};
