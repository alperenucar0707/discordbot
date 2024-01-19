const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
exports.run = (client, message) => {
  const AsreaperEmbed = new AsreaperDiscord.MessageEmbed();
  AsreaperEmbed.setColor(0x36393F)
  AsreaperEmbed.setDescription(`\n >  • [!ascii] **Ascii yazı yazmanızı sağlar (Kullanılamamakta)**\n > • [!emojiler] **Sunucudaki tüm emojileri görüntülemenizi sağlar**\n >  • [!emojiyazı] **Emoji yazı yazmanızı sağlar**\n >  • [!yazı-tura] **Yazı Tura atmanızı sağlar**\n > • [!balıktut] **Balık tutmaya çalışırsınız**\n >  • [!soygunyap] **Soygun yaparsınız**\n >  • [!banner] **Yazı ile Banner yapmanızı sağlar**\n >  • [!ara112] **Ambulansı ararsınız (Ciddiye Almayın)**\n > • [!kedi] **Kedi GİF i atar**\n >  • [!yumruk-at] **Etiketlediğiniz kişiye yumruk atarsınız**\n >  • [!tekerleme] **Rastgele bir tekerleme yazar**\n >  • [!kahve] **Kahve içersiniz**\n >  • [!stresçarkı] **Sizin için bir stres çarkı çevirir**\n >  • [!kartopu] **Etiketlediğiniz kişiye kartopu fırlatarak Kardan Adama dönüştürürsünüz**`)
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
  name: 'eglence',
  description: 'Özel komutları gösterir.',
  usage: 'bilgi'
};