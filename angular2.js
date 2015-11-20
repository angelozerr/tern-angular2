(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"), require("tern/lib/comment"),
               require("acorn/dist/walk"));
  if (typeof define == "function" && define.amd) // AMD
    return define(["tern/lib/infer", "tern/lib/tern", "tern/lib/comment", "acorn/dist/walk"], mod);
  mod(tern, tern, tern.comment, acorn.walk);
})(function(infer, tern, comment, walk) {
  "use strict";

  tern.registerPlugin("angular2", function(server, options) {
    server.addDefs(getDefs());
  });
  
  function getDefs() {
    return defs;
  }
  
  var defs = {
    "ng": {
      
    }    
  }
});
