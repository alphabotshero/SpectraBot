const { MessageEmbed } = require('discord.js')
const os = require('os')
const ms = require('ms')
const { utc } = require('moment');
const { version } = require('../package.json');
const core = os.cpus()[0];
module.exports = {
    info: {
        name: "botinfo",
        description: "Displays the bot information.",
        usage: "s!botinfo",
        aliases: ["bi","stats"]
    },
    run: async (client, message, args) => {
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setAuthor('Spectra','https://cdn.discordapp.com/avatars/777772866417983508/5bf111dc844bde4ba393e6fe94d7059e.webp?size=1024')
            .setColor('#58b9ff')
          
                .addField('General', [ 
                `• Servers: ${client.guilds.cache.size} `,
                `• Users: ${client.users.cache.size}`,
                `• Channels: ${client.channels.cache.size}`,
                `• Author: krishna, Avi`, ])

            .addField('Bot', [ 
                `• UserId: ${client.user.id} `,
                `• Node.js: ${process.version}`,
                `• Version: v${version}`,
                `• Discord.js: v12.3.1`,
                `• Memory Used: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
                `• Uptime: ${uptime}`,
                `• Creation Date: ${utc(client.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,])
                
                .addField('CPU',[
                `• Cores: ${os.cpus().length}`,
                `• Model: ${core.model}`,
                `• Speed: ${core.speed}MHz`,
                `• Cpu Uptime: ${ms(os.uptime() * 1000, { long: true })}`
            ])
            .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL())
        await message.channel.send(embed)
    }
}