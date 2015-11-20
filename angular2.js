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
    var cx = infer.cx(), esModules = server.plugins["es_modules"] != null;
    updateDefs(esModules);
    server.addDefs(defs);
  });
  
  function updateDefs(esModules) {
    if (esModules) {
      defs["!define"]["!known_modules"] = {
        "angular2/angular2": "!ng.ng",
        "angular2/router": "!ng.ngRouter",
        "angular2/http": "!ng.ngHttp"
      }
    }
    else {
      defs["ng"] = "!ng.ng";
      defs["ngRouter"] = "!ng.ngRouter";
      defs["ngHttp"] = "!ng.ngHttp";
    }
  }
  
  var defs = {
    "!name": "angular2",
    "!define": {
      "!ng": {
        "ng": {
          "ComponentMetadata": {
            "prototype": {
              "selector": {
                "!type": "string",
              },
              "inputs": {
                "!type": "[string]"  
              }
            }
          },
          "Component": {
            "!type": "fn(metadata: +!ng.ng.ComponentMetadata) -> !ng.ng"
          },
          "Class": {
            "!type": "fn() -> !ng.ng"
          },
          "View": {
            "!type": "fn() -> !ng.ng"
          }
        },
        "ngRouter": {
          
        },
        "ngHttp": {
          "Http": {
            
          },
          "Headers": {
            
          }
        }
      }
    }
  }
});
