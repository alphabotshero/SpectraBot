const { MessageEmbed } = require('discord.js')
const os = require('os')
const ms = require('ms')
const { utc } = require('moment');
const { version } = require('../package.json');
const { discord } = require('../package.json') 
const core = os.cpus()[0];
module.exports = {
    info: {
        name: "botinfo",
        description: "Displays the bot information.",
        usage: "",
        aliases: ["bi","stats"]
    },
    run: async (client, message, args) => {

        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Spectra')
            .setColor('#58b9ff')
          
            .addField('General', [
                `**❯ Username :** ${client.user.tag}`,
                `**❯ User id:** ${client.user.id}`,
                `**❯ Author:** Krishna, Avi`,
                `**❯ Commands:** 27`,
            ])

                .addField('Bot Stats', [ 
                `**❯ Servers:** ${client.guilds.cache.size} `,
                `**❯ Users:** ${client.users.cache.size}`,
                `**❯ Channels:** ${client.channels.cache.size}`,
                `**❯ Node.js:** ${process.version}`,
                `**❯ Version:** v${version}`,
                `**❯ Discord.js:** v12.3.1`,
                `**❯ Creation Date:** ${client.user.createdAt}`,
            ])

            .addField('System', [
                `**❯ Platform:** ${process.platform}`,
                `**❯ Uptime:** ${ms(os.uptime() * 1000, { long: true })}`,
                `**❯ CPU:**`,
                `\u3000 Cores: ${os.cpus().length}`,
                `\u3000 Model: ${core.model}`,
                `\u3000 Speed: ${core.speed}MHz`,
            ])
            .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL())
        await message.channel.send(embed)
    }
}