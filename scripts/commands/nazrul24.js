  const fs = require("fs");
module.exports.config = {
	name: "🤰",
    version: "1.0.1",
	permission: 0,
	credits: "nazrul", 
	description: "hihihihi",
	category: "prefix",
	usages: "🤰",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🙆‍♀️")==0 || event.body.indexOf("🙆‍♂️")==0 || event.body.indexOf("🥸")==0) {
		var msg = {
				body: "প্রত্যেক অসফলতার পর যদি আপনার সফল হওয়ার ইচ্ছা আরো দৃঢ় হয়, তাহলে বুঝবেন আপনি একদিন সফল হবেন🙆‍♂️💘\n✢━━━━━━━━━━━━━━━✢\n----❖----- 𝐌𝐈𝐊𝐀𝐈𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/simanto4.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥸", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }.