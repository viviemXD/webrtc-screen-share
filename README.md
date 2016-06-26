webrtc-screen-share    
===================

Test page for screen share feature, using WebRTC and node.js web socket transport. A very quick way for you to see how screen capture and share works using webrtc. This demo supports both Chrome and Firefox.

- Uses node.js and websocket.
- Only works using Google Chrome, Firefox. 
- Chrome can do screen share only in this demo. (must start Chrome on command line using --enable-usermedia-screen-capturing)
- Firefox can do both screen share and window share.
- No need for a Web Server, uses node.js as your server.
- Tab capture or application share not supported in this demo.
- Supports Secure HTTP and secure websocket wss.


#### screen capture uses getUserMedia API

```javascript

  if (isChrome) {   
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
        mediaSource: "screen"
      }   
    };  
  }

  function startMedia() {
    navigator.mediaDevices.getUserMedia(constraints, onstream, onerror);
  }

```

####  Setup prerequesites

- Install Node.js  and  WebSocket(sudo npm install websocket)


####  Server Steps (Works on Linux and MacOS so far)

- Clone this repo to your machine, does which not need to be to a web server.
- Generate keys unless you have real ones, run these commands in the same folder as app.js.
  -  openssl genrsa -out webrtcwwsocket-key.pem 1024
  -  openssl req -new -key webrtcwwsocket-key.pem -out webrtcwwsocket-csr.pem
  -  openssl x509 -req -in webrtcwwsocket-csr.pem -signkey webrtcwwsocket-key.pem -out webrtcwwsocket-cert.pem
- Run  'sudo node app.js'
- You may get errors, if you do then reinstall WebSocket in that folder, e.g. 'sudo npm install websocket'


####  Client Steps

- (Only for Chrome) start chrome browser with flag --enable-usermedia-screen-capturing
- (Only for Firefox) open about:config create  media.getusermedia.screensharing.enabled and set to true
- (Only for Firefox) open about:config in media.getusermedia.screensharing.allowed_domains append the IP address of your node server e.g. "192.168.1.2"
- Point two browsers to, e.g. https://\<your ip address\>
  - Or point two tabs on same browser to, e.g. https://\<your ip address\>
  - To start two instances of Firefox on the same machine run: firefox --profilemanager
- Accept any local unsecure certificate dialogues that appear on either browser.
- Start media and share.


NOTE: Google intend on using Chrome extensions for desktop share for security reasons.  The way of doing share using Chrome in this demo is for testing purposes only, that is why it is behind a flag.
See this demo of share in an extension: 
https://github.com/emannion/webrtc-application-screen-share

NOTE: Firefox also recommends using an extension for screenshare, the advantage being not requiring the two config items mentioned in the client steps above.
