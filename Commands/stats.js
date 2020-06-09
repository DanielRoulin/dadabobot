const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(client, message, args) => {

    const member = message.mentions.members.first() || message.member;
    
    let intell = "Médiocre"
    if (member.user.username === "Dada_Roulin") {
        intell = "Infinie"
    } 

    message.channel.send({
        embed: {
            color: 0xff960c,
            title: `Statistique de l'utilisateur **${member.user.username}**`,
            thumbnail:{
                url: member.user.displayAvatarURL
            },
            fields: [
                {
                name: "ID",
                value: member.id 
                },
                {
                    name: "crée le :",
                    value: member.user.createdAt
                },
                {
                    name: "Intelligence:",
                    value: intell
                },
                {
                    name: "Habillitées:",
                    value: intell
                },
                {
                    name: "Style:",
                    value: intell
                }
            ],
            footer: {
                text: "Informations verifiées par mon papa Daniel :)"
            }
        }
    });
};

module.exports.help = {
    name: "stats"
};