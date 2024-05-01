const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_03_04_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE3LFxuICAgICAgICA4NixcbiAgICAgICAgMTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDc2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNixcbiAgICAgICAgMTExLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAwLFxuICAgICAgICAxOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ3LFxuICAgICAgICA3OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NixcbiAgICAgICAgMzgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTExLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY4LFxuICAgICAgICA2NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDgwLFxuICAgICAgICAxODUsXG4gICAgICAgIDYwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMixcbiAgICAgICAgMzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMyxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMCxcbiAgICAgICAgNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgODcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDcxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIaHpJMU5ycVU2MHhSTWNkUWtPUjJYSTVlRHNkV2pZWWVCRmRuUnd4NUdvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyNWlLc1dqVFI0Nkd3SkJZX1p5RVl3XCIsXG4gIFwicGhvbmVJZFwiOiBcImZhNDliZWU2LWY5OWUtNDk4My1hZmNlLWZlMmFkM2JlMjRiYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNixcbiAgICAgIDIyNixcbiAgICAgIDE4MCxcbiAgICAgIDg2LFxuICAgICAgMTQyLFxuICAgICAgMjE4LFxuICAgICAgMTMzLFxuICAgICAgMTI5LFxuICAgICAgMTQzLFxuICAgICAgMzcsXG4gICAgICAxMCxcbiAgICAgIDIyMCxcbiAgICAgIDEwNCxcbiAgICAgIDE3MSxcbiAgICAgIDIxOCxcbiAgICAgIDkyLFxuICAgICAgMjExLFxuICAgICAgMTI1LFxuICAgICAgMixcbiAgICAgIDgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjUsXG4gICAgICAxMDksXG4gICAgICAxOTAsXG4gICAgICAyMDIsXG4gICAgICAxNjgsXG4gICAgICAxOTUsXG4gICAgICA4NCxcbiAgICAgIDk1LFxuICAgICAgMTE3LFxuICAgICAgNjQsXG4gICAgICAxOTEsXG4gICAgICAyMDIsXG4gICAgICAxNDMsXG4gICAgICAxNjEsXG4gICAgICAyNDAsXG4gICAgICA4LFxuICAgICAgMTksXG4gICAgICAxMjEsXG4gICAgICA4MyxcbiAgICAgIDE0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tpazBOc0JFSWE1eGJFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMm1aTWVrMy93SW40U2J4bGxsaXFXSnJZL1liTnV3bEN5VUlmZk16Vmd3RT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZTnplc3hsbzNvZHh0WXl4OWlMSENpRGJtbU4vNWVrVmVydEkwNUVmbUVzbHk1emM5OWVDek54T2ZjUXEwTnhKblpWQ3Z5cmNRR3p0WHU3Z2o1dnpoQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvZ2VnLzdBQW1ZcllzZmcxSGhGRHMycm9YMytNaE8vcnRhRmJEYW1haE5oeVBSaXZnbXdneGppYlY3bXgrclNndVlFVzZNOENsLy9sdldvR210ZFNBQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzU5NDk2OTE0MTo3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY5NjQxNzM4MDM2MTQ6NzlAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi6qqc8J2TsvCdmLPhp4HwnZOy6qqAIOGlh/CdmLPqq4DqqpbwnZis6quA8J2YsyDwn5iIXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1OTQ5NjkxNDE6NzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDUxMDk4NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhRelwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSFF6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiSERaaTJSaTFORm8yb0wwM0o3cmVwUDNhYmgxcDl2OG9QRGp3VHA3ZnpNYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NjA1OTE2NTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxNDUxMDk4OTQzMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
