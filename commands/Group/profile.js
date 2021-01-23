const fs = require('fs-extra')

async function profile(contact, message, groupAdmins, client) {
    try {

        var ban = JSON.parse(fs.readFileSync('./handler/message/data/banned.json'))
        var banned = ban.includes(contact)
        const person = await client.getContact(contact)
        let { pushname, verifiedName, formattedName } = person
        var sts = await client.getStatus(contact)
        var pfp = await client.getProfilePicFromServer(contact)
        var adm = groupAdmins.includes(contact)

        pushname = pushname || verifiedName || formattedName
        if (pfp === undefined) {
            var pic = 'https://telegra.ph/file/3f1289c6e05cd95ab67fd.jpg'
        } else {
            var pic = pfp
        }
        await client.sendFileFromUrl(message.from, pic, 'pfp.png', `*Username:* ${pushname}
        
*Info:* ${sts ? sts.status : 'No Info'}

*Is Admin:* ${adm ? 'Yes' : 'No'}

*Banned:* ${banned ? 'Yes' : 'No'}`, message.id)
    } catch(e) {
        console.error(e.message)
        await client.reply(message.from, `Something Wrong\n${e.message}`, message.id)
    }
}

async function groupProfile(chat, message, client) {
    try {

        const { formattedTitle, name } = chat
        const { desc, owner, participants } = await chat.groupMetadata
        const totalMem = await participants.length
        let pfp = await client.getProfilePicFromServer(chat.id)
        const link = await client.getGroupInviteLink(chat.id)
        if (pfp === undefined) {
            var pic = 'https://telegra.ph/file/3f1289c6e05cd95ab67fd.jpg'
        } else {
            var pic = pfp
        }
        await client.sendFileFromUrl(message.from, pic, 'pfp.png', `*Group Name:* ${name || formattedTitle}

*Total Member:* ${totalMem}

*Group Owner:* ${owner.replace('@c.us','')}

*Group Invite Link:* ${link}

*Group Description:*\n${desc}`, message.id)

    } catch(e) {
        console.error(e.message)
        await client.reply(message.from, `Something Wrong\n${e.message}`, message.id)
    }
}

module.exports = {
    profile,
    groupProfile
}