const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "support",
    description: "support server link",
    usage: "",
    aliases: ["discord","server"],
  },

  run: async function (client, message, args) {
    let omg = new MessageEmbed()
      .setColor("#2C2F33")
      .setDescription(`Join my support server by clicking [here](https://discord.gg/VcEDyuh)`)
    return message.channel.send(omg)
  },
};
