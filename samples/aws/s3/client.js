const { S3Client } = require("@aws-sdk/client-s3");
const process = require("process");
require("dotenv").config({ path: __dirname + "/./../../../.env" });

const accessKeyId = process.env.AWS_ACCESSKEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: { accessKeyId, secretAccessKey },
});

exports.s3Client = s3Client;
