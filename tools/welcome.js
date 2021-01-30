const fs = require('fs-extra')
const canvas = require('discord-canvas')
const { sleep } = require('../utils')

async function welcome(client, event) {

    const wel = JSON.parse(fs.readFileSync('./handler/message/data/welcome.json'))
    const isWel = wel.includes(event.chat)
    const host = await client.getHostNumber() + '@c.us'
    try {
        if (event.action === 'add' && event.who !== host && isWel) {
            const det = await client.getChatById(event.chat)
            const person = await client.getContact(event.who)
            const profile = await client.getProfilePicFromServer(event.who) || 'https://telegra.ph/file/3f1289c6e05cd95ab67fd.jpg'
            let { pushname, verifiedName, formattedName } = person
            pushname = pushname || verifiedName || formattedName
            const number = Math.floor(Math.random() * 10000)

            const image = await new canvas.Welcome()
            .setUsername(pushname)
            .setDiscriminator(number)
            .setMemberCount(det.groupMetadata.participants.length)
            .setGuildName(det.contact.formattedName)
            .setAvatar(profile)
            .setColor('border', '#0056CC')
            .setColor('username-box', '#0056CC')
            .setColor('discriminator-box', '#0056CC')
            .setColor('message-box', '#0056CC')
            .setColor('title', '#60A3FF')
            .setColor('avatar', '#60A3FF')
            .setBackground('https://bit.ly/3910bFU')
            .toAttachment()
            fs.writeFile(`./temp/${pushname}.png`, image.toBuffer(), function (err) {})
            await sleep(1200)
            await client.sendImage(event.chat, `./temp/${pushname}.png`, 'welcome.png', `*Selamat datang kawan* ${pushname}\n\n*Group Description:*\n${det.groupMetadata.desc}`)
            .then(() => {
                fs.unlinkSync(`./temp/${pushname}.png`)
            })
        }
        if (event.action === 'remove' && event.who !== host && isWel) {
            const det = await client.getChatById(event.chat)
            const person = await client.getContact(event.who)
            const profile = await client.getProfilePicFromServer(event.who) || 'https://telegra.ph/file/3f1289c6e05cd95ab67fd.jpg'
            let { pushname, verifiedName, formattedName } = person
            pushname = pushname || verifiedName || formattedName

            await client.sendFileFromUrl(event.chat, profile, 'pfp.png', `Selamat jalan kawan, @${event.who.replace(/@c.us/, '')}!👋`, null, null, true)
        }
        if (event.action === 'add' && event.by === 'user' && event.who !== host && isWel) {
            const det = await client.getChatById(event.chat)
            const person = await client.getContact(event.who)
            const profile = await client.getProfilePicFromServer(event.who) || 'https://telegra.ph/file/3f1289c6e05cd95ab67fd.jpg'
            let { pushname, verifiedName, formattedName } = person
            pushname = pushname || verifiedName || formattedName
            const number = Math.floor(Math.random() * 10000)

            const image = await new canvas.Welcome()
            .setUsername(pushname)
            .setDiscriminator(number)
            .setMemberCount(det.groupMetadata.participants.length)
            .setGuildName(det.contact.formattedName)
            .setAvatar(profile)
            .setColor('border', '#0056CC')
            .setColor('username-box', '#0056CC')
            .setColor('discriminator-box', '#0056CC')
            .setColor('message-box', '#0056CC')
            .setColor('title', '#60A3FF')
            .setColor('avatar', '#60A3FF')
            .setBackground('https://bit.ly/3910bFU')
            .toAttachment()
            fs.writeFile(`./temp/${pushname}.png`, image.toBuffer(), function (err) {})
            await sleep(1200)
            await client.sendImage(event.chat, `./temp/${pushname}.png`, 'welcome.png', `*Selamat datang kawan* ${pushname}\n\n*Group Description:*\n${det.groupMetadata.desc}`)
            .then(() => {
                fs.unlinkSync(`./temp/${pushname}.png`)
            })
        }
        if (event.action === 'remove' && event.by === 'user' && event.who !== host && isWel) {
            const det = await client.getChatById(event.chat)
            const person = await client.getContact(event.who)
            const profile = await client.getProfilePicFromServer(event.who) ||'https://telegra.ph/file/3f1289c6e05cd95ab67fd.jpg'
            let { pushname, verifiedName, formattedName } = person
            pushname = pushname || verifiedName || formattedName

            await client.sendFileFromUrl(event.chat, profile, 'pfp.png', `Selamat jalan kawan, @${event.who.replace(/@c.us/, '')}!👋`, null, null, true)
        }
    } catch(err) {
        console.error(err.message)
    }
}

module.exports = {
    welcome
}