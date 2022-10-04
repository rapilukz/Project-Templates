import Client from './Client';
import { Intents } from 'discord.js';

const myIntens = new Intents();
myIntens.add(
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.GUILD_MEMBERS,
  Intents.FLAGS.GUILD_INTEGRATIONS,
  Intents.FLAGS.DIRECT_MESSAGES,
  Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
  Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  Intents.FLAGS.GUILD_MESSAGE_TYPING,
);

new Client({intents: myIntens }).init();
