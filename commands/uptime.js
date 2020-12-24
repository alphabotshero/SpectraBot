const { MessageEmbed } = require("discord.js");
const ms = require('ms');
const sendError = require("../util/error")

module.exports = {
  info: {
    name: "uptime",
    description: "shows the bots uptime.",
    usage: "",
    aliases: ["up"],
  },

  run: async function (client, message, args) {
    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    let lmao = new MessageEmbed()
      .setColor("#58b9ff")
      .setDescription( `${uptime}`)
    return message.channel.send(lmao)
  },
};
