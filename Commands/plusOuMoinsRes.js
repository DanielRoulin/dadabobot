const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    if (typeof number === "undefined") { 
        message.channel.send("on a pas commencer a jouer débile");
        message.channel.send("envoie dada, joue à plusOuMoins pour commencer");
        return
    }

    if (parseInt(args[0]) == NaN) return message.channel.send("dit moi un nombre imbecile");

    if (parseInt(args[0]) == number) {
        message.channel.send("c'est ça, bien jouer");
        number = undefined;
    } else if (parseInt(args[0]) < number) {
        message.channel.send("plus grand.");
    } else if (parseInt(args[0]) > number) {
        message.channel.send("plus petit.");
    }
};

module.exports.help = {
    name: "c'est"
};