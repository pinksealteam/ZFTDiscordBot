const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'Kick a user from the server',
    execute(message, args) {
        // Check if the user has the necessary permissions to use the command
        if (!message.member.permissions.has('KICK_MEMBERS')) {
            return message.reply('❌ Nemas dovoljan edging streak da mozes kickat betas iz servera.');
        }

        // Check if a user was mentioned in the command
        const user = message.mentions.users.first();
        if (!user) {
            return message.reply('❌ You need to mention a user to kick.');
        }

        // Kick the mentioned user
        const member = message.guild.members.cache.get(user.id);
        member.kick();

        // Create an embed object
        const embed = new EmbedBuilder()
            .setColor('#FF0000')
            .setTitle('User Kicked ✅')
            .setDescription(`▶️ ${user.tag} je bio rizzed up od ${message.author.tag}, pa je pobjegao iz servera jer je ${message.author.tag} zesca pedofilcina, ono buraz fuj.`)
            .setTimestamp();

        message.reply({ embeds: [embed] });
    },
};


