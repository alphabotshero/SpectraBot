const { MessageEmbed } = require("discord.js");
module.exports = {
    info: {
        name: "invite",
        description: "Generates an invite to the bot.",
        usage: "s!invite",
        aliases: ["inv"]
    },

    run: async (client, message, args) => {
        let embed = new MessageEmbed()
        .setThumbnail(`${client.user.displayAvatarURL()}`)
        .setColor("#58b9ff")
        .setDescription(`**[CLICK HERE TO INVITE THIS BOT TO YOUR SERVER](https://discord.com/oauth2/authorize?client_id=777772866417983508&permissions=37088320&scope=bot)**`)
        .setAuthor('Invite The Bot To Your Server, To Enjoy Unlimited Music')
        .addField('Support Server?',[`Click here to join my support [server](https://discord.gg/VcEDyuh)`])
        .setFooter(`©️ By Glob Development | author: Krishna`, `https://cdn.discordapp.com/avatars/777772866417983508/5bf111dc844bde4ba393e6fe94d7059e.webp?size=1024`)
        return message.channel.send(embed)
    },
};