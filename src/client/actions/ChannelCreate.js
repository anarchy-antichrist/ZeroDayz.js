const Action = require('./Action');

class ChannelCreateAction extends Action {
  handle(data) {
    const client = this.client;
    const channel = client.dataManager.newChannel(data);
    try {
      return { channel };
    } catch (error){
      if(error){
        console.error
      }
    }
  }
}

module.exports = ChannelCreateAction;
