require([
    './chat_msgr/chat_bold',
    './chat_msgr/user'
], function(chat, user){
    var a = user("Max");
    a.addMsg("asdfasdfasf");
});