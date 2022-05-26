const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const token = process.env.discordToken;
const fs = require("node:fs");

const clientId = '940270836554809395';
const guildId = '861284791939498004';

module.exports = async (client) => {
    CommandsArray = [];
    fs.readdirSync("./commands").forEach((dir) => {
        const commands = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));
        for (let file of commands) {
            let cmd = require(`../commands/${dir}/${file}`);
            if (cmd.data) {
                client.commands.set(cmd.data.name, cmd)
                CommandsArray.push(cmd.data.toJSON());
            }
            else return
        }
    });


    const rest = new REST({ version: '9' }).setToken(token);
    // Push command global Routes.applicationCommands(clientId), { body: CommandsArray}
    await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: CommandsArray })
        .then(() => console.log('[/] Successfully registered application commands.'))
        .catch(console.error);
}