const Discord = require('discord.js')
const array = [ "674648258391441421", "326759637405925376" ,"749589853087203330"]
module.exports = {
	info: {
	  name: "Evaluate",
	  description: "Evaluates the code.",
	  usage: "s!eval 2+2",
	  aliases: ["eval", "jsk"]
	},
  
	run: async function (client, message, args) {
	let command = args.slice(0).join(" ")
	if (command.includes(`SECRET`) || command.includes(`TOKEN`) || command.includes(`token`) || command.includes("process.env")) {
		return message.channel.send ({
			embed: {
				color: '#58b9ff',
				description: 'Sorry! you dont have perms to view my token information.'
			}
		})
	  } else{
	if(array.includes(message.author.id)){
	if(!command) return message.channel.send ({
		embed: {
			color: '#58b9ff',
			description: 'what do you need to evaluate?'
		}
	})

	try{
		let evaled = eval(command)
		if(message.author.id === '749589853087203330'){
		var embed = new Discord.MessageEmbed()
		.setColor("#58b9ff")
		.addField("String", `\`\`\`${command}\`\`\``)
		.addField("Response", `\`\`\`js\n${evaled}\`\`\``)  
		.addField("Type", `\`\`\`${typeof(evaled)}\`\`\``)
		message.channel.send(embed)
		}else {
			message.channel.send(`\`\`\`js\n${evaled}\`\`\``)
		} 
	} catch  (error) {
		var embed = new Discord.MessageEmbed()
		.setColor("RED")
		.addField("Error", `${error}`)

		message.channel.send(embed)
	}
 } else {
	message.channel.send ({
		embed: {
			color: 'RED',
			description: 'you are not allowed to use this command.'
		}
	})
 }
}
	}
	}