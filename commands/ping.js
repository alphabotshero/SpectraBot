const { MessageEmbed } = require("discord.js");
const ms = require('ms');
const sendError = require("../util/error")

module.exports = {
  info: {
    name: "ping",
    description: "shows the bots ping",
    usage: "",
    aliases: [""],
  },

  run: async function (client, message, args) {
    let ping = `**${client.ws.ping}** ms`;
    let omg = new MessageEmbed()
      .setColor("RANDOM")
      .addField("Server Latency is", ping , true)
    return message.channel.send(omg)
  },
};
