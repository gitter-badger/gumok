 /*! Gumok v1.0.1 | (c) Copyright (c) José Pino, @jofpin | https://github.com/mrjopino/gumok */
$(document).ready(function(){var app='[core-app="'+nameApp+'"]';var $gumok={root:function(e,t){var n=$(e).html();$(e).html($gumok.gdef(n,t))},exptemplate:/\{{|}\}/,gdef:function(e,t){var n=e.split($gumok.exptemplate);var r=n.length;var i=1;for(;i<r;i+=2){if(t.hasOwnProperty(n[i])){n[i]=t[n[i]];console.log("These using Gumok > Happy code!")}}var s=n.join("");return s}}

/* App */
    $gumok.root($(app), {
    "title" : "<h1>Gum<span>ok</span></h1>",
    "description" : "Simple template inspired by Django html syntax.",
    "subdescription" : "Has your Web applications, more beautiful with this library!",
    "text" : "I think with gumok the world and you can make very nice web app.",
    "author" : "Jos\u00e9 Pino",
    "file" : "gumok.js",
    "download" : "<a class=\"btn_download\" href=\"https://github.com/jofpin/gumok/archive/master.zip\">DOWNLOAD</a>",
    "url.github" : "https://github.com/jofpin/gumok",
    "url.twitter" : "https://twitter.com/jofpin"
  });
  /* End app */

});