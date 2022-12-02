const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port= process.env.PORT || 5000
global.email = 'samochubrand@gamail.com'
global.github = 'https://github.com/SAM-OCHU/Kibalanga-Bot'
global.location = 'TZ TA'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '255678101729'
global.devs = '255678101729';
global.website = 'https://SAM-OCHU/Kibalanga-Bot', //add your number 255000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png'
module.exports = {
  botname: process.env.BOT_NAME || 'KIBALANGA BOT',
  ownername:process.env.OWNER_NAME || 'SAM-OCHU',
  sessionName: process.env.SESSION_ID || 'PUT-HERE',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  packname: process.env.PACK_INFO.split(";")[1] || 'Name',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || false,
  HANDLERS: process.env.PREFIX || ['.'],
  nsfw_detect_ai : process.env.NSFW_DETECTION_AI || 'false',
  pmpermit: process.env.PMPERMIT || "false",
  mongodb_url: process.env.MONGODB_URI || "Enter-Mongo-URI-HERE",
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'put-key-here',
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'KIBALANGA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
Footer

{
  "__JSON__": true,
  "AUTHOR": "Valiant.v()",
  "theme": "Kibalanga-Sempoho",
  "LANGUAGE": "English",
  "LANGCODE": "en",
  "STRINGS": {
      "updater": {
          "UPDATE": "*Believe it.\nYour bot is already up-to-date*",
          "NEW_UPDATE": "*it's time to update the bot!*\n\n*Changes:*\n",
          "UPDATED_LOCAL": "*Successfully Updated!*"
      },
      "global": {
          "botName": " POWER BY SAM TECHNOLOGY BRAND",
          "body": "𝑊ℎ𝑎𝑡𝑠𝑎𝑝𝑝 𝐵𝑜𝑡",
          "greet2" : "Hey",
          "pic1": "https://i.pinimg.com/originals/d9/41/8b/d9418bc48ce0520e7cc96de465fe8fff.jpg",
          "pic2": "https://4kwallpapers.com/images/wallpapers/naruto-digital-art-black-background-amoled-3840x2160-5056.png",
          "pic3": "https://wallpapercave.com/wp/wp5308812.jpg",
          "pic4": "https://www.whatspaper.com/wp-content/uploads/2022/05/hd-naruto-wallpaper-whatspaper-25.jpg",
          "pic5": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VwQOTD6uVyD0q2t2Wm7zjsKafXzDxeAffQ&usqp=CAU",
          "pic6": "https://1.bp.blogspot.com/-RyV9J0B2Myw/YGk4E7liJNI/AAAAAAAAR5Q/YKOnZN_H_5ALufwy18u-aE4WWe8BHPV8wCLcBGAsYHQ/s600/Naruto.jpeg",
          "pic7": "https://i.pinimg.com/originals/02/07/94/020794d07925b51b3f219f2639e56214.jpg",
           "greet" : "Hi ",
         "dotbody" : "are you hurt,Scaredy cat.",
           "emijii": "🍥", 
          "promote": "Admin Role Given to my darling",
          "pmallow": "*Hii,This is Kibalanga *\nMy Man is busy right now.\nKindly Leave your Message.\n\n_I will inform him about your message asap......_",
          "pmblock": "❌ Blocked*\n\n You have been blocked for spamming.\n\n _ POWER BY SAM TECHNOLOGY BRAND_",
          "pmwarn": "✋Hii* \nPlease don't spam else I'll block you for spamming. _You have ${checkPermit.times} warning(s)._\n\n * POWER BY SAM TECHNOLOGY BRAND*",
          "permited": "Hii ${tname} Sir*\n\nNow You are permitted by my owner to pm now.\n\n *POWER BY SAM TECHNOLOGY BRAND*", 
          "revoked" : "*Hii ${tname} Sir*\n\nYour pm permit permission has been prevoked now.\n\n _ POWER BY SAM TECHNOLOGY BRAND_",
          "demote": "Uhh,Admin Role Taken back",
          "antlink": "Link Detected.\n*Good Bye Rouge ninja*",
          "session": "\n*This is your session.sam.json,keep it safe and store it properly*\n_Now Upload This json file in Your Forked Repo_\n Connect your repo to Heroku and *Deploy Branch* and Bot will run for Always\n\n*POWER BY ALKADO*",
          "mention": " Please mention any user shinobi",
          "title": "KIBALANGA",
          "footer": "KIBALANGA",
          "by": "Made by: *SAM TECHNOLOGY BRAND*",
          "chat_desc": "Options Avilable* : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete",
          "success": "Done ✓",
          "dot": "Hi, Did you mean *-help?*\n just.. don't bother me while I'm eating ramen",
          "couple_male": "*Lol, you have no enough money to give me boy.*",
          "couple_female": "*wow come closer babe*",
          "admin": "ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ⚠️!",
          "botAdmin": "ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴍᴇ ᴀᴅᴍɪɴ ʀᴏʟᴇ.❗",
          "owner": "ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ᴏɴʟʏ ғᴏʀ ʜᴏᴋᴀɢᴇ ⚠️",
          "group": "ᴛʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ sʜɪɴᴏʙɪ ᴠɪʟʟᴀɢᴇs❗",
          "private": "ᴛʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ ʜᴏᴋᴀɢᴇ ⚠️",
          "bot": "ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ᴏɴʟʏ ғᴏʀ ʜᴏᴋᴀɢᴇ⚠️",
          "wait": "ᴘʀᴏᴄᴇssɪɴɢ ʏᴏᴜʀ ʀᴇᴏ̨ᴜᴇsᴛ𝒕✅"
      },
      "error": {
          "text": "*You may come to regret trying to manipulate me.\nNow go get this Error fixed*"
      }
  }
}
