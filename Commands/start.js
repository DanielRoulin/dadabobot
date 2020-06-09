const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    start = Date.now();
    message.channel.send("c'est parti!");
};

module.exports.help = {
    name: "start"
};