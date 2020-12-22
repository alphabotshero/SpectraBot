const fetch = require("node-fetch");
const qs = require("querystring"); 
const versions = [
  "stable",
  "master",
  "rpc",
  "commando",
  "akairo",
  "akairo-master",
  "11.5-dev"
];

module.exports = {
    info: {
        name: "docs",
        description: "Discord.js documentation.",
        usage: "",
        aliases: ["documentation", "search", "library"]
    },

    run: async (client, message, args) => {
        const { channel, author } = message;
        let source = versions.includes(args.slice(-1)[0]) ? args.pop() : "stable";
        if(!args[0])return message.channel.send("No query sent to search")
        let q = args.join(" ");
        const queryString = qs.stringify({ src: source, q: q });
        const embed = await (await fetch(`https://djsdocs.sorta.moe/v2/embed?${queryString}`)).json();
        if (!embed)return channel.send("Failed to locate that information in the documentation.");
        let m = await channel.send({ embed })
        await m.react("🗑️");

        const filter = (reaction, user) => reaction.emoji.name === "🗑️" && user.id === author.id;
        const collector = m.createReactionCollector(filter, { max: 1, time: 5000 });

        collector.on("collect", data => {
            if (data.size) m.delete();
        });

        collector.on("end", data => {
            if (!data.size) m.reactions.removeAll()
        });
    }
}