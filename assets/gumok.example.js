/**
 * gumok.min.js
 * Simple template inspired by Django html syntax.
 * Version: 1.0.0
 * Github: https://github.com/mrjopino/gumok
 * Copyright, 2014 by Jose Pino, @mrjopino
 */
$(document).ready(function() {
$gumok={root:function(e,t){$bodyGum=$(e).html();$(e).html($gumok.gdef($bodyGum,t))},exptemplate:/\{{|}\}/,gdef:function(e,t){$unions=e.split($gumok.exptemplate);$counter=$unions.length;id=1;for(;id<$counter;id+=2){if(t.hasOwnProperty($unions[id])){$unions[id]=t[$unions[id]];console.log("These using Gumok > Happy code!")}}var n=$unions.join("");return n}}

/* App */
  $gumok.root($("body"), {
    "title" : "This is an example of gumok",
    "description" : "Now create your beautiful web applications :)",
  });
  /* End app */

});