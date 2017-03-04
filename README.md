# jQuery Musketeer

## About 

### Main Issue

This plugin is an attempt to solve in an affordable way the following issue:
* Contents with different languages are managed in the same place like a CMS or a blog platform
* There are no way to handle multiple languages properly with the current solution
* It's neither impossible to use properly multiple domains or subdomains or subfolders
* The SEO is focusing on one main language only

**IT CAN'T BE SOLVED PROPERLY OF COURSE. THERE ARE PROS / CONS ANYWAY**

### Approach

No magic at all

1) Include all the contents inside the page

Split the same content by language, included in the same html page

Example
~~~html
<div id="en" lang="en">English post. The main content comes first</div>
<div id="fr" lang="fr">Billet en français (french post)</div>
<div id="ja" lang="ja">日本語の記事 (japanese one)</div>
~~~
It can be perform easily by just hardcoding the layout structure inside one wysiwyg 
itself or if possible a little bit more elegant via a custom field based solution.  
Using progressive enhancement the Musketeer will handle for you the display 
of the required / unecessary contents.

2) Manage other languages in based folders

The easiest way is to use virtual folders labelled with the ISO 639-1 language 
codes (same one used for the html document's attribute lang)

Example: 

* http://www.foo.com/about.html (english version - real url)
* http://www.foo.com/fr/about.html, (french version - fake url)
* http://www.foo.com/ja/about.html, (japanese version - fake url)

It can be perform using html5 features and adjusting the 404 page as well.
The Musketeer handles the url rewriting for you by using pushstate and pjax.
Setting meta data as json based, the Musketeer can also handle for you the 
head of html (open graph meta tags,...) 

## Setup

### Requirements
The current script relies heavily on the following plugins:
* [jQuery >= 1.8](https://github.com/jquery/jquery)
* [jQuery Storage](https://github.com/andris9/jStorage)
* [Barba.js 1.0.0](https://github.com/luruke/barba.js)

So you need to include them as well.  
Internet Explorer 10 at least is required.

### Basic Setup

Just put at the end of the body the settings are json or javascript object.

JSON: (**Please keep the script tag with its id**)

~~~html
<script id="musketeer-setting" type="application/json">{
	"debug":		"1",
	"i18n": {
		"base":		"en",
		"langs":	[ "en", "fr", "ja" ],
		"selector":	".i18n-%lang",
		"menu":		"#i18n-switch"
	}
}</script>
~~~

Javascript Object
~~~html
<script>
	musketeer.options = {
		debug:			1,
		i18n: {
			base:		"ja",
			langs:		[ "en", "ja" ],
			selector:	".i18n-%lang",
			menu:		"#i18n-switch"
		}
	}
</script>
~~~