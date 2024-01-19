const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Kullanıcı Yardım Menüsü`)
 .setDescription(`
 **!davet** \n-> Botu davet edersiniz.
 **!shardbilgi** \n-> Botun shard bilgilerini gösterir.
 **!pp** \n-> Etiketlediğiniz kişinin avatarını gösterir.
 **!randompp** \n-> Botun ekli olduğu sunuculardaki her hangi birinin avatarını atar.
 **!öneri** \n-> Bota öneri belirtirsiniz.
 **!istatistik** \n-> Sunucunun bilgilerini gösterir
 **!sonmesaj** \n-> Yazdığınız son mesajı gösterir.
 **!sunucu-bilgi** \n-> Sunucu bilgilerini gösterir.
 **!havadurumu** \n-> İstediğiniz şehrin havadurumunu gösterir.
 **!nerede** \n-> Etiketlediğiniz kişinin nerede olduğunu gösterir.
 **!korona** \n-> Tarihinzdeki Covid-19 Tablosunu Görüntülersiniz.
 **!sunucularım** \n-> Botun olduğu sunucuları görürsünüz.
 **!giris** \n-> Discord a neyden girdiğinizi gösterir.
 **!sertifika** \n-> Botun Orjinallik Vb. Belgesini Gösterir.
 **!davet-sıralaması** \n-> Sunucudaki davet bilgisini gösterir.
 **!yetkilerim** \n-> Sunucudaki yetkilerini gösterir.
 **!komutsayısı** \n-> Botdaki toplam komut sayısını gösterir.
**!gizlilik-politikası** \n-> Gizlilik politikasını gösterir. (TR)
**!privacy-policy** \n-> Gizlilik politikasını gösterir. (ENG)
`)
 .setTimestamp()
 .setImage("https://media.discordapp.net/attachments/868910426291839047/868918149431574578/standard.gif?width=351&height=45")
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [`user-user-help`],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};