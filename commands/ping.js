const { MessageEmbed } = require("discord.js");
const ms = require('ms');
const sendError = require("../util/error")

module.exports = {
  info: {
    name: "ping",
    description: "Displays bots latency.",
    usage: "s!ping",
    aliases: [""],
  },

  run: async function (client, message, args) {
       let omg = new MessageEmbed()
      .setColor("#58b9ff")
      .setDescription(`<a:pandaping:788652556732596224> Server Latency is, **__${client.ws.ping}__** ms!` , true)
    return message.channel.send(omg)
  },
};
