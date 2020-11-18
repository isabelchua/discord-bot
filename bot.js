console.log("Beep beep!");

const Discord = require("discord.js");
const client = new Discord.Client();
client.login("Nzc4NzE5MjE5ODAwODY2OTA2.X7WEyQ.ip1lABU0eZ6vGAOME3MNGPV9i3g");

client.on("ready", readyDiscord);

function readyDiscord() {
	console.log("<3");
}

const replies = ["<3", "Choo choooo", "Ding"];

client.on("message", gotMessage);

function gotMessage(msg) {
	// console.log(msg.content);
	if (msg.channel.id == "659571617231405086" && msg.content === "choo choo") {
		// msg.reply("wooop");
		const index = Math.floor(Math.random() * replies.length);
		msg.channel.send(replies[index]);
	}
}
