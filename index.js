const Discord = require("discord.js");
const bot = new Discord.Client();
const { token } = require("./config.json");

// const token = process.env.TOKEN;

const PREFIX = "!";

var version = "1.0.1";

bot.on("ready", () => {
	console.log("Bot is online");
});

bot.on("message", message => {
	let args = message.content.substring(PREFIX.length).split(" ");

	switch (args[0]) {
		case "ping":
			message.channel.send("pong!");
			break;
		case "website":
			message.channel.send("youtube.com");
			break;
		case "info":
			if (args[1] === "version") {
				message.channel.send(version);
			} else {
				message.channel.send("Invalid Command");
			}
	}
	// if (msg.content === "hello") {
	// 	msg.reply("Hello friend!");
	// }
});

bot.login(token);
