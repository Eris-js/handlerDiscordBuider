const { ContextMenuCommandBuilder } = require("@discordjs/builders");
const {  ApplicationCommandType } = require("discord-api-types/v9");

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName() // Tên app
        .setType(ApplicationCommandType.ChatInput), // Type bao gồm [ChatInput, Message, User]
    async execute(interaction) {
        // Viết gì ở đây là chuyện của các bạn nhé
    }
}