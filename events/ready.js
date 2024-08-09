const { ActivityType } = require('discord.js');
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log("In: " + client.guilds.cache.size + " guilds, with: " + client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0) + " members")
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setActivity('over ' + client.guilds.cache.size + ' guilds', { type: ActivityType.Watching });
	}
}