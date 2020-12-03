const TopicInterface  = require("../sqs/interface");


class PayTopic extends TopicInterface {

    constructor() {
        super(process.env.QUEUE_URL);
    }

    handler(){
        console.log('Pay');
    }

}

module.exports = PayTopic