import { tsExpressionWithTypeArguments } from "@babel/types";

/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const hey = (message) => {
  if(message === "" || message.trim() === "") {
    return "Fine. Be that way!"
    }
  else if(message.indexOf("?") != -1 && message === message.toUpperCase() && !message.match(/[1-9]/i)) {
    if(message.match(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>]/)) {
      return 'Sure.'
    }
    else {
      return "Calm down, I know what I\'m doing!"
    }
  }
  else if(message.trim().substr(-1) === "?") {
    return "Sure.";
  }

  else if(message.indexOf('1') != -1 && !message.match(/[a-z]/i)) {
    return "Whatever.";
  }
  else if(message === message.toUpperCase()) {
    return "Whoa, chill out!"
  }
  else {
    return "Whatever.";
  }
};
