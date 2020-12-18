module.exports = {
    info: {
        name: "debug",
        description: "shows the",
        usage: "",
        aliases: ["db"]
    },

    run: async (client, message, args) => {
        message.channel.send({
            embed: {
                color: '#A7DBFB',
                description: `Connected in **__${client.voice.connections.size}__** voice channels !`,
            },
        });
    },
};