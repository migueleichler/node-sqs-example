const { Consumer } = require('sqs-consumer');
const AWS = require('aws-sdk');


AWS.config.update({
  region: 'us-east-1',
  accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
  secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'
});


const app = Consumer.create({
  queueUrl: 'http://localstack:4566/000000000000/teste',
  handleMessage: async (message) => {
    console.log(message);
  },
  sqs: new AWS.SQS()
});

app.on('error', (err) => {
  console.error(err.message);
});

app.on('processing_error', (err) => {
  console.error(err.message);
});

app.on('empty', () => {
  console.error('Empty');
});

app.start();
