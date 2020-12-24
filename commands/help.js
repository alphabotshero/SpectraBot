const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "help",
        description: "Displays this message.",
        usage: "",
        aliases: ["commands"]
    },

    run: async function(client, message, args){
        var allcmds = "";

        client.commands.forEach(cmd => {
            let cmdinfo = cmd.info
            allcmds+="`"+client.config.prefix+cmdinfo.name+"` "+cmdinfo.usage+" ~ "+cmdinfo.description+"\n"
        })

        let embed = new MessageEmbed()
        .setAuthor("Help Panel",`${message.guild.iconURL()}`)
        .setColor("#58b9ff")
        .setDescription(`To get info on each command use ${client.config.prefix}help [command]`)
        .addField('Prefix',[ '`s!`, <@!777772866417983508>, <@777772866417983508>'])
        .addField('Player',[ '`play`, `pause`, `stop`, `resume`, `skip`, `skipto`, `nowplaying`, `volume`, `loop`, `join`, `leave`, `shuffle`, `lyrics`, `queue`, `afk`, `search` `playlist`, `remove`'])
        .addField('Misc',[ '`botinfo`, `uptime`, `ping`, `docs`,`invite`'])
        .addField('Developer',[ '`eval`, `serverlist`, `debug`'])
        .addField('Invite Link', [`**[Click here to invite me](https://discord.com/oauth2/authorize?client_id=777772866417983508&permissions=37088320&scope=bot)**`])
        .addField('Support Server',[`**[Click here to join my support server](https://discord.gg/VcEDyuh)**`])
                
        .setFooter(`©️ By Glob Development | author: Krishna`, `https://cdn.discordapp.com/avatars/777772866417983508/5bf111dc844bde4ba393e6fe94d7059e.webp?size=1024`)

        if(!args[0])return message.channel.send(embed)
        else {
            let cmd = args[0]
            let command = client.commands.get(cmd)
            if(!command)command = client.commands.find(x => x.info.aliases.includes(cmd))
            if(!command)return message.channel.send ({
                embed : 'RED',
                description: 'No such commands Found use **s!help** to know all the commands.'
            })
            let commandinfo = new MessageEmbed()
            .setTitle("Command: "+command.info.name+" info")
            .setColor("#58b9ff")
            .setDescription(`
Name: ${command.info.name}
Description: \`\`${command.info.description}\`\`
Usage: \`\`${client.config.prefix}${command.info.name} ${command.info.usage}\`\`
Aliases: ${command.info.aliases.join(", ")}
`)
message.channel.send(commandinfo)
        }
    }
}
