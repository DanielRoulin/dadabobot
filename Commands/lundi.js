const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    let now = new Date();

    if (now.getDay() == 1) {
        message.channel.send("oui.");
    } else {
        message.channel.send("non.");
    };
};

module.exports.help = {
    name: "lundi?"
};