const Discord = require('discord.js');
var durum;
exports.run = (client, message, params) => {
    let kullanıcı = message.mentions.users.first() || message.author;
     const aktifdegil = new Discord.MessageEmbed()
     .setDescription(`${kullanıcı} isimli kullanıcı şu anda aktif değil.`)
    .setColor('#00fe35')
    .setFooter('Security Bot V2')
  if (kullanıcı.presence.status === "offline") return message.channel.send(aktifdegil)
  if (kullanıcı.presence.clientStatus.mobile) {
    durum = "📱 Telefon";
  }
  if (kullanıcı.presence.clientStatus.desktop) {
    durum = "💻 Bilgisayar";
  }
  if (kullanıcı.presence.clientStatus.web) {
    durum = "🌐 Tarayıcı";
  }
  if (message.channel.type !== "group") {
      const bilgi = new Discord.MessageEmbed()
      .addField('Security Bot',`**Kullanıcı Adı:** ${kullanıcı}\n**Bağlanma Durumu:** ${durum}`)
      .setColor('#00fe35')
      .setFooter('Security Bot V2')
      return message.channel.send(bilgi)
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'giris',
  description: 'Security Bot V2',
  usage: 'Security Bot V2'
};