const { MessageEmbed } = require("discord.js");
const ms = require('ms');
const sendError = require("../util/error")

module.exports = {
  info: {
    name: "ping",
    description: "displays bots latency",
    usage: "",
    aliases: [""],
  },

  run: async function (client, message, args) {
       let omg = new MessageEmbed()
      .setColor("#2C2F33")
      .setDescription(`:ping_pong: Server Latency is, **__${client.ws.ping}__**ms!` , true)
    return message.channel.send(omg)
  },
};
