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
// @require greaseauth-base.js
// ==/UserScript==

var clientId = "668519132155.apps.googleusercontent.com"
var clientSecret = "ArfekWWJD2sW9-XVjlJ-R6HF"
var redirectUri = encodeURIComponent("https://www.google.com/greaseauth")

var authCode = getQueryParam("code");
if (!authCode){
  redirectTo("https://accounts.google.com/o/oauth2/auth"
		+"?scope=" + encodeURIComponent("https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile")
		+"&redirect_uri=" + redirectUri
		+"&client_id=" + clientId
		+"&response_type=code&approval_prompt=force")
}else{
    GM_xmlhttpRequest({
        method: "POST",
        url: "https://accounts.google.com/o/oauth2/token",
        data: "code="+authCode+"&client_id="+clientId+"&client_secret="+clientSecret+"&redirect_uri="+redirectUri+"&grant_type=authorization_code",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        onload: function(response) {
            GM_xmlhttpRequest({
                method: "GET",
                url: "https://www.googleapis.com/oauth2/v1/userinfo",
                headers: {"Authorization": "Bearer " + JSON.parse(response.responseText).access_token},
                onload: function(response) {
                   renderJson(response.responseText)
                }
            });   
        }
    });
}
