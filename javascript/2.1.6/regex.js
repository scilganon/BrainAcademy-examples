
function checkEmail(email){
    var atIndex = email.indexOf('@');

    if(atIndex == -1 || atIndex == 0){
        return false;
    }

    var pointIndex = email.indexOf('.', atIndex);

    if(pointIndex == -1 || (email.length -1) == pointIndex){
        return false;
    }

    if(pointIndex-atIndex <= 1){
        return false;
    }

    var lastAtIndex = email.lastIndexOf('@');

    if(lastAtIndex !== atIndex){
        return false;
    }

    return true;
}

//console.log(checkEmail("email@local.net"));

function checkEmailRegExp(email){
    var tpl = new RegExp("\\w{1,}@\\w{1,}\\.\\w{1,}");

    return tpl.test(email);
}

//console.log(checkEmailRegExp("email@local.net"));

var tpl = "Hello,#name#!This is tutorial about regex.";
var name = "max";

//console.log(tpl.replace('#name#', name));

function replaceCustom(str){
    var tpl = new RegExp("([,.!])", "g");
    var tpl_literal = /([,.!])/g;

    return str.replace(tpl_literal, "$1 ");
}

console.log(replaceCustom(tpl));