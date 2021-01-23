const fs = require('fs-extra')

exports.Welcome = async (message, client, args, chat) => {
    try {
        const wel = JSON.parse(fs.readFileSync('./handler/message/data/welcome.json'))

        if (args[0] === 'on') {
            if (wel.includes(chat.id)) { return client.reply(message.from, 'Already Active!', message.id) }
            wel.push(chat.id)
            fs.writeFileSync('./handler/message/data/welcome.json', JSON.stringify(wel))
            client.reply(message.from, '*Activated!*', message.id)
        } else if (args[0] === 'off') {
            if (!wel.includes(chat.id)) { return client.reply(message.from, 'Not Actived, active this features using !welcome on', message.id) }
            const inx = wel.indexOf(chat.id)
            wel.slice(inx, 1)
            fs.writeFileSync('./hander/message/data/welcome.json', JSON.stringify(wel))
            client.reply(message.from, '*Deactivated!*', message.id)
        }
        
    } catch(e) {
        console.error(e.message)
        await client.reply(message.from, `Something Wrong\n${e.message}`, message.id)
    }
}