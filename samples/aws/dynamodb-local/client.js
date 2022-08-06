const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocument } = require("@aws-sdk/lib-dynamodb");

const ddbClient = new DynamoDBClient({
  region: "us-east-1",
  endpoint: "http://localhost:8000",
  credentials: {
    accessKeyId: "DUMMYIDEXAMPLE",
    secretAccessKey: "DUMMYEXAMPLEKEY",
  },
});

const ddbDocClient = DynamoDBDocument.from(ddbClient);

exports.ddbClient = ddbClient;
exports.ddbDocClient = ddbDocClient;
