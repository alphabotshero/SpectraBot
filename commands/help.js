const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "help",
        description: "Displays this message.",
        usage: "s!help",
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
        .addField('Prefix',[ '`s!`, <@777772866417983508>'])
        .addField('Music',[ '`play`, `pause`, `stop`, `resume`, `skip`, `skipto`, `nowplaying`, `volume`, `loop`, `join`, `leave`, `shuffle`, `lyrics`, `queue`, `afk`, `search` `playlist`, `remove`'])
        .addField('Infos',[ '`botinfo`, `uptime`, `ping`, `docs`,`invite`'])
        .addField('Developer',[ '`eval`, `serverlist`, `debug`'])
        .addField('Links',[`[Invite Link](https://discord.com/oauth2/authorize?client_id=777772866417983508&permissions=37088320&scope=bot)\n[support server](https://discord.gg/VcEDyuh) `
    ])
                
        .setFooter(`©️ By Glob Development | author: Krishna`, `https://cdn.discordapp.com/avatars/777772866417983508/5bf111dc844bde4ba393e6fe94d7059e.webp?size=1024`)

        if(!args[0])return message.channel.send(embed)
        else {
            let cmd = args[0]
            let command = client.commands.get(cmd)
            if(!command)command = client.commands.find(x => x.info.aliases.includes(cmd))
            if(!command)return message.channel.send ({
                embed: {
                    color: 'RED',
                    description: 'No such commands Found! Use **s!help** to see all the commands.'
                }
            })
            let commandinfo = new MessageEmbed()
            .setAuthor(command.info.name, 'https://cdn.discordapp.com/avatars/777772866417983508/5bf111dc844bde4ba393e6fe94d7059e.webp?size=1024')
            .setColor("#2C2F33")
            .setDescription(`
• **Name:** \`${command.info.name}\`
• **Usage:** \`${command.info.usage}\`
• **Aliases:** ${command.info.aliases.join(", ")}
• **Description:** \`${command.info.description}\`
`)
message.channel.send(commandinfo)
        }
    }
}
