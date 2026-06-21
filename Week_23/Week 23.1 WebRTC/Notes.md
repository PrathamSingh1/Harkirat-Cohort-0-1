Why WebRTC -

WebRTC is the core/only protocol that lets you do real time media communication from inside a browser.

You use WebRTC for applications that require sub second latency.

Examples include

1. Zoom/Google meet (Multi party call)
2. Omegle, teaching (1:1 call)
3. 30FPS games (WebRTC can also send data)

WebRTC Architecture/jargon -

P2P - WebRTC is a peer to peer protocol. This means the you directly send your media over to the other person without the need of a central server.

You do need a central server for signalling and sometimes for sending media as well (turn). We'll be discussing this later

Signalling server - Both the browsers need to exchange their address before they can start talking to each other. A signaling server is used for that.

It is usually a websocket server but can be anything (http)

Stun (Session Traversal Utilities for NAT) - It gives you back your publically accessable IPs. It shows you how the world sees you

Check- https://webrtc.github.io/samples/src/content/peerconnection/tickle-ice/

Ice candidates -

ICE (Interactive Connectivity Establishment) candidates are potential networking endpoints that WebRTC uses to establish a connection between peers. Each candidate represents a possible method for two devices (peers) to communicate, usually in the context of real-time applications like video calls, voice calls, or peer-to-peer data sharing.

If two friends are trying to connect to each other in a hostel wifi , then they can connect via their private router ice candidates.

If two people from different countries are trying to connect to each other, then they would connect via their public IPs.

Turn server -

A lot of times, your network doesn’t allow media to come in from browser 2 . This depends on how restrictive your network is

Since the ice candidate is discovered by the stun server, your network might block incoming data from browser 2 and only allow it from the stun server

Offer - The process of the first browser (the one initiating connection) sending their ice candidates to the other side.

Answer - The other side returning their ice candidates is called the answer.

SDP - Session description protocol

A single file that contains all your

1. ice candidates
2. what media you want to send, what protocols you've used to encode the media

This is the file that is sent in the offer and received in the answer

Example -

v=0
o=- 423904492236154649 2 IN IP4 127.0.0.1
s=-
t=0 0
m=audio 49170 RTP/AVP 0
c=IN IP4 192.168.1.101
a=rtpmap:0 PCMU/8000
a=ice-options:trickle
a=candidate:1 1 UDP 2122260223 192.168.1.101 49170 typ host
a=candidate:2 1 UDP 2122194687 10.0.1.1 49171 typ host
a=candidate:3 1 UDP 1685987071 93.184.216.34 49172 typ srflx raddr 10.0.1.1 rport 49171
a=candidate:4 1 UDP 41819902 10.1.1.1 3478 typ relay raddr 93.184.216.34 rport 49172

RTCPeerConnection (pc, peer connection)

https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection

This is a class that the browser provides you with which gives you access to the sdp, lets you create answers / offers , lets you send media.
This class hides all the complexity of webrtc from the developer

Summary -

You need a signaling server, stun server to initiate the webrtc conn b/w the parties. You can kill these once the conn is made.
You need to include a turn server incase any of the users are on a restrictive network so you can get back a turn ice candidate as well.
