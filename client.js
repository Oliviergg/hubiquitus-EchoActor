// Import hClient
var hClient = require('hubiquitus4js').hClient;
var hOptions = {
    transport : 'socketio',
    endpoints : ['http://localhost:8080/']
};

hClient.onMessage = function(hMessage){
    console.log('Received a message', hMessage);
};

hClient.onStatus = function(hStatus){
    console.log('hClient New Status', hStatus);
    if(hStatus.status == hClient.statuses.CONNECTED){
        console.log('You are connected, now you can execute commands. Look at the browser example!');
        setInterval(function(){
          var message_to_send = hClient.buildMessage("urn:localhost:echo", "string", "message", {timeout:10000});
          console.log("to_send",message_to_send);
          hClient.send(message_to_send, function(hMessage){
              // console.log(hMessage)
          })
        },1000);
    
    }
};
hClient.connect('urn:localhost:u1', 'urn:localhost:u1', hOptions);
