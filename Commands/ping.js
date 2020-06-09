const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    let start = Date.now();
    await message.channel.send("Ping").then(async(msg) => await msg.edit(`Pong : ${Date.now() - start} ms`));

};

module.exports.help = {
    name: "ping"
};