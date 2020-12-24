const Discord = require('discord.js')
const array = [ "674648258391441421", "326759637405925376" ,"749589853087203330"]
module.exports = {
    info: {
        name: "debug",
        description: "Displays the bot's connections.",
        usage: "",
        aliases: ["db"]
    },

    run: async function (client, message, args) {
        if(array.includes(message.author.id)){
            let thing = `Connected in **__${client.voice.connections.size}__** channels.`
                const embed = new Discord.MessageEmbed()
                .setColor("GREEN")
                embed.setDescription(thing)
                message.channel.send(embed)
            }
    else{message.reply ({
        embed: {
            color: 'RED',
            description: 'you donot have permission to use this command.'
        }
    })
}}}