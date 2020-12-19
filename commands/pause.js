const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "pause",
    description: "pauses a song",
    usage: "",
    aliases: ["pause"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
        try{
      serverQueue.connection.dispatcher.pause()
      } catch (error) {
        message.client.queue.delete(message.guild.id);
        return sendError(`The player has stopped and the queue has been cleared.: ${error}`, message.channel);
      }        
      let xd = new MessageEmbed()
      .setDescription("Player has been **__paused__**")
      .setColor("#2C2F33")
      return message.channel.send(xd);
    }
    return sendError("There is nothing playing in this server.", message.channel);
  },
};