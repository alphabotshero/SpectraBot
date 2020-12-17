const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    info: {
        name: "botinfo",
        description: "Bot's information",
        usage: "",
        aliases: ["bi","stats"]
    },
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Bot Stats')
            .setColor('#00ffff')
            .addFields(
                {
                    name: 'Bot Version',
                    value: `0.3`,
                    inline: true
                },
                {
                    name: 'node.js version',
                    value: `14.15.1`,
                    inline: true
                },
                {
                    name: 'Discord.js version',
                    value: `3.0.0`,
                    inline: true
                },
                {
                    name: 'Servers',
                    value: `${client.guilds.cache.size}`,
                    inline: true
                },
                {
                    name: 'Channels',
                    value: `${client.channels.cache.size}`,
                    inline: true
                },
                {
                    name: 'Users',
                    value: `${client.users.cache.size}`,
                    inline: true
                },
                {
                    name: 'Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: 'Bot Developer',
                    value: '`Team Destiny`',
                    inline: true
                },
                {
                    name: 'Server Info',
                    value: `Cores: ${os.cpus().length}`,
                    inline: true
                })
            .setFooter(`Created By ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed)
    }
}