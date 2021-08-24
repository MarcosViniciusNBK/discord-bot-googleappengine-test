const Discord = require('discord.js');


const client = new Discord.Client();
const fs = require('fs')
var config = JSON.parse(fs.readFileSync('./botsettings.json', 'utf-8'));




client.on('ready', () => {
  console.log('Comando ASK pronto!');
    });
	client.on('ready', () => {
  console.log('Comando AVATAR pronto!');
    });
	client.on('ready', () => {
  console.log('Comando DELETE pronto!');
    });
	client.on('ready', () => {
  console.log('Comando ICON pronto!');
    });
	client.on('ready', () => {
  console.log('Comando KICK pronto!');
    });


client.on('message', async message => {
function abby(mensagem){
const channel = canal
   channel.fetchWebhooks() // This gets the webhooks in the channel
        .then(webhook => {

            // Fetches the webhook we will use for each hook
            let foundHook = webhook.find('name', 'Webhook'); // You can rename 'Webhook' to the name of your bot if you like, people will see if under the webhooks tab of the channel.

            // This runs if the webhook is not found.
            if (!foundHook) {
                channel.createWebhook('Webhook', 'https://cdn.discordapp.com/attachments/694752209186848859/717956055832723476/abby.png') // Make sure this is the same thing for when you search for the webhook. The png image will be the default image seen under the channel. Change it to whatever you want.
                    .then(webhook => {
                        // Finally send the webhook
                        webhook.send(mensagem)
                            .catch(error => { // We also want to make sure if an error is found, to report it in chat.
                                console.log(error);
                                return channel.send('**Alguma coisa deu errado, por favor, veja o console.**');
                            })
                    })
            } else { // That webhook was only for if it couldn't find the original webhook
              webhook.send(mensagem)
                    .catch(error => { // We also want to make sure if an error is found, to report it in chat.
                        console.log(error);
                        return channel.send('**Alguma coisa deu errado, por favor, veja o console.**');
                    })
                }

        })

}
  if (message.content === 'w!a') {
    abby("k")
                                 var canal = message.channel
                                 }
})



client.login(process.env.TOKEN)

module.exports.help = {
    name: "icon",
}