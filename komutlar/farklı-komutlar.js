const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
exports.run = (client, message) => {
  const AsreaperEmbed = new AsreaperDiscord.MessageEmbed();
  AsreaperEmbed.setColor(0x36393F)
  AsreaperEmbed.setDescription(`\n >  • [!loveserver] **Botun Yapımcısının Sunucu Davet Linkini Atar**\n > • [!destek] **Destek Sunucusu Davet Linkini Atar**`)
  .setImage("https://media.discordapp.net/attachments/868910426291839047/868918149431574578/standard.gif?width=351&height=45")
  message.channel.send(AsreaperEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'linkler',
  description: 'Farklı komutları gösterir.',
  usage: 'bilgi'
};