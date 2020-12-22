module.exports = {
    info: {
        name: "invite",
        description: "Generates an invite to the bot.",
        usage: "",
        aliases: ["inv"]
    },

    run: async (client, message, args) => {
        message.channel.send({
            embed: {
                color: '#2C2F33',
                description: `[**click here to invite me**](https://discord.com/api/oauth2/authorize?client_id=777772866417983508&permissions=36785216&scope=bot)`,
            },
        });
    },
};