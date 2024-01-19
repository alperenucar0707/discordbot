///////////////GEREKLİ MODÜLLER => discord.js ve moment ////////////////

////////////////GEREKLİ DOSYALAR => ayarlar.json///////////////////////

///////////////komutlar/sunucubilgi.js ATILACAK///////////////////////

const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const moment = require('moment')
exports.run = (client, message, params) => {
       const tarih =  message.guild.createdAt
   var verti = message.guild.verificationLevel;
   const vertific = ['Yok', 'Düşuk', 'Orta', 'Yüksek', 'En Yüksek'];
let kur = {
			"01": "Ocak",
			"02": "Şubat",
			"03": "Mart",
			"04": "Nisan",
			"05": "Mayıs",
			"06": "Haziran",
			"07": "Temmuz",
			"08": "Ağustos",
			"09": "Eylül",
			"10": "Ekim",
			"11": "Kasım",
			"12": "Aralık"
    }
let verifLevels = {
	"NONE": "Yok",
	"LOW": "Düşük",
	"MEDIUM": "Orta",
	"HIGH": "Yüksek",
	"VERY_HIGH": "Çok Yüksek"
	};
let region = {
       "brazil": ":flag_br: Brezilya",
       "europe": ":flag_eu: Avrupa",
       "India": ":flag_in: Hindistan",
       "japan": ":flag_jp: Japonya",
       "eu-central": ":flag_eu: Merkez Avrupa",
        "singapore": ":flag_sg: Singapur",
        "us-central": ":flag_us: Merkez Amerika",
        "sydney": ":flag_au: Sidney",
        "us-east": ":flag_us: Doğu Amerika",
        "us-south": ":flag_us: Güney Amerika",
        "us-west": ":flag_us: Kuzey Amerika",
        "eu-west": ":flag_eu: Batı Amerika",
        "vip-us-east": ":flag_us: VIP Doğu Amerika",
        "london": ":flag_gb: Londra",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Rusya",
        "southafrica": ":flag_za:  Güney Afrika"
    };
  
   const embed = new Discord.MessageEmbed()
      .setColor("YELLOW")
      .setThumbnail(message.guild.iconURL({ dynamic: true}))
      .setTitle(`İşte **${message.guild.name}** Adlı Sunucunun Bilgileri`)
	  .addField(':map:  •  Sunucunun Bölgesi:', region[message.guild.region], true)
      .addField(':bust_in_silhouette:  •  Sunucu Sahibi:', `${message.guild.owner}`, true)
	  .addField(':shield:  •  Güvenlik seviyesi:', verifLevels[message.guild.verificationLevel], true)
      .addField(`:busts_in_silhouette:  •  Üyeler: ${message.guild.memberCount}`, `**Çevrimiçi:** ${message.guild.members.cache.filter(m => m.user.presence.status === "online").size} \n **Boşta:** ${message.guild.members.cache.filter(m => m.user.presence.status === "idle").size} \n **Rahatsız Etme:** ${message.guild.members.cache.filter(m => m.user.presence.status === "dnd").size} \n **Çevrimdışı:** ${message.guild.members.cache.filter(m => m.user.presence.status === "offline").size} \n **Yayında:** ${message.guild.members.cache.filter(m => m.user.presence.status === "streaming").size} \n **Bot:** ${message.guild.members.cache.filter(m => m.user.bot).size} `, true)
      .addField(':diamond_shape_with_a_dot_inside:  •  Kanallar:', `:speech_balloon:  •  Metin: **${message.guild.channels.cache.filter(c => c.type === "text").size}** \n :loud_sound:  •  Ses: **${message.guild.channels.cache.filter(c => c.type === "voice").size}** \n <:List:857944789533327370>  •  Kategoriler: **${message.guild.channels.cache.filter(c => c.type === "category").size}**`, true)
      .addField(':gem:  •  Yükseltmeler',` Takviye Sayısı:** ${message.guild.premiumSubscriptionCount} \n **Takviye Seviyesi:** ${message.guild.premiumTier}**`, true)
      .addField(':zzz:  •  AFK Kanalı', message.guild.afkChannel || 'Ayarlanmamış', true)
   	  .addField(':stopwatch:  •  AFK Zaman Aşımı', `${message.guild.afkTimeout} saniye`, true)
      .addField(`:smile:  •  Emoji Sayısı:`, `${message.guild.emojis.cache.size}`)
      .addField(`<:roller:859729332661911582>  •  Rol Sayısı:`, `${message.guild.roles.cache.size}`)
      .addField(':calendar_spiral:  •  Sunucunun Oluşturma tarihi:', `${moment(message.guild.createdAt).format('DD')} ${kur[moment(message.guild.createdAt).format('MM')]} ${moment(message.guild.createdAt).format('YYYY h:mm:ss')}`)
   message.channel.send({embed});
 };
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['sunucu', 'sb','istatistik'],
   permLevel: 0
 };

 exports.help = {
   name: 'sunucu-bilgi',
   description: 'Kullanılan Yerdeki Sunucu Bilgilerini Gösterir.',
   usage: 'sunucu-bilgi'
 };