// https://www.cloudkarafka.com/ הפעלת קפקא במסגרת ספק זה

const uuid = require("uuid");
const Kafka = require("node-rdkafka");

const kafkaConf = {
  "group.id": "call center",
  "metadata.broker.list": "rocket.srvs.cloudkafka.com:9094,rocket.srvs.cloudkafka.com-02:9094,rocket-03.srvs.cloudkafka.com:9094".split(","),
  "socket.keepalive.enable": true,
  "security.protocol": "SASL_SSL",
  "sasl.mechanisms": "SCRAM-SHA-256",
  "sasl.username": "e3c3vg85",//
  "sasl.password": "Cf8meDs5qoxAZZih62ZWGVDXljRrwful",//
  "debug": "generic,broker,security"

};

const prefix = "e3c3vg85-";
const totalCallsTopic = `${prefix}default`;
const callDetailsTopic = `${prefix}new`;
const producer = new Kafka.Producer(kafkaConf);

const genMessage = m => new Buffer.alloc(m.length,m);

producer.on("ready", function(arg) {
  console.log(`producer Ariel is ready.`);
});
producer.connect();

module.exports.publishTotalCalls= function(msg)
{   
  var m = JSON.stringify(msg);
  producer.produce(totalCallsTopic, -1, genMessage(m), uuid.v4());
}

module.exports.publishCallDetails= function(msg) {
  var m = JSON.stringify(msg);
  producer.produce(callDetailsTopic, -1, genMessage(m), uuid.v4());
}