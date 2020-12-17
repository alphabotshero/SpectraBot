const Discord = require('discord.js')
const array = [ "674648258391441421", "326759637405925376" ,"749589853087203330"]
module.exports = {
	info: {
	  name: "evaluvate",
	  description: "eval code",
	  usage: "[code]",
	  aliases: ["eval"],
	},
  
	run: async function (client, message, args) {
	let command = args.slice(0).join(" ")
	if (command.includes(`SECRET`) || command.includes(`TOKEN`) || command.includes(`token`) || command.includes("process.env")) {
		return message.channel.send('Sorry buddy you cant get my token information.') 
	  } else{
	if(array.includes(message.author.id)){
	if(!command) return message.channel.send ({
		embed: {
			color: 'RANDOM',
			description: 'Shutup i wont tell you my token.'
		}
	})

	try{
		let evaled = eval(command)
		if(message.author.id === '749589853087203330'){
		var embed = new Discord.MessageEmbed()
		.setTitle("Evaluated")
		.addField("To Eval", `\`\`\`${command}\`\`\``)
		.addField("Evaled", `\`\`\`js\n${evaled}\`\`\``)  
		.addField("Type Of", `\`\`\`${typeof(evaled)}\`\`\``)
		message.channel.send(embed)
		}else {
			message.channel.send(`\`\`\`js\n${evaled}\`\`\``)
		} 
	} catch  (error) {
		var embed = new Discord.MessageEmbed()
		.addField("Error", `${error}`)

		message.channel.send(embed)
	}
 } else {
	message.channel.send ({
		embed: {
			color: '#ff0000',
			description: 'you are not allowed to use this command.'
		}
	})
 }
}
	}
	}