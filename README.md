webrtc-screen-share    
===================


Test page for Chrome screen capture feature, using WebRTC\JSEP and node.js web socket for transport.

- Uses node.js and socket.io
- Only works using Google Chrome  (chromeMediaSource)
- No need for a Web Server
- Tab capture not supported in this demo


#### screen capture with getUserMedia API

```javascript

  var screen_constraints = {
      mandatory: {
          chromeMediaSource: 'screen',
          maxWidth: screen.width,
          maxHeight: screen.height,
          minFrameRate: 1,
          maxFrameRate: 5
      },
      optional: []
  };
  var constraints = {
      audio: false,
      video: screen_constraints
  };


  function startMedia() {
    navigator.getUserMedia(constraints, onstream, onerror);
  }

```



####  Prerequesites

- Install Node.js  and  socket.io (npm install socket.io)


####  Server Steps (Works on Linux and MacOS so far)

- clone this repo to your machine, does not need to be to a web server
- Edit index.html (insert your web server addres in two places)

- Generate keys unless you have real ones, run these commands in the same folder as app.js
  -  openssl genrsa -out webrtcwwsocket-key.pem 1024
  -  openssl req -new -key webrtcwwsocket-key.pem -out webrtcwwsocket-csr.pem
  -  openssl x509 -req -in webrtcwwsocket-csr.pem -signkey webrtcwwsocket-key.pem -out webrtcwwsocket-cert.pem
  
- run   'sudo node app.js'
- You may get errors, if you do then reinstall socket.io in that folder, e.g. 'sudo npm install socket.io'


####  Client Steps

- Open `chrome://flags` in a recent chrome
- Enable flag `Enable screen capture support in getUserMedia()` 
- Restart browser
- Point two browsers to  e.g. https://\<your ip address\>
- Start media and share




