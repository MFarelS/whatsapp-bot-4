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
Edit options in index.js<br />
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

## Thanks To
<table>
    <tr>
    <td align="center"><a href="https://github.com/YogaSakti" target="_blank"><img src="https://avatars.githubusercontent.com/u/24309806?v=4" width="100px;" alt=""/></a><br />
<sub><b>YogaSakti</b></sub><br /></td>
    <td align="center"><a href="https://github.com/ItzNgga" target="_blank"><img src="https://avatars.githubusercontent.com/u/29621457?v=4" width="100px;" alt=""/></a><br />
<sub><b>ItzNgga</b></sub><br /></td>
    <td align="center"><a href="https://github.com/TobyG74" target="_blank"><img src="https://avatars.githubusercontent.com/u/32604979?v=4" width="100px;" alt=""/></a><br />
<sub><b>TobyG74</b></sub><br /></td>
    </tr>
</table><br />
And Much More

## Rest API
The Rest API that used in this project.<br />
Don't forget to support them.
- [JoJo API](https://docs-jojo.herokuapp.com)
- [Melodicxt API](https://api-melodicxt-2.herokuapp.com)
- [Zeks API](https://api.zeks.xyz)
- [Tobz API](https://tobz-api.herokuapp.com)
- [Terhambar.com](https://scrap.terhambar.com)
- [CF's API](https://api.computerfreaker.cf)