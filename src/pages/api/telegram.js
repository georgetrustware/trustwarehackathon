import bot from '../../services/telegrambot';

export default async function handler(req, res) {
  console.log('Webhook request received:', {
    method: req.method,
    body: req.body,
    headers: req.headers,
  });

  if (process.env.NODE_ENV !== 'development') {
    try {
      if (!req.body || typeof req.body !== 'object') {
        throw new Error('Invalid request body');
      }
      await bot.handleUpdate(req.body);
      res.status(200).json({ status: 'Webhook processed' });
    } catch (error) {
      console.error('Webhook error:', error);
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  } else {
    res.status(200).json({ message: 'Local mode - polling in telegrambot.js' });
  }
}

export const apiConfig = {
  api: {
    bodyParser: false, // Telegram sends raw JSON, handled by Telegraf
  },
};