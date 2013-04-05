// ==UserScript==
// @name        greaseauth-facebook
// @namespace   greaseauth
// @grant       GM_xmlhttpRequest
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @grant    	GM_getValue
// @grant    	GM_setValue
// @grant    	GM_deleteValue
// @grant    	GM_registerMenuCommand
// @include     http://www.facebook.com/greaseauth*
// @include     https://www.facebook.com/greaseauth*
// @version     1
// @require http://yandex.st/highlightjs/7.3/highlight.min.js
// @resource  highlight  http://yandex.st/highlightjs/7.3/styles/default.min.css
// @require greaseauth-base.js
// ==/UserScript==

var clientId = clientId("facebook")
var clientSecret = clientSecret("facebook")
var redirectUri = encodeURIComponent("https://www.facebook.com/greaseauth")

var authCode = getQueryParam("code");
if (!authCode){
  redirectTo("https://www.facebook.com/dialog/oauth"
		+"?scope=" + encodeURIComponent("email") // basic is implicit
		+"&redirect_uri=" + redirectUri
		+"&client_id=" + clientId)
}else{
    GM_xmlhttpRequest({
        method: "POST",
        url: "https://graph.facebook.com/oauth/access_token",
        data: "code="+authCode+"&client_id="+clientId+"&client_secret="+clientSecret+"&redirect_uri="+redirectUri+"&format=json",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        onload: function(response) {
            GM_xmlhttpRequest({
                method: "GET",
                url: "https://graph.facebook.com/me",
                headers: {"Authorization": "Bearer " +  getQueryParam("access_token", response.responseText)},
                onload: function(response) {
                   renderJson(response.responseText)
                }
            });   
        }
    });
}


