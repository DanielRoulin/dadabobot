const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    message.channel.send({
        embed: {
            color: 0xff960c,
            title: `Meteo à **Geneve**`,
            thumbnail:{
                url: `http://openweathermap.org/img/wn/04d@2x.png`
            }
        }
    });
};

module.exports.help = {
    name: "test"
};