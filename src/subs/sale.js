const TopicInterface  = require("../sqs/interface");


class SaleTopic extends TopicInterface {

    constructor() {
        super(process.env.QUEUE_URL);
    }

    handler(){
        console.log('Sale');
    }

}

module.exports = SaleTopic
