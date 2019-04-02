const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("EkstazyBot, e!help");
    console.log("Le bot est maintenant online")
});

bot.login("process.env.TOKEN");
