const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'animecommands',
  description: 'Display a list of available anime-related commands!',
  execute(message, args) {
    const embed = new EmbedBuilder()
      .setColor('#FFFFFF')
      .setTitle('Anime Commands')
      .setDescription(`__**✅ Lista za Tarikov ZestFest Anime Party**__\n\n▶️ __**Section 1 :**__\n  blush, cuddle, dance, slap, bonk, bully, hug, confused, kiss, pat, happy, smile.\n\n▶️ __**Section 2 :**__\n yes, highfive, wink, wave, thinking, sad, cry, stare, bored, scream, nervous, kill.\n`)
      .addFields(
        { name: 'HENTAI COMMANDS', value: 'self-explanatory'},
        { name: 'ahegao', value: 'gives manga ahegao' },
        { name: 'tarik', value: 'sam saznaj' },
        { name: 'wallpapernsfw', value: 'daje doru pozadinu' },
        { name: 'gangbang', value: 'sam saznaj' },
        { name: 'arijan', value: 'sam saznaj' },
        { name: 'filip', value: 'sam saznaj' },
        { name: 'lovro', value: 'sam saznaj' }
    )
      .setImage(`https://media.discordapp.net/attachments/1151522152185597952/1239555175870631996/Cool20Text20-20ZestFestTarik20Music20458168465120178.png?ex=664401f7&is=6642b077&hm=833cdd754bff975eef0a8ec43561c729fb7b39260c8da5f1af753540cd2abe8c&=&format=webp&quality=lossless&width=550&height=61`);
    message.reply({ embeds: [embed] });
  },
};
