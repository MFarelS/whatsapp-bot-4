const { decryptMedia } = require('@open-wa/wa-automate')
const { color, sleep, processTime } = require('../../utils')
const sharp = require('sharp')
const moment = require('moment-timezone')
moment.tz.setDefault('Asia/Jakarta').locale('id')

module.exports = faizself = async (client, message) => {
    try {
        const {
            type,
            id,
            from,
            to,
            t,
            sender,
            isGroupMsg,
            chat,
            chatId,
            caption,
            isMedia,
            mimetype,
            quotedMsg,
            quotedMsgObj,
            author,
            mentionedJidList
        } = message
        const dari = sender && sender.isMe ? to : from
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, formattedName, verifiedName } = sender
        pushname = pushname || formattedName || verifiedName
        const commands = caption || body || ''
        const command = commands.toLowerCase().split(' ')[0] || ''
        const args = commands.split(' ')

        const msgs = (message) => {
            if (command.startsWith(`${prefix}`)) { 
                if (message.length >= 10){
                    return `${message.substr(0, 15)}`
                }else{
                    return `${message}`
                }
            }
        }

        if (typeof Array.prototype.splice === 'undefined') {
            Array.prototype.splice = function (index, howmany, elemes) {
                howmany = typeof howmany === 'undefined' || this.length;
                var elems = Array.prototype.slice.call(arguments, 2), newArr = this.slice(0, index), last = this.slice(index + howmany);
                newArr = newArr.concat.apply(newArr, elems);
                newArr = newArr.concat.apply(newArr, last);
                return newArr;
            }
        }

        //
        const prefix = '?'
        const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
        const botNumber = await client.getHostNumber() + '@c.us'
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await client.getGroupAdmins(groupId) : ''
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber) : false
        const ownerNumber = botNumber
        const isOwner = ownerNumber.includes(sender.id)
        const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'

        //
        const isCmd = command.startsWith(`${prefix}`)
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
        const isQuotedAudio = quotedMsg && (quotedMsg.type === 'audio' || quotedMsg.type === 'ptt' || quotedMsg.type === 'ppt')
        const isQuotedDocument = quotedMsg && quotedMsg.type === 'document'

        //
        if (isCmd && !isGroupMsg) { console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname)) }
        if (isCmd && isGroupMsg) { console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle)) }

        if (isOwner) {
            switch (command) {
                case `${prefix}ping`:
                    client.reply(dari, `\`\`\`[𝗣𝗜𝗡𝗚]\`\`\`\n\nRespond Take: _${processTime(t, moment())}_ seconds`, id)
                    break
                case `${prefix}stat`:{
                    const me = await client.getMe()
                    const battery = await client.getBatteryLevel()
                    const isCharge = await client.getIsPlugged()
                    client.reply(dari, `\`\`\`[𝗦𝗧𝗔𝗧𝗨𝗦 𝗕𝗢𝗧]\`\`\`\n\n*Phone Status*\n*Battery:* ${(`${battery}% ${isCharge ? 'Lagi dicas' : 'Ga ngecas'}`)}\n${Object.keys(me.phone).map(key => `*${key}:* ${me.phone[key]}`).join("\n")}\n\n\`\`\`[𝗦𝗘𝗟𝗙𝗕𝗢𝗧 𝗕𝗬 𝗙𝗔𝗜𝗭]\`\`\``, id)
                    break
                }
                default:
                    break
            }
        }
    } catch(err) {
        console.log(color('[ERROR]', 'red'), err)
    }
}