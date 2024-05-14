const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
    name: 'support',
    description: 'supportajte autora bota',
    execute(message, args) {
        const supportServerLink = "https://www.youtube.com/channel/UCPOwL09DQXKTVgpMTxQkQZA";
      const githubLink = "https://github.com/pinksealteam";
      const replitLink = "https://zftmusic.onrender.com";
      const youtubeLink = "https://www.instagram.com/caajger";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Supportajte Cajgera',
              iconURL: 'https://cdn.discordapp.com/attachments/1230824451990622299/1230824519220985896/6280-2.gif?ex=6638ae28&is=66375ca8&hm=13e4a1b91a95b2934a39de1876e66c11711c7b30ac1a91c2a158f2f2ed1c2fc6&', 
              url: 'https://www.youtube.com/channel/UCPOwL09DQXKTVgpMTxQkQZA'
          })
            .setDescription(`➡️ **Moj yubitubi:**\n- youtube kanal - ${supportServerLink}\n\n➡️ **Lajk i suskrajz na moje platforme:**\n- GitHub - ${githubLink}\n- Otvorite najbolju stranicu ikad - ${replitLink}\n- Instagram - ${youtubeLink}`)
            .setImage('https://cdn.discordapp.com/attachments/1151522152185597952/1239555175870631996/Cool20Text20-20ZestFestTarik20Music20458168465120178.png?ex=664401f7&is=6642b077&hm=833cdd754bff975eef0a8ec43561c729fb7b39260c8da5f1af753540cd2abe8c&')
            .setTimestamp();

        message.reply({ embeds: [embed] });
    },
};



