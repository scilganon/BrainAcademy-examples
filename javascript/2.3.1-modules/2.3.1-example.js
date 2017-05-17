(function(){
    var globalScopeName = config.welcomeNS || 'welcome';

    var name= 'max';

    function formatMsg(name){
        console.log('Welcome to Hell, ' + name);
    }

    function welcome(){
        formatMsg(name);
    }

    window[globalScopeName] = welcome;
})()