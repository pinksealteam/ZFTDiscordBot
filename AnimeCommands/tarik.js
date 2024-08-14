const { EmbedBuilder } = require('discord.js');
const HMtai = require('hmtai');
const hmtai = new HMtai();

module.exports = {
    name: 'tarik',
    description: 'Fetches an NSFW GIF.',
    async execute(message, args) {
        try {
            // Fetch NSFW GIF
            const imageUrl = await hmtai.nsfw.gif();
            
            // Construct the embed using EmbedBuilder
            const embed = new EmbedBuilder()
                .setTitle('NSFW GIF')
                .setImage(imageUrl)
                .setColor('#ff69b4'); // Optional: Set embed color

            // Send the embed as a reply
            message.reply({ embeds: [embed] });

        } catch (error) {
            console.error(error);
            message.reply('Something went wrong while fetching the image. Please try again later.');
        }
    },
};
