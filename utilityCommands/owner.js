const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'owner',
    description: 'Bot owner info',
    execute(message, args) {
        const youtubeLink = 'https://www.youtube.com/channel/UCPOwL09DQXKTVgpMTxQkQZA';
        const InstagramLink = 'https://www.instagram.com/caajger';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle(' 🫅 Owner Info')
            .setDescription(`__**About me**__:\n 🤖 Cajger-kun. Volim svoje prijatelje, i svoju curkicu. Planiram upisat faks ili ici u njemacku. Lijep pozdrav.\n ❤️ [cajgwr](${youtubeLink})\n 💙 [caajger](${InstagramLink})`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};

