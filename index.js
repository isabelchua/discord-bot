const Discord = require("discord.js");
const bot = new Discord.Client();

const token = "Nzc4NzQ3OTA4MjQxMDk2NzI2.X7WfgQ.yxJIsHmRrgavDJUqkqrfY964LZI";

bot.on("ready", () => {
	console.log("Bot is online");
});

bot.on("message", msg => {
	if (msg.content === "hello") {
		msg.reply("Hello friend!");
	}
});

bot.login(token);
