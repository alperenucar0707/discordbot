/////GEREKLİ MODÜLLER => discord.js//////////

////komutlar/sunucular.js ATILACAK///////////

const Discord = require('discord.js');

exports.run = async(client, message, args) => {
client.guilds.cache.forEach(guild => {
        guild.channels.cache.filter(x => x.type == "text").random().createInvite()
          .then(inv => message.channel.send({embed: {color: 'YELLOW', description: `${guild.name} | ${inv.url}`}}));
      });

};

exports.conf = {
   aliases: ["kralprox","special","ozel"]
};

exports.help = {
  name: "sunucular"
};