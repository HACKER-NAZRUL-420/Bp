const fs = require("fs");
module.exports.config = {
	name: "npxs12",
    version: "1.0.1",
	permission: 0,
	credits: "nazrul", 
	prefix: true,
  description: "hihihihi",
	category: "no prefix",
	usages: "npxs12",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf(".😭")==0 || event.body.indexOf(".😭")==0 || event.body.indexOf(".😭")==0 || event.body.indexOf("😭")==0) {
		var msg = {
				body: " .কষ্টের অনুভূতি গুলো যদি দেখানো যেত তাহলে হয়তো কেউ কাউকে কষ্টই দিত না নারী... ..😅💔 \n✢━━━━━━━━━━━━━━━✢\n----❖----- 𝐌𝐈𝐊𝐀𝐈𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs12.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😅", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }