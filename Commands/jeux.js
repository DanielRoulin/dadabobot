const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    if(!args[0]){ 
        message.channel.send("tu veux jouer à quoi ?");
        message.channel.send("jeux disponible:");
        message.channel.send("plusOuMoins");
        message.channel.send("timer");

        message.channel.send("pour jouer, envoie dada, joue à **jeux**");
        return
    }

    if (args[1] === "plusOuMoins") {
         
            number = Math.floor((Math.random() * 100) + 1);
            console.log(number);

            message.channel.send("ok, j'ai choisi");
            message.channel.send("pour deviner, envoie dada, c'est **Nombre**");
            message.channel.send("mon nombre ce situe entre 1 et 100");

    } else if (args[1] === "timer") { 
            message.channel.send("essaye de dire stop au bon moment");
            message.channel.send("envoie dada, start pour commencer et essaye de dire dada, stop exactement 10 secondes apres");
    };
};

module.exports.help = {
    name: "joue"
};