const fetch = require('axios')

/**
 * Get Chara or Manga Information
 * 
 * @param {type} type Manga or Chara
 * @param {String} args Name of Character or Title of Manga
 */
const apijikan = async (type, args) => {
    return new Promise((resolve,reject) => {
        const link = 'https://api.jikan.moe/v3/search'
        try {
            switch(type) {
                case 'chara':{
                    fetch(`${link}/character?q=${args}`).then((res) => {
                        const { url, image_url, name, anime } = res.data.results[0]
                        if (anime.length === 0) resolve({ url: url, image: image_url, name: name, from:'Unknown' })
                        if (anime.length >= 1) resolve({ url: url, image: image_url, name: name, from: anime[0].name })
                    }).catch((e) => {console.error(e.message)})
                    break
                }
                case 'manga':{
                    fetch(`${link}/manga?q=${args}`).then((res) => {
                        const { url, image_url, title, chapters, volumes, synopsis } = res.data.results[0]
                        resolve({ url: url, image: image_url, chap: chapters, title: title, vol: volumes, synop: synopsis })
                    }).catch((e) => {console.error(e.message)})
                    break
                }
            }
        } catch(err) {
            console.error(err.message)
        }
    })
}

module.exports = {
    apijikan
}