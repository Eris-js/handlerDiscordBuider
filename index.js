const { Client, Collection } = require("discord.js");
const client = new Client({ intents: 32767 });

require('dotenv').config({ path: './config/config.env' });

client.commands = new Collection();
module.exports = client;

["events", "commands"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
process.on('unhandledRejection', error => { console.log(error) });

client.login(process.env.discordToken);