const { PutObjectCommand } = require("@aws-sdk/client-s3");
const { s3Client } = require("../client");
const { v4: uuidv4 } = require("uuid");
const process = require("process");
const fs = require("fs");
require("dotenv").config({ path: __dirname + "/./../.env" });

const bucket = process.env.AWS_BUCKET;

(async function () {
  try {
    const readStream = fs.createReadStream("../../input/voca.json");
    const data = await s3Client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: `voca/v-${uuidv4()}.json`,
        Body: readStream,
      })
    );
    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();
 