const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

client.login("NzE5NTkyMDI2NTQyMTc4MzE1.Xt6ADQ.ocEOdws4tWDOjBzHER38koeRkKg");

client.commands = new Discord.Collection();

//settings for inter commands communication
let number;
let start;

fs.readdir("./Commands/", (error, file) => {
    if (error) console.log(error); 

    let commands = file.filter(file => file.split(".").pop() === "js");
    if (commands.length <= 0) return console.log("no commands found");

    commands.forEach((file) => {

        let command = require(`./Commands/${file}`);
        client.commands.set(command.help.name, command);
    
        console.log(`${file} command loaded sucessfully!`);
    });
});

fs.readdir("./Events/", (error, file) => {
    if (error) console.log(error);
    console.log(`${file.length} events loading...`)

    file.forEach((file) => {

        const events = require(`./Events/${file}`);
        const event = file.split(".")[0];

        client.on(event, events.bind(null, client));
        
        console.log(`event ${event} loaded!`)
    });
});
