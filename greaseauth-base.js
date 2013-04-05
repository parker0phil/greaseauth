//load the code highlighting css
GM_addStyle(GM_getResourceText ("highlight"));

//reset the dom
var body = document.getElementsByTagName("body")[0]
body.innerHTML = ""
body.setAttribute("style","background:none;width:100%;height:100%;margin:10px;padding:10px")


function getQueryParam(variable, query) {
    if (!query) {query = window.location.search.substring(1);}
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}

function redirectTo(destination) {
    window.location = destination
}

function renderJson(jsonString) {
    console.dir(jsonString)
    body.innerHTML = "<pre><code>"+jsonString+"</code></pre>"
    hljs.highlightBlock(body)
}

function clientId(script) {
    return retrieve("clientId", script)
}
function clientSecret(script) {
    return retrieve("clientSecret", script)
}

function retrieve(name, script) {
    var key = script+"::"+name
    if (!GM_getValue (key, "")) {
        GM_setValue (key, prompt ('Please enter ' + name + ' for ' + script,''));
    }
    return GM_getValue (key, "");
}

GM_registerMenuCommand ("Reset greaseauth stored credentials", clearStoredCreds);

function clearStoredCreds() {
	GM_deleteValue("google::clientId")
	GM_deleteValue("google::clientSecret")
}

