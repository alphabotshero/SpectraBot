const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");
const fs = require('fs');


module.exports = {
  info: {
    name: "afk",
    description: "Keeps the bot 24/7 in a Vc",
    usage: "",
    aliases: ["stay","24/7"],
  },

  run: async function (client, message, args) {
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send ({
      embed: {
        color: 'RED',
        description: 'you donot have permission to use this command.'

      }
    })
    
    let afk = JSON.parse(fs.readFileSync("./afk.json", "utf8"));
       if (!afk[message.guild.id]) afk[message.guild.id] = {
        afk: false,
    };
    var serverQueue = afk[message.guild.id]
    
       if (serverQueue) {
            serverQueue.afk = !serverQueue.afk;
             message.channel.send({
                embed: {
                    color: "#58b9ff",
                    description: `24/7 mode is now **\`${serverQueue.afk === true ? "enabled" : "disabled"}\`**`
                }
            });
            return  fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {
        if (err) console.error(err);
    });
        };
    return sendError("There is nothing playing in this server.", message.channel);
  },
};
