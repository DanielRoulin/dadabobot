const Discord = require("discord.js");
let time;

module.exports.run = async(client, message, args) => {
    time = Date.now() - start;
    message.channel.send(`tu est ${Math.abs(10000 - time)/1000} s à coté`);
    message.channel.send("c'est pas ouf ouf tes reflex !")
};

module.exports.help = {
    name: "stop"
};