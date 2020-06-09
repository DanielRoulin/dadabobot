const { get } = require("https");
// const Discord = require("discord.js");

let url = "https://api.openweathermap.org/data/2.5/onecall?lat=46.213059&lon=6.126253&units=metric&lang=fr&appid=64172aaedef0032f37a94db19f40f7e7"

//thx stackoverflow
function unixToDate(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    if (min == 0) min = ""
    var time = date + ' ' + month + ' ' + year + ' à ' + hour + 'h' + min;
    return time;
}

module.exports.run = async(client, message, args) => {
    get(url, (res) => {
        const { statusCode } = res;

        if (statusCode !== 200) {
            return message.channel.send("ouuppps, ca marche pas :(");
        }

        res.setEncoding("utf-8");
        let data = "";

        res.on("data", chunk => {
            data += chunk;
        });

        res.on("end", () => {
            try {

                const parsedData = JSON.parse(data);

                if (!args[0]) {
                message.channel.send({
                    embed: {
                        color: 0xff960c,
                        title: `Meteo actuel à **Geneve**`,
                        thumbnail:{
                            url: `http://openweathermap.org/img/wn/${parsedData.current.weather[0].icon}@2x.png`
                        },
                        fields: [
                            {
                                name: "Description:",
                                value: parsedData.current.weather[0].description
                            },
                            {
                                name: "Temperature",
                                value: `${parsedData.current.temp} °C`
                            },
                            {
                                name: "Ressenti",
                                value: `${parsedData.current.feels_like} °C`
                            },
                            {
                                name: "Humidité",
                                value: `${parsedData.current.humidity} %`
                            },
                            {
                                name: "Couverture nuageuse",
                                value: `${parsedData.current.clouds} %`
                            },
                            {
                                name: "Meteo du ",
                                value: unixToDate(parsedData.current.dt)
                            }
                        ],
                        footer: {
                            text: "Informations fournie par OpenWeather."
                        }
                    }
                });
                message.channel.send("pour la meteo dans une heure et demain, utilise les pararmetre demain et à venir. Exemple: dada, meteo demain")
            }

            if (args[0] === "à" && args[1] === "venir") {
                message.channel.send({
                    embed: {
                        color: 0xff960c,
                        title: `Meteo à venir à **Geneve**`,
                        thumbnail:{
                            url: `http://openweathermap.org/img/wn/${parsedData.hourly[2].weather[0].icon}@2x.png`
                        },
                        fields: [
                            {
                                name: "Description:",
                                value: parsedData.hourly[2].weather[0].description
                            },
                            {
                                name: "Temperature",
                                value: `${parsedData.hourly[2].temp} °C`
                            },
                            {
                                name: "Ressenti",
                                value: `${parsedData.hourly[2].feels_like} °C`
                            },
                            {
                                name: "Humidité",
                                value: `${parsedData.hourly[2].humidity} %`
                            },
                            {
                                name: "Couverture nuageuse",
                                value: `${parsedData.hourly[2].clouds} %`
                            },
                            {
                                name: "Meteo du ",
                                value: unixToDate(parsedData.hourly[2].dt)
                            }
                        ],
                        footer: {
                            text: "Informations fournie par OpenWeather."
                        }
                    }
                });
            } else if (args[0] == "demain") {
                message.channel.send({
                    embed: {
                        color: 0xff960c,
                        title: `Meteo demain à **Geneve**`,
                        thumbnail:{
                            url: `http://openweathermap.org/img/wn/${parsedData.daily[0].weather[0].icon}@2x.png`
                        },
                        fields: [
                            {
                                name: "Description:",
                                value: parsedData.daily[0].weather[0].description
                            },
                            {
                                name: "Temperature max",
                                value: `${parsedData.daily[0].temp.max} °C`
                            },
                            {
                                name: "Temperature min",
                                value: `${parsedData.daily[0].temp.min} °C`
                            },
                            {
                                name: "Ressenti",
                                value: `${parsedData.daily[0].feels_like.day} °C`
                            },
                            {
                                name: "Humidité",
                                value: `${parsedData.daily[0].humidity} %`
                            },
                            {
                                name: "Couverture nuageuse",
                                value: `${parsedData.daily[0].clouds} %`
                            },
                            {
                                name: "Meteo du ",
                                value: unixToDate(parsedData.daily[1].dt)
                            }
                        ],
                        footer: {
                            text: "Informations fournie par OpenWeather."
                        }
                    }
                });
            }
            } catch (error) {
                console.log(error);
            };
        });

    });
};

module.exports.help = {
    name: "meteo"
};