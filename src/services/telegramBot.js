import { Telegraf } from 'telegraf';
import { Markup } from 'telegraf';

// Log immediately to confirm file execution
console.log('=== Bot file loaded ===');
console.log('TELEGRAM_BOT_TOKEN:', process.env.TELEGRAM_BOT_TOKEN ? 'Set' : 'Not set');
console.log('NODE_ENV:', process.env.NODE_ENV);

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN || 'MISSING_TOKEN');

// Define command handlers
const handleStart = (ctx) => {
  console.log('/start from:', ctx.from.username || ctx.from.id);
  sendMenu(ctx);
};

const handleApp = (ctx) => {
  console.log('/app from:', ctx.from.username || ctx.from.id);
  ctx.sendMessage('Launch: https://t.me/TrustwareHackathonbot/trustware_app');
};

const handleTrustware = (ctx) => {
  console.log('/trustware from:', ctx.from.username || ctx.from.id);
  ctx.sendMessage('Launch: https://app.trustware.io/');
};

const handleMenu = (ctx) => {
  console.log('/menu from:', ctx.from.username || ctx.from.id);
  sendMenu(ctx);
};

// Menu setup
const imageUrl = process.env.NODE_ENV === 'development'
  ? 'https://i.imgur.com/7v3uM5E.jpg' // Public URL for local testing
  : 'https://trustwarehackathon.vercel.app/hackathonlogo.JPG'; // Vercel URL for production

const menuKeyboard = Markup.inlineKeyboard([
  [Markup.button.callback('Start', 'start')],
  [Markup.button.callback('App', 'app')],
  [Markup.button.callback('Trustware', 'trustware')],
  [Markup.button.callback('Menu', 'menu')],
]).reply_markup;

const sendMenu = (ctx) => {
  try {
    ctx.sendPhoto(imageUrl, { reply_markup: menuKeyboard });
  } catch (error) {
    console.error('Error sending photo:', error);
    ctx.sendMessage('Sorry, there was an issue loading the menu. Try again later.');
  }
};

// Command handlers
bot.command('start', handleStart);
bot.command('app', handleApp);
bot.command('trustware', handleTrustware);
bot.command('menu', handleMenu);

// Callback handlers to trigger commands
bot.action('start', (ctx) => {
  handleStart(ctx);
  ctx.answerCbQuery();
});

bot.action('app', (ctx) => {
  handleApp(ctx);
  ctx.answerCbQuery();
});

bot.action('trustware', (ctx) => {
  handleTrustware(ctx);
  ctx.answerCbQuery();
});

bot.action('menu', (ctx) => {
  handleMenu(ctx);
  ctx.answerCbQuery();
});

// Start polling only in development
if (process.env.NODE_ENV === 'development') {
  console.log('Starting bot polling...');
  bot.launch().then(() => {
    console.log('Bot is polling!');
  }).catch((error) => {
    console.error('Polling error:', error);
  });
} else {
  console.log('Production mode: Webhook expected, polling disabled.');
}

export default bot;

