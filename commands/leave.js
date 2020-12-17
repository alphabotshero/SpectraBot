module.exports = {
    info: {
        name: "leave",
        description: "leaves a vc",
        usage: "",
        aliases: ["l","dc","disconnect"]
    },
    run: async (client, message, args) => {
        
     message.member.voice.channel.leave();

        message.channel.send ({
            embed: {
                color: '#DE8DF3',
                description: `Left **__${message.member.voice.channel.name}__** channel.`
            }
        })
    },
};