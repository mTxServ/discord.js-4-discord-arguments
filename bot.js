const CommandoClient = require('./client');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: '?',
    owner: 'VOTRE_ID',
    disableMentions: 'everyone'
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['divers', 'Divers'],
    ])
    .registerCommandsIn(path.join(__dirname, 'commands'))
;

client.once('ready', () => {
    console.log(`Je suis prêt !`);
});

client.on('error', console.error);

client.login('VOTRE_TOKEN');