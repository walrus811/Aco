const { PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const { s3Client } = require("../client");
const { v4: uuidv4 } = require("uuid");
const process = require("process");
const fs = require("fs");
require("dotenv").config({ path: __dirname + "/./../../.env" });

const bucket = process.env.AWS_BUCKET;

(async function () {
  try {
    const writeStream = fs.createWriteStream("../dummy/input.json");
    const data = await s3Client.send(
      new GetObjectCommand({
        Bucket: bucket,
        Key: `voca/input.json`,
      })
    );
    data.Body.pipe(writeStream);
  } catch (error) {
    console.error(error);
  }
})();
