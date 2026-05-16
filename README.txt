Objectives:
Allow the user to track their expenses in a user friendly manner through serverless support

AWS Services:
S3
API Gateway
Lambda
DynamoDB
Cognito
IAM Roles
CloudWatch

Frontend:
The frontend architecture is split between Javascript, HTML and CSS.
Used to handle the log in and registering users
Allowing people to categorize their expenses
Sending things to the backend API

Backend:
This is all the Lambda functions
createExpense
deleteExpense
getExpenses
updateExpense

Set up instructions:

Step 1 - Clone the repository

git clone https://github.com/your-username/aws-expense-tracker.git
cd aws-expense-tracker

Step 2 - Configure AWS CLI
