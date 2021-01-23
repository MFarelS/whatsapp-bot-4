<h1 align="center">WhatsApp Bot</h1>

# Needed
- NodeJS 14x [Download](https://nodejs.org/en/download)
- LibWebP [Download](https://developers.google.com/speed/webp/download)
- imagemagick [Download](https://imagemagick.org/script/download.php)<br />
To get YouTube Cookie [Add to Chrome](http://bit.ly/3pb05kJ)<br />
To get YouTube ApiKey [Tutorial](https://www.slickremix.com/docs/get-api-key-for-youtube/)<br />
Change ownerNumber [Here](https://github.com/FaizBastomi/whatsapp-bot/blob/b0c39845020f91202e538d909499d0ee17b02729/handler/message/index.js#L48) (Don't forget use `@c.us`)

## Clone This Project
```bash
> git clone https://github.com/FaizBastomi/whatsapp-bot.git
> cd whatsapp-bot
```

## Installing
```bash
> npm install
```

# Options
## Windows
```js
const options = {
    sessionId: 'bot',
    headless: true,
    qrTimeout: 0,
    authTimeout: 0,
    restartOnCrash: start,
    cacheEnabled: false,
    useChrome: true,
    killProcessOnBrowserClose: true,
    throwErrorOnTosBlock: false,
    chromiumArgs: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--aggressive-cache-discard',
        '--disable-cache',
        '--disable-application-cache',
        '--disable-offline-load-stale-cache',
        '--disk-cache-size=0',
        '--disable-extensions',
        '--disable-gl-extensions',
        '--disable-extensions-https-throttling',
        '--disable-extensions-file-access-check'
    ]
}
```

## Linux
```js
const options = {
    sessionId: 'bot',
    headless: true,
    qrTimeout: 0,
    authTimeout: 0,
    restartOnCrash: start,
    cacheEnabled: false,
    executablePath: "/usr/bin/google-chrome-stable",
    killProcessOnBrowserClose: true,
    throwErrorOnTosBlock: false,
    chromiumArgs: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--aggressive-cache-discard',
        '--disable-cache',
        '--disable-application-cache',
        '--disable-offline-load-stale-cache',
        '--disk-cache-size=0',
        '--disable-extensions',
        '--disable-gl-extensions',
        '--disable-extensions-https-throttling',
        '--disable-extensions-file-access-check'
    ]
}
```

## Start
```bash
> npm start
```
Scan the QR Code