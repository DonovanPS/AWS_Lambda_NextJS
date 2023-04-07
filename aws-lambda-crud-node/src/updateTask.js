
const AWS = require("aws-sdk");

const updateTask = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });
    
    const { id } = event.pathParameters;

    const {  title, description } = JSON.parse(event.body);

    await dynamodb
        .update({
            TableName: "TaskTable",
            Key: { id },
            UpdateExpression: "set  title = :title, description = :description",
            ExpressionAttributeValues: {
               
                ":title": title,
                ":description": description,
            },
            ReturnValues: "ALL_NEW",
        })
        .promise();

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "task updated",
        }),
    };
};

module.exports = {
    updateTask,
};