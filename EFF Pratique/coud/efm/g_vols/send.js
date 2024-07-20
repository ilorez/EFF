
const amqp = require("amqplib/callback_api");

const envoye_notification = async () => {

  amqp.connect("amqp://localhost", function (error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }
      var queue = "file_update_vols";
      var msg = "un vol est mise a jour";
  
      channel.assertQueue(queue, {
        durable: false,
      });
  
      channel.sendToQueue(queue, Buffer.from(msg));
      console.log(" [x] Sent %s", msg);
    });
    setTimeout(function () {
      connection.close();
      process.exit(0);
    }, 500);
  });
}

module.exports = envoye_notification;
