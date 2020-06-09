const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    message.channel.send("de rien.");
};

module.exports.help = {
    name: "merci"
};