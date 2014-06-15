/**
 * gumok.min.js
 * Simple template inspired by Django html syntax.
 * Version: 1.0.0
 * Github: https://github.com/mrjopino/gumok
 * Copyright, 2014 by Jose Pino, @mrjopino
 */
$(document).ready(function() {
var $gumok={root:function(e,t){var n=$(e).html();$(e).html($gumok.gdef(n,t))},exptemplate:/\{{|}\}/,gdef:function(e,t){var n=e.split($gumok.exptemplate);var r=n.length;var i="%c";var s="        color: #777e8c;         font-size: 1.30em;         font-weight: bold;     ";var o=1;for(;o<r;o+=2){if(t.hasOwnProperty(n[o])){n[o]=t[n[o]];console.log(i+"These using Gumok > Happy code!",s)}}var u=n.join("");return u}}
/* App */
  $gumok.root($("body"), {
    "title" : "This is an example of gumok",
    "description" : "Now create your beautiful web applications :)",
  });
  /* End app */

});
