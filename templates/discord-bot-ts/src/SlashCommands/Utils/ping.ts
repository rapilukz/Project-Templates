import { SlashCommand } from '../../Interfaces';
import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';

export const command: SlashCommand = {
    category: 'Util',
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Ping the bot')
    .setDefaultPermission(true),
    run: async (interaction: CommandInteraction) => {
        interaction.reply('Pong!');
    }
}