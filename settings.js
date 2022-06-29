//════════════(00)═══════════════════════════════════════//
//
//                              K.PRABHASHA
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════(00)════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `I'm LIVING🌚💗

@𝖗𝖎𝖉𝖊𝖗𝖇𝖔𝖙1 🤖 𝖔𝖜𝖓𝖊𝖉 𝖇𝖞 A̳s̳h̳e̳n̳ ̳R̳i̳d̳e̳r̳ 🇱🇰

💗 A̳s̳h̳e̳n̳ ̳R̳i̳d̳e̳r̳ 🇱🇰
` //Costomize Alive Message (type your message in `` )

global.owner = ['+94784749430'] //Owner number in aive msg
global.premium = ['+94784749430'] //Owner Number info
global.ownernomer = '+94784749430' //Owner Number <<<

global.ownername = '😎𝙆.𝙋𝙧𝙖𝙗𝙝𝙖𝙨𝙝𝙖' //Owner Name
global.botname = ' ☬RED༒DRAGON' //Bot Name

global.button = '🤭මේක ටච් කරන්න📍' //Costomize A Button Name In Alive Message
global.btnurl = '🙂🔥දැන් සැපද?😑' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = '@riderbot ' //Bot Pacage Name
global.author = 'Ashen Rider❯' //Author Name
global.prefa = ['','!','.','😂','❤','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor In Menu!


global.ig = 'https://www.youtube.com/channel/UC2PmyEBQcSb0yJs4JUi4zqA' //Github Account!
global.footer = '@𝖗𝖎𝖉𝖊𝖗𝖇𝖔𝖙1.' // DO NOT CHANGE!

global.mess = { // Error Mesages
    success: 'Done ✅',
    admin: 'ඒව ඇඩ්ම්න්ලට විතරයි!😉',
    botAdmin: 'ඇඩ්මින් දාහං නැත්තම් බොට් වැඩ නෑ😥',
    owner: 'Only Owner can use this!😉',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Bot😝',
    wait: '👉plz wait',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'අදට බොට්ගෙ වැඩ ඉවරය්‍යි...හෙට එන්න',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('.https://ibb.co/QFggzHj')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
