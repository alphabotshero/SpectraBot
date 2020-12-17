module.exports = {
    info: {
        name: "join",
        description: "joins a vc",
        usage: "",
        aliases: ["summon","j"]
    },

    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send({
            embed: {
                color: '#FA1D2F',
                description: `You have to be connected to a voice channel before you can use this command.`,
            },
        });

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send ({
            embed: {
                color: '#FA1D2F',
                description: 'Oh-oh! we are not in same voice channel'
            }
        })

        if (message.guild.me.voice.channel && message.member.voice.channel.id === message.guild.me.voice.channel.id) return message.channel.send ({
            embed: {
                color: '#FA1D2F',
                description: 'Iam already being used in another channel.'
            }
        })

        message.member.voice.channel.join();

        message.channel.send ({
            embed: {
                color: '#DE8DF3',
                description: `joined **__${message.member.voice.channel.name}__** channel.`
            }
        })
    },
};