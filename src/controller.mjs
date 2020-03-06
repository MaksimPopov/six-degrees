import { isCommand, getData } from "./services.mjs";

export const handleStart = (msg, bot) => {
  const chatId = msg.chat.id;
  const message = `Hi, I'm 6-D! Welcome to Six Degrees of Music Separation. Enter the names of any two artists from the musical universe and I'll tell you how they are connected. Let's see if you can outsmart me!`;

  bot.sendMessage(chatId, message);
  handleHelp(msg, bot);
};

export const handleHelp = (msg, bot) => {
  const chatId = msg.chat.id;
  const message = `How do I work? Just type me two artists seperated by comma. \n\nFor example: \nDeath Grips, Alla Pugachova`;

  bot.sendMessage(chatId, message);
};

export const handleMessage = async (msg, bot) => {
  if (isCommand(msg.text)) return;
  const chatId = msg.chat.id;

  const artists = msg.text.split(", ");
  const { error, data, title } = await getData(artists);

  if (error) return bot.sendMessage(chatId, error);

  bot.sendMessage(
    chatId,
    `${title} ${
      data && data.length > 0
        ? data.map((item, i) => `\n\n${i + 1}: ${item.replace(/ {1,}/g, " ")}`)
        : ""
    }`
  );
};