import bot from '../../services/telegramBot';

export default async function handler(req, res) {
  if (process.env.NODE_ENV !== 'development') {
    try {
      await bot.handleUpdate(req.body);
      res.status(200).end();
    } catch (error) {
      console.error('Webhook error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(200).json({ message: 'Local mode - check telegramBot.js for polling' });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};