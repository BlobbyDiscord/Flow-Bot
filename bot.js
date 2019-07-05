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

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'Welcome');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

client.on('message', message => {
 if (message.content === '//announce') {
  // Create a new webhook
  const hook = new Discord.WebhookClient('588421488714055680', '8oiknw4pn6o82xBIe6k6SI4BTEggDutSStoxFt5sP7ftJB_hI2jMC44Cnne0-lzHiiwb');
  // Send a message using the webhook
  hook.send('No New Announcements!');
 });
 
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
