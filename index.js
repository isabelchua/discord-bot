const Discord = require("discord.js");
const bot = new Discord.Client();
// const { token } = require("./config.json");
require("dotenv-flow").config();

const config = {
	token: process.env.TOKEN,
	owner: process.env.OWNER,
	prefix: process.env.PREFIX
};

console.log(config.token);

bot.on("ready", () => {
	console.log(`Logged in as ${bot.user.tag}!`);
});

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

// bot.login(token);
bot.login(config.token);
