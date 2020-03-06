# Six degrees telegram bot

## What it does?

This bot uses whosampled.com to find connections between different musicians.
For example:

![](https://i.ibb.co/74h9Njc/Screenshot-from-2020-03-06-17-46-16.png)

## How to use it?

##### Development mode:

- Install dependencies
  `$ npm install`
- Create your bot token (see how: https://core.telegram.org/bots#6-botfather)
- Create .env file within root of a project and assign your token to BOT_TOKEN value like this:
  `BOT_TOKEN=<your token>`
- Now run the app
  `$ npm start`
- Now you can write `/start` to your bot in telegram

##### Production mode:

- Build docker image
  `$ docker build -t <image name>`
- Run the image
  `$ docker run -p <local port>:<container port> -d <image name>`
- Now your bot works
