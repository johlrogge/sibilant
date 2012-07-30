var sibilant = {  };
//(defun error (str) (throw str))
//(defun inspect (item) (if item.to-source (item.to-source) (item.to-string)))
(window)["sibilant"] = sibilant;
var exports = {  };
//(include "../include/functional")
//(include "../src/core")
define(["js!sibilant/core!exports=sibilant"], function(core) {return { load: function(name, require, load, config) {return console.log("loading ", name);} };});
