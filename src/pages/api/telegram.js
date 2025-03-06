import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN); // Use env var for security

// Handle /start command
bot.command('start', (ctx) => {
  ctx.reply('Welcome to TrustwareHackathonBot! Choose an option:', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Launch Trustware', url: 'https://t.me/TrustwareHackathonbot/trustware_app' }],
        [{ text: 'Help', callback_data: 'help' }],
      ],
    },
  });
});

// Handle /trustware command
bot.command('trustware', (ctx) => {
  ctx.reply('Click below to open the Trustware webapp:', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Launch Trustware', url: 'https://t.me/TrustwareHackathonbot/trustware_app' }],
      ],
    },
  });
});

// Handle callback queries (e.g., "Help" button)
bot.action('help', (ctx) => {
  ctx.reply('Here’s how to use the bot: type /trustware to launch the app!');
});

// API route handler
export default async function handler(req, res) {
  try {
    // Process Telegram updates
    await bot.handleUpdate(req.body);
    res.status(200).end();
  } catch (error) {
    console.error('Error in Telegram bot:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Disable body parsing for Telegram webhook
export const config = {
  api: {
    bodyParser: false,
  },
};