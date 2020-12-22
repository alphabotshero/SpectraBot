const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error")

module.exports = {
  info: {
    name: "nowplaying",
    description: "Displays the current track information.",
    usage: "",
    aliases: ["np"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("There is nothing playing in this server.", message.channel);
    let song = serverQueue.songs[0]
    let thing = new MessageEmbed()
      .setAuthor("Now Playing")
      .setThumbnail(song.img)
      .setColor("#2C2F33")
      .addField("Requested by", song.req.username, true)
      .addField("Views", song.views, true)
      .addField("Duration", song.duration, true)
      .addField("Released", song.ago, true)
      .addField("Name", song.url, true)
      .setFooter(`Requested by ${song.req.username}`)
    return message.channel.send(thing)
  },
};
