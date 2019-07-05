const Discord = require('discord.js');
const { Client, RichEmbed } = require('discord.js');
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
  // If the message is "how to embed"
  if (message.content === './/desc') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('FlowRadio')
      // Set the color of the embed
      .setColor(0xFF0000)
      // Set the main content of the embed
      .setDescription('Flow Radio is a community driven radio with amazing staff and founders we are sure to keep the fun & creativity flowing! We are supported by the Owner of Contasia Sales which you can join by using the -contasia command! We are applying for DJs Website Admins and Staff!');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
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
       message.reply('Run ```//links1``` for Radio link! Run ```//links2``` for Rules! Run ```//links3``` for COmmands!');
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
