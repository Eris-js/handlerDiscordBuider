const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("") // Tên lệnh
        .setDescription() // Mô tả lệnh
        .addStringOption(option => { return option.setName('input').setDescription('Enter a string') })
        .addIntegerOption(option => { return option.setName('int').setDescription('Enter an integer') })
        .addBooleanOption(option => { return option.setName('choice').setDescription('Select a boolean') })
        .addUserOption(option => { return option.setName('target').setDescription('Select a user') })
        .addChannelOption(option => { return option.setName('destination').setDescription('Select a channel') })
        .addRoleOption(option => { return option.setName('muted').setDescription('Select a role') })
        .addMentionableOption(option => { return option.setName('mentionable').setDescription('Mention something') })
        .addNumberOption(option => { return option.setName('num').setDescription('Enter a number') })
        .addAttachmentOption(option => { return option.setName('attachment').setDescription('Attach something') }),
    userPermission: "", // User cần có quyền gì để sử dụng lệnh này
    botPermission: "", // Bot cần có quyền gì để thực thi lệnh này
    async execution(interaction, client) {
        const string = interaction.options.getString('input');
        const integer = interaction.options.getInteger('int');
        const boolean = interaction.options.getBoolean('choice');
        const user = interaction.options.getUser('target');
        const member = interaction.options.getMember('target');
        const channel = interaction.options.getChannel('destination');
        const role = interaction.options.getRole('muted');
        const mentionable = interaction.options.getMentionable('mentionable');
        const number = interaction.options.getNumber('num');
        const attachment = interaction.options.getAttachment('attachment');
        
        /// Thôi coi trên đây đi https://discordjs.guide/interactions/slash-commands.html#parsing-options
    }
}