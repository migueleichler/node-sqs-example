const { Consumer } = require('sqs-consumer');
const {sqs, queueUrl} = require('./config');


function createConsumer(consumer) {
  return Consumer.create({
    queueUrl: consumer.url,
    handleMessage: async (message) => {
      consumer.handler(message);
    },
    sqs: sqs
  });
}


function startConsumers(consumers) {

  for (let i = 0; i < consumers.length; i++) {

    const consumer = createConsumer(consumers[i])

    consumer.on('error', (err) => {
      console.error(err.message);
    });

    consumer.on('processing_error', (err) => {
      console.error(err.message);
    });

    consumer.on('empty', () => {
      console.error('Empty ' + i.toString());
    });

    consumer.start();
  }
}

module.exports = {startConsumers}
