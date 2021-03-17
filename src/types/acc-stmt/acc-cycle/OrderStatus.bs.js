// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';


function fromString(anyOther) {
  switch (anyOther) {
    case "accepted" :
        return /* Accepted */1;
    case "cancelled" :
        return /* Cancelled */4;
    case "completed" :
        return /* Completed */3;
    case "live" :
        return /* Live */2;
    case "open" :
        return /* Open */0;
    default:
      throw {
            RE_EXN_ID: "Not_found",
            Error: new Error()
          };
  }
}

function toString(status) {
  switch (status) {
    case /* Open */0 :
        return "open";
    case /* Accepted */1 :
        return "accepted";
    case /* Live */2 :
        return "live";
    case /* Completed */3 :
        return "completed";
    case /* Cancelled */4 :
        return "cancelled";
    
  }
}

exports.fromString = fromString;
exports.toString = toString;
/* No side effect */
