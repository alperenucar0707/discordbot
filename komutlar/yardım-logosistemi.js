const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Logo Sistemi Yardım Menüsü`)
 .setDescription(`
 **${prefix}arrow** \n-> Ok şeklinde logo yapar.
 **${prefix}gold** \n-> Altın şeklinde logo yapar.
 **${prefix}green** \n-> Yeşil şeklinde logo yapar.
 **${prefix}graffiti** \n-> Graffiti şeklinde logo yapar.
 **${prefix}red** \n-> Kırmızı şeklinde logo yapar.
 **${prefix}dinamik** \n-> Dinamik logo yapar.
 **${prefix}alev** \n-> Alevli logo yapar.
 **${prefix}basit** \n-> Basit logo yapar.
 **${prefix}discord** \n-> Discord fontunda logo yapar.
 **${prefix}anime** \n-> Anime fontunda logo yapar.
`)
 .setTimestamp()
 .setImage("https://media.discordapp.net/attachments/868910426291839047/868918149431574578/standard.gif?width=351&height=45")
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["logo"],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'logosistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};