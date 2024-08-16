const { Client, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, TextInputBuilder, ModalBuilder, TextInputStyle, Events } = require('discord.js');
const db = require("../mongodb");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

module.exports = {
    name: 'mc',
    description: 'Get the Minecraft server IP and port by entering the correct password',
    
    async execute(interaction) {
        // Create the modal to request password
        const modal = new ModalBuilder()
            .setCustomId('passwordModal')
            .setTitle('Enter Password: ');

        // Create the password input field
        const passwordInput = new TextInputBuilder()
            .setCustomId('passwordInput')
            .setLabel("Password")
            .setStyle(TextInputStyle.Short)
            .setRequired(true)
            .setPlaceholder("Enter the password here");

        // Add the password input to the modal
        const firstActionRow = new ActionRowBuilder().addComponents(passwordInput);
        modal.addComponents(firstActionRow);

        // Show the modal to the user
        await interaction.showModal(modal);
    }
};

// Handle the modal submission
client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isModalSubmit()) return;

    if (interaction.customId === 'passwordModal') {
        const password = interaction.fields.getTextInputValue('passwordInput');

        if (password === 'vjekofaq123') {
            const embed = new EmbedBuilder()
                .setTitle('Minecraft Server Info')
                .setDescription('Here are the details for the Minecraft server:')
                .addFields(
                    { name: 'IP Address', value: 'de3.localto.net', inline: true },
                    { name: 'Port', value: '4927 ', inline: true }
                )
                .setColor(0xFF69B4); // Pink color

            await interaction.reply({ embeds: [embed], ephemeral: true });
        } else {
            await interaction.reply({ content: 'Incorrect password!', ephemeral: true });
        }
    }
});
