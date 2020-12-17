module.exports = {
    info: {
        name: "leave",
        description: "leaves a vc",
        usage: "",
        aliases: ["l","dc","disconnect"]
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

     message.member.voice.channel.leave();

        message.channel.send ({
            embed: {
                color: '#DE8DF3',
                description: `Left **__${message.member.voice.channel.name}__** channel.`
            }
        })
    },
};