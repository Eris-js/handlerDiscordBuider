const wait = require('node:timers/promises').setTimeout;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ship')
        .setDescription('Ship some one.')
        .addUserOption(option => option.setName('member').setDescription('Select a user').setRequired(true)),
    async execute(interaction) {

        const target = interaction.options.getUser('member');
        const randomPromies = Math.floor(Math.random() * 101);

        await interaction.deferReply({ ephemeral: false });
        await wait(4000);
        await interaction.editReply({ content: `:heart: **${interaction.user.tag}** ` + randomPromies + `% **${target.tag}** :heart:` });
    },
};