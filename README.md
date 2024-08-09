# Tempo-Template Discord Bot

This repository serves as a template for creating a Discord bot using the `discord.js` library. It provides a modular and scalable structure, making it easy to extend and customize the bot's functionality.

## Features

- **Modular Command Handling:** Easily add new commands by creating files in the `commands` directory.
- **Event Handling:** Manage bot events in the `events` directory, allowing for clean and organized code.
- **Scalable Architecture:** Designed to easily accommodate additional features and integrations.

## Prerequisites

Before setting up the bot, ensure you have the following:

- **Node.js** (v12.0 or higher)
- **npm** (Node Package Manager)
- A **Discord bot token** from the [Discord Developer Portal](https://discord.com/developers/applications)

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/YourUsername/Tempo-Template.git
cd Tempo-Template
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Configure the Bot

Create a `config.json` file in the root directory and populate it with your bot's credentials:
```json
{
  "token": "your_discord_bot_token",
  "clientId": "your_discord_client_id"
}
```
- `token`: Your Discord bot token.
- `clientId`: Your Discord application's Client ID.

### 4. Deploy Commands

To deploy the bot's commands to Discord, run the following command:

node deploy.js

### 5. Run the Bot

Start the bot with the following command:

node index.js

## Project Structure

- `index.js`: The main entry point of the bot. Initializes the bot, loads commands and events.
- `deploy.js`: Script to register slash commands with Discord.
- `commands/`: Directory for command files. Each command is a separate module.
- `events/`: Directory for event files. Each event (e.g., `ready`, `guildCreate`, `guildDelete`) is handled in its own file.
- `config.json`: Contains configuration details like the bot token and client ID.

## Command Example

Here is an example of a command file in the `commands` directory:

ping.js:
```js
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        return interaction.reply(`Ping: ${interaction.client.ws.ping}ms.`);
    },
};
```
## Event Handling

Events are managed in the `events` directory. For example:

ready.js:
```js
const { ActivityType } = require('discord.js');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log("In: " + client.guilds.cache.size + " guilds, with: " + client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0) + " members");
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setActivity('over ' + client.guilds.cache.size + ' guilds', { type: ActivityType.Watching });
	}
};
```
## Customization

### Adding Commands

You can easily add new commands by creating a `.js` file in the `commands` directory. Each command file should export an object with the command's data and execution logic.

### Adding Event Handlers

Events are managed in the `events` directory. You can create a new file for each event you'd like to handle, following this pattern:
```js
module.exports = {
    name: 'eventName', // Replace with the actual event name, like 'guildCreate'
    once: false, // Set to true if the event should only trigger once
    execute(...args) {
        // Event handling logic here
    }
};
```
## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
