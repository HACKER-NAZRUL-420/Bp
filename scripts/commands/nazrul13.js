const fs = require("fs");
module.exports.config = {
	name: "npxs10",
    version: "1.0.1",
	permission: 0,
	credits: "nazrul", 
	prefix: true,
	description: "hihihihi",
	category: "no prefix",
	usages: "npxs10",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😓")==0 || event.body.indexOf("😨")==0 || event.body.indexOf("😰")==0 || event.body.indexOf("🥺")==0) {
		var msg = {
				body: ".-সে আমাকে ভালোবাসেনি..!!অবহেলা করে চলে গেছে,কিন্তু তার প্রতি মায়া আমার আজও রয়ে গেছে ..!!😔💔🥀 \n✢━━━━━━━━━━━━━━━✢\n----❖----- 𝐌𝐈𝐊𝐀𝐈𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs10.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }