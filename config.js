const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="mathara,sri lanka."
global.mongodb= process.env.MONGODB_URI || "mongodb+sv://DARKSHAN:
3000@cluster0.t1 wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com
/BxXB834YgV8JorX5tCDEEM";
global.website=process.env.GURL || "https://chat.whatsapp.com
/BxXB834YgV8JorX5tCDEEM" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "233594969141" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,233594969141";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233594969141";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "Virginbreaker" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "VIRGINBREAKER",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "ꪜ𝓲𝘳ᧁ𝓲ꪀ ᥇𝘳ꫀꪖ𝘬ꫀ𝘳",
  ownername:process.env.OWNER_NAME|| "ꪜ𝓲𝘳ᧁ𝓲ꪀ ᥇𝘳ꫀꪖ𝘬ꫀ𝘳",

  sessionName:process.env.SESSION_ID || "SESSION_18_34_02_20_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUZicTR6bnFzU3JNM1cyQzZCREVETGNZOHNkdExOUWlEWEJURGVPSytIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY21CZmhRdHNNSVZIV2NmSm53QWc3elJwQnpMN3FYQ1VIWWcxTG9Hb2VoST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSUZCN2hRQ3dyRGx3bXpJbm5VTXJNOGIzdlR1WC9oK2hGRHFuVSt0MkY4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3S0tBYTR1cU04dW5nN2VHSFk1ckVJYjdmeHRqSllNTVlkWldsTTljamhNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlOVW9SdDZCcHhvazg3RWkxRGkxTjB4ejR3d3REQzErMmNuYld5VHk0VmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNyNmJYRm5JZXNuS3RrY1o2UXNMcmdtMzgvNXUyUFdNVlkxNVhOWU92bGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUFPdGl3Zyt4ckhabkU5djlUbm5pK2NRN3UzT29UK29ET3V1cXdRV28wOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRFJEemx3K0hZUksyRDZxMEorOFBnT2FvU1AzdTYrSVN2RkpDREcvNkJDRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InEyNkZTU0dFdnBFZ2NhSzR3Nk5BNjBwSXgzS0lPWnFtRFRYQUFXb3lSNVNUZjNXcnpjc3ZwOXU0eEU3L3Y5a0VHSjUydXZZZ0VRNVNNZk5tYjZxc2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjUsImFkdlNlY3JldEtleSI6IjNvN29YUlFKbU9pS0JaOTlkanhvS2RwT0x0ZnMvUlJHcGlTY09CdnZYSEE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjZMRUlHeEZaU0F1eW9KalVfOGFyRFEiLCJwaG9uZUlkIjoiZjE5NGQzODQtOTE1ZC00ZWViLWE1YmUtMTgzYjQ1MGNjOWVlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpMNitOZXpkVFV4SXFobDhKZ2pIUklxWE9Naz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFUWRuME5IU1l4U1hWdFpheGpYQmlWOVFuclU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQ0NURzk5V0IiLCJtZSI6eyJpZCI6IjIzMzU5NDk2OTE0MTo1MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLqqpzwnZOy8J2Ys+GngfCdk7LqqoAg4aWH8J2Ys+qrgOqqlvCdmKzqq4DwnZizIPCfmIgifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09EYXBaTUlFS0xoMDY0R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InQ5bmdXVldHN0VPOUNXeHVpdGM3UVlpVGdVL3l3YkVjR3BMUnhMdHFCMHM9IiwiYWNjb3VudFNpZ25hdHVyZSI6InRSTVYwdWJ4bUpqWUE3bzdBSXo2QTBOY0R5ZCs4QmJHVkoweERCenBPaFI4cGJwa0t6dDlIODFER2t5eVpUM01MMU9sNkxSVzlLYUtXZTFzQWVqdUFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJaa2kxOXFYZFBWd3ljelRTdHF0UVR5bmtjSjdnOUkvallwNW9rVXJWUzVuOUE3QjBSMWJuN0lhYnk1SmEwN3Q2MGliRnFmVnNpNHQ5NWU4bVduc0hpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzU5NDk2OTE0MTo1MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiZlo0RmxWaHV4RHZRbHNib3JYTzBHSWs0RlA4c0d4SEJxUzBjUzdhZ2RMIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDg0NTQwNTIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUDc0In0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
