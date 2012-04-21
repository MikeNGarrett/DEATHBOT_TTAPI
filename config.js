// turntable user id of the main bot admin
exports.AdminId = ''; //process.env.TTFMBOT_ADMIN_ID;

// whether or not the bot should auto-awesome every song played
exports.AutoBop = true;

// whether or not dj automation should be on
exports.AutoDJ = true;
// what the bot should say before entering the booth, null if you want nothing to be said
exports.AutoDJEnterMessage = 'DEATHBOT UP';
// what the bot should say before exiting the booth, null if you want nothing to be said
exports.AutoDJExitMessage = 'DEATHBOT DOWN';
// bot will enter the booth if the number of current djs is equal to or below this number
// set to -1 if you want to manually put the bot in the booth
exports.AutoDJMin = 3;
// bot will exit the booth when the number of current djs is equal to or greater than this
// number, set to 6 if you want to manually remove the bot from the booth
// this number should be at least 2 greater than the min
exports.AutoDJMax = 5;

// perform booth enforcement, bot needs to be a room moderator for this to work
exports.BoothEnforce = true;
// maximum time a dj can be idle, < 1 for none
exports.BoothIdleLimit = 45;
// message to say when removing djs for being idle, null for no message
exports.BoothIdleLimitMessage = '';
// minimum amount of time in minutes before someone can get back into the booth, < 1 for none
exports.BoothRateLimit = 0;
// song limit, < 1 for none
exports.BoothSongLimit = 0;
// message to say when removing djs for hitting the song limit, null for no message
exports.BoothSongLimitMessage = 'DEATHBOT SONG LIMIT';

// auth code for the bot to use, should be 'auth+live+xxxxxxxx'
exports.BotAuth = 'auth+live+f4cc9c718c1fd243904c527af880f0d08e1efe16'; //process.env.TTFMBOT_USER_AUTH;
// turntable user id of the bot
exports.BotId = '4f8b43fdeb35c102730001bb'; //process.env.TTFMBOT_USER_ID;
// turntable room id where the bot should be
exports.BotRoom = '4e20467714169c5fc400bd45'; // process.env.TTFMBOT_ROOM_ID;