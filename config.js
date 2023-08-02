import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6282146161471', '美Ferry',true]
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6282146161471' //Ganti
global.packname = '© Sticker by'
global.author = 'Ferry-MD'
global.namebot = 'Mitsuha Bot'
global.wm = '© Mitsuha Bot MD By danzz'
global.stickpack = '© Sticker by'
global.stickauth = 'Mitsuha Bot'
// Link Sosmed
global.sig = 'https://instagram.com/_xwby_?igshid=ZDc4ODBmNjlmNQ=='
global.sgh = 'https://github.com/Xyroinee'
global.sgc = 'https://chat.whatsapp.com/JLPXgJKp0eo7EC8Yknvn7J'
// Donasi
global.psaweria = 'https://saweria.co/Danzzbotwa'
global.ptrakterr = 'https://shoplinks.to/vyna-store'
global.povo = '0823-8992-4037'
// Info Wait
global.wait = '⏳ Proses...'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = 'j9XFN6zChx'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "j9XFN6zChx",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})