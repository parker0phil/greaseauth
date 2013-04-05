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

### google

* Register an application with the [google console](https://code.google.com/apis/console#access) (use "https://www.google.com/greaseauth" as redirect uri)
* Load the [greaseauth-google script](https://github.com/parker0phil/greaseauth/raw/master/greaseauth-google.user.js) in greasemonkey (opening the link in firefox should do it automatically)
* Edit the script to add your clientId and clientSecret
* Point your browser to http://www.google.com/greaseauth

### facebook

* //TODO
* Load the [greaseauth-facebook script](https://github.com/parker0phil/greaseauth/raw/master/greaseauth-facebook.user.js) in greasemonkey (opening the link in firefox should do it automatically)
* Edit the script to add your clientId and clientSecret
* Point your browser to http://www.facebook.com/greaseauth

### twitter

* //TODO
* Load the [greaseauth-twitter script](https://github.com/parker0phil/greaseauth/raw/master/greaseauth-twitter.user.js) in greasemonkey (opening the link in firefox should do it automatically)
* Edit the script to add your clientId and clientSecret
* Point your browser to http://www.facebook.com/greaseauth

### More?

* Github?

