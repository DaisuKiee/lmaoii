import { DiscordCommand } from 'discord-module-loader';
import { ChatInputCommandInteraction } from 'discord.js';

export default new DiscordCommand({
  command: {
    name: 'instructions',
    description: 'Replies with guide!',
  },
  execute: async (interaction: ChatInputCommandInteraction) => {
    await interaction.reply(`Hi, this is Daisuki, the developer of Plug and Chill. Meet Plug & Chill Assistant: Plug & Chill Assistant is an AI language model supported by Chat GT. It helps you finish your homework faster and more like essays, or even your research study. For more questions, DM me!
    
    do: /chat
    
    THANKYOU AND HAVE A GREAT DAY!`);
  },
});
