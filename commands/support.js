const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "support",
    description: "support server link",
    usage: "",
    aliases: ["discord","server"],
  },

  run: async function (client, message, args) {
    let bgm = `[**Click here**](https://discord.gg/VcEDyuh)`;
    let omg = new MessageEmbed()
      .setColor("RANDOM")
      .addField("Link to my support server", bgm , true)
    return message.channel.send(omg)
  },
};
