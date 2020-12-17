const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");
const discord = require('discord.js');
const client = new discord.Client({ disableMentions: 'everyone' });
const { utc } = require('moment');
const os = require ('os');
const ms = require ('ms')

module.exports = {
  info: {
    name: "botinfo",
    description: "bot stats",
    usage: "",
    aliases: ["bi"],
  },
  run(message) {
    const core = os.cpus()[0];
    let embed =  new MessageEmbed()
    .setAuthor('Bot Info')
    .setDescription("Here's some information about this bot!")
    .setColor("RANDOM")
    .setThumbnail(bot.user.avatarURL)
    .addField("Created At:", bot.user.createdAt.toDateString(), true)
    .addField("Servers:", bot.guilds.size, true)
    .addField("Users:", bot.users.size, true)
    .addField("Channels:", bot.channels.size, true)
    .setFooter(`Executed in ${message.guild.name}`, message.guild.iconURL)
    
    message.channel.send(embed)   
}

};
