const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
    console.log('I am ready!');
});
 
client.on('message', message => {
    if (message.content === '//rules') {
       message.reply('Check out #rules');
       }
});

client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === '//avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});



client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '//radio') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('FlowRadio')
      // Set the color of the embed
      .setColor(0xFF0000)
      // Set the main content of the embed
      .setDescription('https://flowradio.ml');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});
 
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
