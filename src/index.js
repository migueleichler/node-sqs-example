const startConsumers = require('./sqs/consumer')
const SaleTopic = require('./subs/sale')
const PayTopic = require('./subs/pay')

const topics = []


topics.push(new SaleTopic())
topics.push(new PayTopic())

startConsumers(topics)
