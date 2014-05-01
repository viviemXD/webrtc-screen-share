webrtc-screen-share                                                                                                                                                                                                                  
===================

Test page for Chrome screen share feature, using WebRTC\JSEP and node.js web socket for transport.

- Uses node.js and socket.io
- Only works using Google Chrome  (chromeMediaSource)
- No need for a Web Server


Prerequesites

-  Node.js  and  socket.io


Server Steps 

- clone this repo to your machine, does not need to be to a web server
- Edit index.html (insert your web server addres in two places)

- Generate keys unless you have real ones
  - place these keys in same folder as app.js
  -  openssl genrsa -out webrtcwwsocket-key.pem 1024
  -  openssl req -new -key webrtcwwsocket-key.pem -out webrtcwwsocket-csr.pem
  -  openssl x509 -req -in webrtcwwsocket-csr.pem -signkey webrtcwwsocket-key.pem -out webrtcwwsocket-cert.pem
- run   'sudo node app.js'
- You may get errors, if you do then reinstall socket.io in that folder, e.g. 'sudo npm install socket.io'


Client Steps

- Start Chrome with this option --enable-usermedia-screen-capturing   
-   or enable using  chrome://flags   'Enable screen capture support in getUserMedia()'
- Point two browsers to  e.g. https://\<your ip address\>
- Start media and connect

