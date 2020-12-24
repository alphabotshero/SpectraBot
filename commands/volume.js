const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "volume",
    description: "Adjusts the volume.",
    usage: "",
    aliases: ["v","vol"],
  },

  run: async function (client, message, args) {
    const channel = message.member.voice.channel;
    if (!channel)return sendError("I'm sorry but you need to be in a voice channel to adjust the volume!", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("There is nothing playing in this server.", message.channel);
    if (!args[0])return message.channel.send ({
      embed: {
        color: '#2C2F33git commit -m "Removed node_module folder"',
        description: `The current volume is : **${serverQueue.volume}%**`
      }
    })
     if(isNaN(args[0])) return message.channel.send('Numbers only!').catch(err => console.log(err));
    if(parseInt(args[0]) > 200 ||(args[0]) < 0) return sendError('PLayer can\'t exceed the volume more than 200 or less than 0',message.channel).catch(err => console.log(err));
    serverQueue.volume = args[0]; 
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
    if(!parseInt(args[0]))return  
    let xd = new MessageEmbed()
    .setDescription(`Volume has been adjusted to **__${args[0]/1}%__**`)
    .setColor("#2C2F33")
    return message.channel.send(xd);
  },
};
