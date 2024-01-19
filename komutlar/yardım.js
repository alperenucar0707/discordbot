const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");
exports.run = (client, message, args, member) => {
  const yardım = new Discord.MessageEmbed()
    .setAuthor(`Security Bot V2 Yardım Menusü`, client.user.avatarURL())
    .setColor("0x36393F")
    .setThumbnail(client.user.avatarURL())
    .setDescription(
      `• Hey! <@${
        message.author.id
      }> beni kullandığın için teşekkür ederim!\n •  Prefixim: **!**\n • Dilim: **TR** :flag_tr:\n • Üyelik durumu: ${
        db.has(`üyelikk_${message.author.id}`, "üyelik")
          ? `**Gold üye!**`
          : `**Normal Bot!**`
      }`
    )
    .addField(
      " • Kategoriler:",
      `> • [!kullanıcı] **Kullanıcı yardım menüsünü gösterir.**\n > • [!moderasyon] **Moderasyon yardım menüsünü gösterir.**\n > • [!kayıtsistemi] ** Kayıt sistemi yardım menüsünü gösterir.**\n > • [!korumasistemi] ** Koruma sistemi yardım menüsünü açar.**\n > • [!logosistemi] ** Logo sistemi yardım menüsünü gösterir.**\n > • [!çekilişsistemi] ** Çekiliş sistemi yardım menüsünü gösterir.**\n > • [!linkler] **Linkler yardım menüsünü gösterir.**\n > • [!eglence] **Eğlence yardım menüsünü gösterir.**`
    )
    .addField(
      " • Güncelleme Notları:",
      "**Güncelleme V2:** Farklı komutlar kategorilerine dağıtıldı Yeni linkler Komutu Ve Özel Gif ```SEZON 2```"
    )

    .addField(
      " • Linkler:",
      "• [Davet Et](https://discord.com/oauth2/authorize?client_id=862314374874398740&scope=bot&permissions=8589934591)"
    )
    .setImage("")
    .setFooter("Security Bot V2", message.author.avatarURL())
    .setTimestamp();
  message.channel.send(yardım);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y", "help", "h","help-me"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Security Bot V2",
  usage: "Security Bot V2"
};
