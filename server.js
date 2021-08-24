const fs = require("fs");
const Discord = require("discord.js");
let client = new Discord.Client();
client.config = process.env;
const prefix = "_"

function commandSW (message, cmd){
  if (message.content.toLowerCase().startsWith(prefix + cmd)){
  var result = new Boolean(true)
  }
  return result;
}
function command (message, cmd){
  if (message.content.toLowerCase() === prefix + cmd){
  var result = new Boolean(true)
  }
  return result;
}



const db = require("quick.db");

client.on("message", async message => {
   if(commandSW(message, 'foto ')){
      var caps = await message.content.substr(("_foto ").length)
      let thanos = await client.users.fetch(caps);
      message.channel.send(caps)
      message.channel.send(thanos.displayAvatarURL())
     
      
      }
  
  
  if(commandSW(message, 'teste1')) message.channel.send('este comando está funcionando corretamente.')
  if(commandSW(message, 'teste2')){
    message.channel.send('tuas maracutaia funcionaram, parabéns.')
  }
  
    if(commandSW(message, "formula")){
      
      var caps = await message.content.substr(("w!formula ").length)
      var premio = 1
      const formula = await ((premio/caps)*100)      
      message.channel.send("a chance de vir o premio de acordo com a quantidade de capsulas restantes é: ***" + formula + "***")

    }
  if (command(message, 'rcft')) db.set ('FT_' + message.author.id, 0)
  if(commandSW(message, 'banners')){
    const authorID = message.author.id
  const CFT = await db.get('FT_' + authorID)
  if (CFT < 1 || CFT === null || CFT === undefined){
     message.reply(' é sua primeira vez ultilizando esse sistema, use o comando **¨help¨** para entender como funciona. \n Se já entende, ultilize o comando novamente para começarmos.')
    db.set('BannerUserInfo.ALL_' + authorID, 0)
    db.set('BannerUserInfo.FourS_' + authorID, 0)
    db.set('BannerUserInfo.FiveS_' + authorID, 0)
    db.set('BannerUserInfo.CTP_' + authorID, 0)
    db.set('FT_' + authorID, 1)
  }else{
    const FourS = await db.get ('BannerUserInfo.FourS_' + authorID)
    const FiveS = await db.get ('BannerUserInfo.FiveS_' + authorID)
    const ALL = await db.get ('BannerUserInfo.ALL_' + authorID)
    const CTP = await db.get ('BannerUserInfo.CTP_' + authorID)
        const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#9650dc')
	.setTitle('Status')
	.setURL('https://baitkk.caiu.no/')
	.setAuthor(message.member.user.tag, message.member.user.avatarURL())
	.setDescription('Você terá o controle de suas invocações por aqui.')
	.setThumbnail(client.user.avatarURL())
	.addFields(
		{ name: 'Total de invocações', value: 'ㅤㅤㅤㅤ' + ALL },
		{ name: '\u200B', value: 'ㅤ' },
		{ name: '5 estrelas', value: 'ㅤ' + FiveS + '/90', inline: true },
		{ name: '4 estrelas', value: 'ㅤ' + FourS + '/10', inline: true },
	)
	.addField('Premiações', 'ㅤㅤ' + CTP + '/' + ALL, true)
	.setImage('https://i.redd.it/x943jrn18qq51.gif')
	.setTimestamp()
	.setFooter(client.user.tag, client.user.avatarURL());

message.channel.send(exampleEmbed);
  
  
}
  }
  
  if(command(message, 'shot 4s')){
  const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
  message.reply('Quantas vezes você atirou nesse banner *(4 estrelas)* hoje?')
  collector.on('collect', msg => {
            if(message.author === msg.author){
              if(isNaN(msg.content)) return message.reply('por favor, digite um número');
              if((!isNaN(msg.content) && msg.content > 10)){
                message.channel.send('Você atirou no banner mais de 10 vezes.\n Este comando é para você controlar suas invocações, atirar assim me inultiliza :(')
              return;
              }
              try{
                db.add('BannerUserInfo.FourS_' + message.author.id, msg)
                db.add('BannerUserInfo.ALL_' + message.author.id, msg)
              }finally{
                message.channel.send('Pronto! você ja pode olhar suas informações pra ver se ta tudo certinho :)')
              }
            }
    })   
  }
  
  if(command(message, 'shot 5s')){
  const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
  message.reply('Quantas vezes você atirou nesse banner *(5 estrelas)* hoje?')
  collector.on('collect', msg => {
            if(message.author === msg.author){
              if(isNaN(msg.content)) return message.reply('por favor, digite um número');
              if((!isNaN(msg.content) && msg.content > 90)){
                message.channel.send('Você atirou no banner mais de 90 vezes.\n Este comando é para você controlar suas invocações, atirar assim me inultiliza :(')
              return;
              }
              try{
                db.add('BannerUserInfo.FiveS_' + message.author.id, msg)
                db.add('BannerUserInfo.ALL_' + message.author.id, msg)
              }finally{
                message.channel.send('Pronto! você ja pode olhar suas informações pra ver se ta tudo certinho :)')
              }
            }
    })   
  }
  
  
  if(command(message, 'add 4s') || command(message, 'add 5s')){
    try{
      if(message.content.toLowerCase().includes('4s')){
     db.add('BannerUserInfo.ALL_' + message.author.id, 1)
     db.add('BannerUserInfo.CTP_' + message.author.id, 1)
     db.set('BannerUserInfo.FourS_' + message.author.id, 0)
      }else{
     db.add('BannerUserInfo.ALL_' + message.author.id, 1)
    db.add('BannerUserInfo.CTP_' + message.author.id, 1)
     db.set('BannerUserInfo.FiveS_' + message.author.id, 0)
      }
    }finally{
      if(message.content.toLowerCase().includes('4s')){
    message.reply('Wow! então você foi contemplado com um 4 estrelas? parabéns!')
      }else{
        message.reply('Wow! Você teve muita sorte dessa vez, parabéns!')
      }
    }
  }
})



client.on("ready", () => console.log(`Logged in as ${client.user.tag}`));
client.login(client.config.TOKEN);


