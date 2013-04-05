greaseauth
==========

greaseauth is a toy project to demo the oauth2 implementations of some of the main online identity providers.

It uses [greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) to provide a client written in javascript but actually demonstrates the server-side flows. For this reason to actually run the scripts you need to register to get your own clientId and clientSecret (as I don't really want to share mine with the world!)

## See the differences

The scripts are designed to be diffed and highlight the differences between the implementations.

The following links use [http://www.mergely.com] to diff the providers. 

//TODO:

[google vs facebook](http://www.mergely.com)
[google vs twitter](http://www.mergely.com)
[facebook vs twitter](http://www.mergely.com)

## Try them

First you need to [install the greasemonkey firefox plugin](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)

Note: If you need to clear the stored credentials entered below then use Greasemonkey > User Script Commands > Reset greaseauth stored credentials

### google

* Register an application with the [google console](https://code.google.com/apis/console#access) 
* Use "https://www.google.com/greaseauth" as redirect uri 
* You will be prompted to enter the client id and secret the first time you use the script
* Load the [greaseauth-google script](https://github.com/parker0phil/greaseauth/raw/master/greaseauth-google.user.js) in greasemonkey (opening the link in firefox should do it automatically)
* Point your browser to http://www.google.com/greaseauth

#### revoking access

[https://accounts.google.com/b/0/IssuedAuthSubTokens?hl=en]

### facebook

* Register an application with the [facebook app dashboard](https://developers.facebook.com/apps) 
* Use "https://www.facebook.com/greaseauth" as Website with Facebook Login > Site URL
* You will be prompted to enter the app id and secret (as client id and secret) the first time you use the script
* Load the [greaseauth-facebook script](https://github.com/parker0phil/greaseauth/raw/master/greaseauth-facebook.user.js) in greasemonkey (opening the link in firefox should do it automatically)  - you will be prompted to enter these the first time you use the script
* Point your browser to http://www.facebook.com/greaseauth

#### revoking access

[https://www.facebook.com/settings?tab=applications]

### twitter

* //TODO
* Load the [greaseauth-twitter script](https://github.com/parker0phil/greaseauth/raw/master/greaseauth-twitter.user.js) in greasemonkey (opening the link in firefox should do it automatically)  - you will be prompted to enter these the first time you use the script
* Point your browser to http://www.twitter.com/greaseauth

### More?

* Github?



