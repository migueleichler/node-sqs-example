class TopicInterface {
    constructor(url) {
      this.url = url;
    }
  
    handler() {
      throw new Error('Method Not Implemented');
    }
}


module.exports = TopicInterface
