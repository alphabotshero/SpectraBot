module.exports = {
    info: {
        name: "leave",
        description: "Leaves a voice chat.",
        usage: "s!leave",
        aliases: ["l","dc","disconnect"]
    },
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send({
            embed: {
                color: 'RED',
                description: `You have to be connected to a voice channel before you can use this command.`,
            },
        });

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send ({
            embed: {
                color: 'RED',
                description: 'Oh-oh! we are not in same voice channel'
            }
        })

             message.guild.voice.channel.leave()

        message.channel.send ({
            embed: {
                color: '#58b9ff',
                description: `Left **${message.member.voice.channel.name}** channel. Use __s!join__ to summon again.`
            }
        })
    },
};