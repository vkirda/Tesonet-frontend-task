# Requirements

* Make 2 pages from .psd template

* Use scss ( can be from scratch || use getbootstrap.com || bulma.io )

* Use some kind of templating engine

* Use git


# Extra points

* Use bem or other css naming convention

* Structure scss (  [SMACSS](http://smacss.com/) || [Atomic](http://github.com/nemophrost/atomic-css) || any other of your choice ) 

* Responsive design

---------------------------------------------------------

# Task is done

* Made one index.html file that displays both pages from .PSD file. When pressing ''reviews'' link JavaScript hides "features" and "download" sections and unhides ''reviews''. When pressing anything else "reviews" dissapers and another sections appears. :)

* Scss from scratch. Used prepros to compile it. No bootstrap and nothing else.

* Used mustache.js templating engine. Made a JSON file to store a data and used JQuery getJSON() method to fetch it. Template is between script tags at index.html file. Mustache.render() method renders it. Templating part is for "reviews" section only. Task says to use templating engine but it doesn't says how much templating needed. :) Need clarification for that becouse it's not obvious for me.

* Yes, I used Git. :) I Created master branch first, then gh-pages branch. Made bunch of commits and pushes there and after I finished - merged with a master branch. Follow the link to see the gh-pages deplyed: https://vkirda.github.io/tesonet-frontend-task/

* Css naming is as BEM as possible. Not perfect though.

* Structure scss... I haven't done that. My scss is all nested as understandable...

* Design is responsive and looks good on my cell phone. :smiley: Used media queries for that and separated from main scss. I also split it to three parts for large, medium and small screens.
