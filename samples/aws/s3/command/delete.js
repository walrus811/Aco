const { DeleteObjectCommand } = require("@aws-sdk/client-s3");
const { s3Client } = require("../client");
const { v4: uuidv4 } = require("uuid");
const process = require("process");
const fs = require("fs");
require("dotenv").config({ path: __dirname + "/./../../.env" });

const bucket = process.env.AWS_BUCKET;

(async function () {
  try {
    const data = await s3Client.send(
      new DeleteObjectCommand({
        Bucket: bucket,
        Key: `v-0bc02803-40b3-496f-a79f-7682ac674bd4.json`,
      })
    );
    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();
