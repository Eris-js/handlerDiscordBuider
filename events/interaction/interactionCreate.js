const { Client } = require("discord.js");
module.exports = {
    name: 'interactionCreate',
    /**
     * 
     * @param { Client } client 
     * @returns 
     */
    async execute(interaction, client) {

        if (interaction.isContextMenu() || interaction.isCommand()) {
            const command = client.commands.get(interaction.commandName);
            if (interaction.user.bot) return;
            if (!interaction.inGuild() && interaction.isCommand()) return interaction.reply({ content: 'You must be in a server to use commands.' });
            if (!interaction.member.permissions.has(command.userPermissions || [])) return interaction.reply({ content: `You are missing \`${command.userPermissions.join(", ").replace(/\_/g, " ")}\``});
            if (!interaction.guild.me.permissions.has(command.botPermissions || [])) return interaction.reply({ content: `I am missing \`${command.botPermissions.join(", ").replace(/\_/g, " ")}\``})
            if (!command) return interaction.reply({ content: "An error occured while running this command."}) && client.commands.delete(interaction.commandName);
            try {
                command.execute(interaction, client);
            }
            catch (e) {
                console.log(e);
                return interaction.reply({ content: `An error has occurred.\n\n**\`${e.message}\`**` });
            }
        }
    },
};