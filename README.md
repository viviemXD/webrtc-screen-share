webrtc-screen-share    
===================


Test page for screen capture feature, using WebRTC/JSEP and node.js web socket for transport. A very quick way for you to see how screen capture using webrtc works. Works for chrome and Firefox nightly.

- Uses node.js and websocket
- Only works using Google Chrome, Chromium and Canary and Firefox nightly
- No need for a Web Server, uses node.js as your server
- Tab capture or application share not supported in this demo


#### screen capture uses getUserMedia API

```javascript

  if(isChrome) {   
    constraints = { 
      video: {
        mandatory: {
          chromeMediaSource: 'screen',
          maxWidth: screen.width,
          maxHeight: screen.height,
          minFrameRate: 1,
          maxFrameRate: 5
        },  
        optional: []
    }}; 
  } else {
    constraints = { 
      video: {
        mozMediaSource: "screen",
        mediaSource: "screen"
      }   
    };  
  }


  function startMedia() {
    navigator.getUserMedia(constraints, onstream, onerror);
  }

```

####  Setup prerequesites

- Install Node.js  and  WebSocket(sudo npm install websocket)


####  Server Steps (Works on Linux and MacOS so far)

- clone this repo to your machine, does not need to be to a web server

- Generate keys unless you have real ones, run these commands in the same folder as app.js
  -  openssl genrsa -out webrtcwwsocket-key.pem 1024
  -  openssl req -new -key webrtcwwsocket-key.pem -out webrtcwwsocket-csr.pem
  -  openssl x509 -req -in webrtcwwsocket-csr.pem -signkey webrtcwwsocket-key.pem -out webrtcwwsocket-cert.pem
  
- run   'sudo node app.js'
- You may get errors, if you do then reinstall WebSocket in that folder, e.g. 'sudo npm install websocket'


####  Client Steps

- (Only for Chrome) start chrome browser with flag   --enable-usermedia-screen-capture 
- (Only for Firefox) open about:config create  media.getusermedia.screensharing.enabled and set to true
- (Only for Firefox) open about:config in media.getusermedia.screensharing.allowed_domains append the IP address of your node server e.g. "102.160.1.2"
- Restart browser
- Point two browsers to  e.g. https://\<your ip address\>
- Start media and share


NOTE: Google intend on using chrome extensions for desktop share for security reasons.  The way of doing share in this demo is for testing purposes only, that is why it is behind a flag.
See this demo of share in an extension: 
https://github.com/emannion/webrtc-application-screen-share


