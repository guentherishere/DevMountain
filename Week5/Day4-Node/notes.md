Node is based around modules.

For example
      greet.js and app.js.
      greet.js has say (){
        console.log("Hello World")
      }

  and

      farewell(){
        console.log("goodbye");
      }

  if you try to run app. js calling "say()" it will not work. To work around this we do

    module.exports.greet = greet; //in the greet.js file
    module.exports.farewell = farewell;

  in app.js

  var greeter = require('./greet.js');
  greeter.greet();
  greeter.farewell();


could also do something like

    module.exports = {
      greet: greet
      farewell: farewell
    }
