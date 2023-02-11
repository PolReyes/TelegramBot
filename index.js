require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');
const TOKEN = process.env.TOKEN;
const bot = new TelegramBot(TOKEN, { polling: true });



const textRules = "-NotSpam \n-NotFakeNews \n-NotPornographicContents \n-NotGore \n-NotSpoilers"


bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    // send a message to the chat acknowledging receipt of their messag
    if (msg.text.toString().toLowerCase().includes('rules')) {
        bot.sendMessage(chatId, textRules);
    }
});

//console.log(process.env.TELEGRAM_BOT_TOKEN)