module.exports = {
    info: {
        name: "debug",
        description: "Displays the bot's connections.",
        usage: "",
        aliases: ["db"]
    },

    run: async (client, message, args) => {
        message.channel.send({
            embed: {
                color: '#2C2F33',
                description: `Connected in **__${client.voice.connections.size}__** voice channels !`,
            },
        });
    },
};