const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
exports.run = (client, message) => {
  const AsreaperEmbed = new AsreaperDiscord.MessageEmbed();
  AsreaperEmbed.setColor(0x36393F)
  AsreaperEmbed.setDescription(`  https://discord.gg/yPR8upSqRW`)
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
  name: 'destek',
  description: 'Destek Sunucusu Davet Linkini Atar',
  usage: 'bilgi'
};