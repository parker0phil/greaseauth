// ==UserScript==
// @name        greaseauth-google
// @namespace   greaseauth
// @grant       GM_xmlhttpRequest
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @include     http://www.google.com/greaseauth*
// @include     https://www.google.com/greaseauth*
// @version     1
// @require http://yandex.st/highlightjs/7.3/highlight.min.js
// @resource  highlight  http://yandex.st/highlightjs/7.3/styles/default.min.css
// ==/UserScript==

GM_addStyle(GM_getResourceText ("highlight"));

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}

var authCode = getQueryVariable("code");
var baseUri = "https://accounts.google.com/o/oauth2"
var clientId = "668519132155.apps.googleusercontent.com"
var clientSecret = ""
var redirectUri = "https%3A%2F%2Fwww.google.com%2Fgreaseauth"

if (authCode){
    GM_xmlhttpRequest({
        method: "POST",
        url: baseUri + "/token",
        data: "code="+authCode+"&client_id="+clientId+"&client_secret="+clientSecret+"&redirect_uri="+redirectUri+"&grant_type=authorization_code",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        onload: function(response) {
            var accessToken = JSON.parse(response.responseText).access_token
            GM_xmlhttpRequest({
                method: "GET",
                url: "https://www.googleapis.com/oauth2/v1/userinfo",
                headers: {
                    "Authorization": "Bearer " + accessToken
                },
                onload: function(response) {
                   var body = document.getElementsByTagName("body")[0]
                   body.setAttribute("style","background:none;")
                   body.innerHTML = "<pre><code>"+response.responseText+"</code></pre>"
                   hljs.highlightBlock(body)
                }
            });   
        }
    });
}else{
    window.location = baseUri + "/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&redirect_uri="+redirectUri+"&response_type=code&client_id="+clientId+"&approval_prompt=force"
}