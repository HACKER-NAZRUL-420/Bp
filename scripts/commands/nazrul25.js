  const fs = require("fs");
module.exports.config = {
	name: "🤡",
    version: "1.0.1",
	permission: 0,
	credits: "nazrul",
	prefix: true,
	description: "hihihihi",
	category: "no prefix",
	usages: "🤡",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🤡")==0 || event.body.indexOf("🤡")==0 || event.body.indexOf("🤍")==0 || event.body.indexOf("💘")==0) {
		var msg = {
				body: "মানুষ তখনই কাঁদে, যখন নিজের মনের সাথে যুদ্ধ করে হেরে যায়। যখন আপন পর হয়ে যায়, অথবা স্বপ্নভঙ হলে বুকের চাপা কস্টগুলি চোখ দিয়ে অশ্রু হয়ে ঝরে পরে🤡 \n✢━━━━━━━━━━━━━━━✢\n----❖----- 𝐌𝐈𝐊𝐀𝐈𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/simanto3.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }