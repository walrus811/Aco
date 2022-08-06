const { ListBucketsCommand } = require("@aws-sdk/client-s3");
const { s3Client } = require("../client");

(async function () {
  try {
    const data = await s3Client.send(new ListBucketsCommand({}));
    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();
