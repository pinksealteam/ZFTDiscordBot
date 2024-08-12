const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
    name: 'update',
    description: 'Patch notes za bota',
    execute(message, args) {
       
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setTitle('**PATCH NOTES 1.1**')
            .setAuthor({
              name: 'Cajger',
              iconURL: 'https://cdn.discordapp.com/avatars/1239547998480896010/3759997fc353c2ad82d4844b02fedc01.webp?size=4096', 
              url: 'https://www.youtube.com/channel/UCPOwL09DQXKTVgpMTxQkQZA'
          })
            .setDescription(`➡️ What is new?`)
            .addFields(
                {name: 'New Music Server.', value: 'New reliable hosting server!'},
                {name: 'Fun Commands Status', value: 'Working on new fun commands!'}
            )
            .setImage('https://cdn.discordapp.com/attachments/1151522152185597952/1239555175870631996/Cool20Text20-20ZestFestTarik20Music20458168465120178.png?ex=664401f7&is=6642b077&hm=833cdd754bff975eef0a8ec43561c729fb7b39260c8da5f1af753540cd2abe8c&')
            .setTimestamp();

        message.reply({ embeds: [embed] });
    },
};
