const Discord = require('discord.js')
exports.run = function(client, message, args) {

const embed = new Discord.MessageEmbed()
.setTimestamp()
.setFooter(`Gizli Komutlar Sayılmayabilir`)
.addField(`Botta Bulunan Toplam Komut Sayısı`,`${client.commands.size}`)
  message.channel.send(embed)
  
  
};
exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ["toplam-komut","komut-sayısı","komutsayısı"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'Toplamkomut'
  };