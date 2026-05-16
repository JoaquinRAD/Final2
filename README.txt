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

Use command aws configure

Provide the Access Key, Secret Access Key, Region and Output Format

Step 3 - Create the DynamoDB Table

Open AWS Console
Navigate to DynamoDB
Create a table named: Expenses
Set Partition Key: expenseId
Use On-Demand Capacity Mode

Step 4 - Create User Pool

Open Amazon Cognito
Create a new User Pool
Enable: Email authentication, Password sign-in
Create an App Client
Save: User Pool ID, App Client ID

Step 5 - Deploy Functions

Create Lambda functions for:
createExpense
getExpenses
updateExpense
deleteExpense

The required IAM permissions are:
DynamoDB Access
Cloudwatch Logging Permissions

Step 6 - Configure API Gateway

Create a REST API
Add routes:
POST	/expenses
GET	/expenses
PUT	/expenses/{expenseId}
DELETE	/expenses/{expenseId}

Connect each route to the corresponding Lambda function
Enable CORS
Add Cognito Authorizer
Deploy API to the prod stage

Step 7 - Deploy Frontend to S3

Create an S3 bucket
Enable static website hosting
Upload frontend files
Configure bucket policy for public access

Challenges Faced:

SO
MANY
ERRORS

Several was caused by missed commands and other mistakes you should not make but the big one you could make
Make sure its Https, not Http
It is a very small difference but will be the difference between it working and it not working
