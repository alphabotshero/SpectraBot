module.exports = {
    info: {
        name: "join",
        description: "Joins a voicechat.",
        usage: "s!join",
        aliases: ["summon","j"]
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

        if (message.guild.me.voice.channel && message.member.voice.channel.id === message.guild.me.voice.channel.id) return message.channel.send ({
            embed: {
                color: 'RED',
                description: 'Iam already being used in another channel.'
            }
        })

        message.member.voice.channel.join();

        message.channel.send ({
            embed: {
                color: '#58b9ff',
                description: `joined **__${message.member.voice.channel.name}__** channel. Use s!play to play a song.`
            }
        })
    },
};