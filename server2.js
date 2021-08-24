const { exec } = require('child_process');
const fs = require("fs");
const Discord = require("discord.js");

let client = new Discord.Client();
client.config = process.env

var Connection = require('ssh2');

var Cliente = require('ssh2').Client;
 
var conn = new Cliente();

conn.on('ready', function() {
  console.log('Client :: ready');
  conn.shell(function(err, stream) {
    if (err) throw err;
    stream.on('close', function() {
      console.log('Stream :: close');
      conn.end();
    }).on('data', function(data) {
      console.log('OUTPUT: ' + data);
    });
    client.on("message", async message => {
      if (message.content.startsWith("w!command ")){
        var args= await message.content.substr("w!command ".length)
      
       conn.exec(args), function(err, stream) {
    if (err)
      throw err;}
      }
    })
  });
}).connect({
  host: 'kawaiipotato.tk',
  port: 22,
  username: 'jssbezerra1234',
  passphrase: process.env.PASSWORD,
  privateKey: require('fs').readFileSync('kk')
});


/*client.on("message", msg => {
	if (msg.channel.id === client.config.channel && msg.author.id === client.config.owner) exec(msg.content, (err, stdout, stderr) => {
		if (err) console.error(err);
		if (stdout) msg.channel.send("```\n" + Discord.escapeMarkdown(stdout, true) + "```", options);
		if (stderr) msg.channel.send("```\n" + Discord.escapeMarkdown(stderr, true) + "```", options);
	});
});

client.on("ready", () => console.log(`Logged in as ${client.user.tag}`));
*/
client.login(client.config.TOKEN);
