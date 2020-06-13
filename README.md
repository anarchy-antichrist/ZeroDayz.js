# Whats This?
A discord.js wrapper made for ZeroDayz with lots of bug fixes and crash preventers etc

# Installation
`npm i ZeroDayz.js`

## Example usage
```js
const ZeroDayz = require('ZeroDayz');
const selfbot = new ZeroDayz.Client();

selfbot.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

selfbot.on('message', msg => {
  //fixed issue with discord api crashing after a groupchat is created or updated.
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

selfbot.login('token');
```
