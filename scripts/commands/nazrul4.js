const fs = require("fs");
module.exports.config = {
	name: "npxs20",
    version: "1.0.1",
	permission: 0,
	credits: "nazrul", 
	prefix: true,
	description: "hihihihi",
	category: "no prefix",
	usages: "😱",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("👶")==0 || event.body.indexOf("🤯")==0 || event.body.indexOf("👶")==0 || event.body.indexOf("🥶")==0) {
		var msg = {
				body: ".প্রত্যেক মানুষকে বিশ্বাস করা বিপজ্জনক কিন্তু কোনো মানুষকে বিশ্বাস না করা আরও বেশি বিপজ্জনক \n✢━━━━━━━━━━━━━━━✢\n----❖----- 𝐌𝐈𝐊𝐀𝐈𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/bot15.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💚", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }