const { v4 } = require('uuid');
const AWS = require('aws-sdk');

const addTask = async (event) => {

    console.log("entro a addTask");

    const dynamodb = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

    const { title, description } = JSON.parse(event.body);

    const createdAt = new Date().toISOString();

    const id = v4();
  
    console.log("created id: ", id);


    const newTask = {
        id,
        title,
        description,
        createdAt,
    };

    await dynamodb
    .put({
      TableName: "TaskTable",
      Item: newTask,
    })
    .promise();
    

  return {
    statusCode: 200,
    body: JSON.stringify(newTask),
  };
};

module.exports = { 
    addTask,
}