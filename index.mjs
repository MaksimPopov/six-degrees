import TgBot from "node-telegram-bot-api";
import { handleStart, handleHelp, handleMessage } from "./src/controller.mjs";

const bot = new TgBot(process.env.BOT_TOKEN, { polling: true });

bot.onText(/\/start/, msg => handleStart(msg, bot));
bot.onText(/\/help/, msg => handleHelp(msg, bot));
bot.on("message", async msg => handleMessage(msg, bot));

bot.on("polling_error", err => {
  console.error(err);
});