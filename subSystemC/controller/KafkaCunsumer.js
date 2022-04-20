// // const uuid = require("uuid");
// // const Kafka = require("node-rdkafka");

// // const kafkaConf = {
// //     "group.id": "cloudkarafka-example",
// //     "metadata.broker.list": "rocket.srvs.cloudkafka.com:9094,rocket.srvs.cloudkafka.com-02:9094,rocket-03.srvs.cloudkafka.com:9094".split(","),//"moped-01.srvs.cloudkafka.com:9094,moped-02.srvs.cloudkafka.com:9094,moped-03.srvs.cloudkafka.com:9094".split(","),
// //     "socket.keepalive.enable": true,
// //     "security.protocol": "SASL_SSL",
// //     "sasl.mechanisms": "SCRAM-SHA-256",
// //     "sasl.username": "e3c3vg85",
// //     "sasl.password": "Cf8meDs5qoxAZZih62ZWGVDXljRrwful",
// //     "debug": "generic,broker,security"
// // };

// // const topic = 'Mongo';
// // const consumer = new Kafka.KafkaConsumer(kafkaConf);

// // consumer.connect();

// // consumer.on("ready", function(arg) {
// //   console.log(`Mongo consumer consuming on topic:`, topic);
// //   consumer.subscribe([topic]);
// //   consumer.consume();
// // });

// // module.exports.consumer = consumer;

// // https://www.cloudkarafka.com/ הפעלת קפקא במסגרת ספק זה

// const uuid = require("uuid");
// const Kafka = require("node-rdkafka");

// const kafkaConf = {
//     "group.id": "call center",
//     "metadata.broker.list": "rocket.srvs.cloudkafka.com:9094",//"moped-01.srvs.cloudkafka.com:9094,moped-02.srvs.cloudkafka.com:9094,moped-03.srvs.cloudkafka.com:9094".split(","),
//     "socket.keepalive.enable": true,
//     "security.protocol": "SASL_SSL",
//     "sasl.mechanisms": "SCRAM-SHA-256",
//     "sasl.username": "e3c3vg85",
//     "sasl.password": "Cf8meDs5qoxAZZih62ZWGVDXljRrwful",
//     "debug": "generic,broker,security"
// };


// const prefix = "e3c3vg85-";
// const topic = `${prefix}default`;
// const producer = new Kafka.Producer(kafkaConf);

// const genMessage = m => new Buffer.alloc(m.length,m);
// //const prefix = process.env.CLOUDKARAFKA_USERNAME;

// const topics = [topic];
// const consumer = new Kafka.KafkaConsumer(kafkaConf, {
//   "auto.offset.reset": "beginning"
// });

// consumer.on("error", function(err) {
//   console.error(err);
// });
// consumer.on("ready", function(arg) {
//   console.log(`Consumer ${arg.name} ready`);
//   consumer.subscribe(topics);
//   consumer.consume();
// });

// consumer.on("data", function(m) {
//  console.log(m.value.toString());
// });
// consumer.on("disconnected", function(arg) {
//   process.exit();
// });
// consumer.on('event.error', function(err) {
//   console.error(err);
//   process.exit(1);
// });
// consumer.on('event.log', function(log) {
//   console.log(log);
// });
// consumer.connect();
const uuid = require("uuid");
const Kafka = require("node-rdkafka");

const kafkaConf = {
      "group.id": "call center",
      "metadata.broker.list": "rocket.srvs.cloudkafka.com:9094",//"moped-01.srvs.cloudkafka.com:9094,moped-02.srvs.cloudkafka.com:9094,moped-03.srvs.cloudkafka.com:9094".split(","),
      "socket.keepalive.enable": true,
      "security.protocol": "SASL_SSL",
      "sasl.mechanisms": "SCRAM-SHA-256",
      "sasl.username": "e3c3vg85",
      "sasl.password": "Cf8meDs5qoxAZZih62ZWGVDXljRrwful",
      "debug": "generic,broker,security"
};

const prefix = "e3c3vg85-";
const topic = `${prefix}default`;
const producer = new Kafka.Producer(kafkaConf);

const genMessage = m => new Buffer.alloc(m.length,m);

const consumer = new Kafka.KafkaConsumer(kafkaConf);

consumer.connect();

consumer.on("ready", function(arg) {
  console.log(`mongo consumer consuming on topic: `, topic);
  consumer.subscribe([topic]);
  consumer.consume();
});
consumer.on("data", function(m) {
  console.log(m.value.toString());
});

module.exports.consumer = consumer;