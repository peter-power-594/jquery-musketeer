# jquery-musketeer

## Problem

This plugin is an attempt to solve in an affordable way the following issue:
* Contents with different languages are managed in the same place like a CMS or a blog platform
* There are no way to handle multiple languages properly with the current solution
* It's neither impossible to use properly multiple domains or subdomains or subfolders
* The SEO is focusing on one main language only

**IT CAN'T BE SOLVED PROPERLY OF COURSE. THERE ARE PROS / CONS ANYWAY**

## Approach

No magic at all

1. Include all the contents inside the page
Split the same content by language, included in the same html page
Example
~~~html
<div id="en" lang="en">English post. The main content comes first</div>
<div id="fr" lang="fr">Billet en français</div>
<div id="ja" lang="ja">日本語の記事</div>
~~~
It can be perform easily by just hardcoding the layout structure inside one wysiwyg 
itself or if possible a little bit more elegant via a custom field based solution.
Using progressive enhancement the Musketeer will handle for you the display 
of the required / unecessary contents.

2. Manage other languages in based folders
The easiest way is to use virtual folders labelled with the ISO 639-1 language 
codes (same one used for the html document)
Example: 
* http://www.foo.com/about.html (english version - real url)
* http://www.foo.com/fr/about.html, (french version - fake url)
* http://www.foo.com/ja/about.html, (japanese version - fake url)
It can be perform using html5 features and adjusting the 404 page as well.
The Musketeer handle the url rewriting for you by using pushstate and pjax.
Setting meta data as json based, the Musketeer will also handle for you the 
html head property. 