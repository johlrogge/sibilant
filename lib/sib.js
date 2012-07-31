var sibilant = {  };
var error = (function(str) {
  // str:required
  throw new Error (str);
});

var inspect = (function(item) {
  // item:required
  return (function() {
    if (item.toSource) {
      return item.toSource();
    } else {
      return item.toString();
    };
  })();
});

(window)["sibilant"] = sibilant;
var exports = {  };
var bulkMap = (function(arr, fn) {
  // arr:required fn:required
  var index = 0,
      groupSize = fn.length,
      retArr = [  ];;
  (function() {
    var __returnValue__ = undefined;;
    while ((index < arr.length)) {
      __returnValue__ = (function() {
        retArr.push(fn.apply(undefined, arr.slice(index, (index + groupSize))));
        return index += groupSize;
      })();
    };
    return __returnValue__;
  })();
  return retArr;
});

var inject = (function(start, items, fn) {
  // start:required items:required fn:required
  var value = start;;
  (function() {
    if ((items) && (items).constructor.name === "Array") {
      return items.forEach((function(item, index) {
        // item:required index:required
        return value = fn(value, item, index);
      }));
    };
  })();
  return value;
});

var map = (function(items, fn) {
  // items:required fn:required
  return inject([  ], items, (function(collector, item, index) {
    // collector:required item:required index:required
    collector.push(fn(item, index));
    return collector;
  }));
});

var select = (function(items, fn) {
  // items:required fn:required
  return inject([  ], items, (function(collector, item, index) {
    // collector:required item:required index:required
    (function() {
      if (fn(item, index)) {
        return collector.push(item);
      };
    })();
    return collector;
  }));
});

var detect = (function(items, fn) {
  // items:required fn:required
  var returnItem = undefined,
      index = 0,
      items = items;;
  return (function() {
    var __returnValue__ = undefined;;
    while ((!((items.length === index) || returnItem))) {
      __returnValue__ = (function() {
        (function() {
          if (fn((items)[index], index)) {
            return returnItem = (items)[index];
          };
        })();
        return ((index)++);
      })();
    };
    return __returnValue__;
  })();
});

var reject = (function(items, fn) {
  // items:required fn:required
  var args = [ items, fn ];;
  return select(items, (function() {
    return (!fn.apply(undefined, arguments));
  }));
});

var compact = (function(arr) {
  // arr:required
  return select(arr, (function(item) {
    // item:required
    return (!!(item));
  }));
});

var flatten = (function(items) {
  // items:rest
  var items = Array.prototype.slice.call(arguments, 0);
  
  return inject([  ], items, (function(collector, item) {
    // collector:required item:required
    return collector.concat((function() {
      if ((item) && (item).constructor.name === "Array") {
        return flatten.apply(undefined, item);
      } else {
        return item;
      };
    })());
  }));
});


console.log(sibilant.macros);

define(["text", "js!sibilant/core!exports=sibilant", "text!include/amd.sibilant", "text!include/macros.sibilant", "curl/_privileged"], function(text, core, amd, macros, priv) {console.log((name + "loading..."));
return { load: function(name, require, load, config) {console.dir(load);
return text.load((name + ".sibilant"), require, (function(unit) {
  // unit:required
  var test = core.translateAll(([ macros, amd, unit ]).join("\n"));;
  console.log(test);
  console.dir(priv);
  eval(test);
  console.dir((priv.cache)[("sib!" + name)]);
  return load((priv.cache)[("sib!" + name)]);
}), config);} };});
