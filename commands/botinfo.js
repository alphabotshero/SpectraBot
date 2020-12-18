const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    info: {
        name: "botinfo",
        description: "shows the bot information.",
        usage: "",
        aliases: ["bi","stats"]
    },
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Bot Stats')
            .setColor('#00ffff')
            .addField("Bot Version",`0.3` ,true)
            .addField("Node.js Version",`12.3.1` ,true)
            .addField("Discord.js Version",`3.0.0` ,true)
            .addField("Servers",`${client.guilds.cache.size}` ,true)
            .addField("Channels",`${client.channels.cache.size}` ,true)
            .addField("Users",`${client.users.cache.size}` ,true)
            .addField("Ping",`${client.ws.ping}ms` ,true)
            .addField("Connections",`${client.voice.connections.size}` ,true)
            .setFooter(`Created By ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed)
    }
}