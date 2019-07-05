const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
    console.log('I am ready!');
});
 

client.on('message', message => {
    if (message.content === 'hi') {
       message.reply('Hello');
       }
});

client.on('message', message => {
    if (message.content === 'wat') {
       message.reply('??');
       }
});

client.on('message', message => {
    if (message.content === 'lol') {
       message.reply('Whats funny?');
       }
});

client.on('message', message => {
    if (message.content === 'ANNOUNCE25091') {
       message.reply('Discord Server Opened');
       }
});

client.on('message', message => {
    if (message.content === '//rules') {
       message.reply('Check out #rules');
       }
});

client.on('message', message => {
    if (message.content === '//radio') {
       message.reply('Visit https://flowradio.ml/');
       }
});

client.on('message', message => {
    if (message.content === '//ssl') {
       message.reply('SSL is only active if you enter https://flowradio.ml and non SSL is http://flowradio.ml');
       }
});

client.on('message', message => {
    if (message.content === '//links') {
       message.reply('Run ```//links1``` for Radio link! Run ```//links2``` for Rules! Run ```//links3// for COmmands!');
       }
});
client.on('message', message => {
    if (message.content === '//links1') {
       message.reply(':link: https://flowradio.ml/ **Radio**');
       }
});
client.on('message', message => {
    if (message.content === '//links2') {
       message.reply(':link: https://flowradio.ml/rules **Rules**');
       }
});
client.on('message', message => {
    if (message.content === '//links3') {
       message.reply(':link: https://flowradio.ml/commands **Commands**');
       }
});

client.on('message', message => {
    if (message.content === '//help') {
       message.reply('For a list of command visit https://flowradio.ml/commands');
       }
});

client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === '//avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

 
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
