const discord = require("discord.js")

exports.run = function(client, message, args){

var box = [
"Götür küpü, dök küpü. Getir küpü dök küpü",
"Gül dibi, bülbül dili gibi",
"Çarşıda koza ucuz, çarşıda darı ucuz, çarşıda boza da ucuz mu?",
"Falcı, faIcının falına, fasa fiso dedi.",
"O pikap, şu pikap, bu pikap.",
"Sudan çıktı iki su şadısı, biri erkek şu şadısı, diğeri dişi şu şadısı.",
"Keşkekçinin keşkeklenmiş keşkek kepçesi.",
"Bu evi yıkıp yapsak da mı otursak, yoksa yıkmasak onarsak da mı otursak?",
"Çatalcada topal çoban çatal yapıp çatal satar, nesi için çatalcada topal çoban çatal yapıp çatal satar?",
"Dört deryanın deresini dört dergâhın derbendine devrederlerse, dört deryadan dört dert, dört dergâhtan dört dev çıkar.",
"Sen seni bil, sen seni, bil sen seni, bil sen seni, sen seni bilmezsen patlatırlar enseni."
]
const CrewCode = box[Math.floor(Math.random() * box.length)];
 
message.channel.send(
new discord.MessageEmbed()
.setTitle("Tekerleme")
.setDescription(CrewCode)
  )
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
   kategori: "Eğlence" 
};

exports.help = {
  name: 'tekerleme',
  category: 'eğlence',
  description: 'Rastgele bir tekerleme atar',
  usage: 'tekerleme' 
}