const consumer = require('./sqs/consumer')
const SaleTopic = require('./subs/sale')
const PayTopic = require('./subs/pay')

const queuesUrls = []


queuesUrls.push(new SaleTopic())
queuesUrls.push(new PayTopic())

consumer.startConsumers(queuesUrls)
