chatclient.js:60 [3:06:14 PM] Hostname: localhost
chatclient.js:60 [4:33:35 PM] Connecting to server: ws://localhost:6503
chatclient.js:60 [4:33:35 PM] Message received: 
chatclient.js:127 Object
chatclient.js:60 [4:33:35 PM] Sending 'username' message: {"name":"22222222","date":1566308015928,"id":1566307969331,"type":"username"}
chatclient.js:60 [4:33:35 PM] Message received: 
chatclient.js:127 Object
chatclient.js:60 [4:33:42 PM] Message received: 
chatclient.js:127 Object
chatclient.js:60 [4:33:42 PM] Received video chat offer from 1111111
chatclient.js:60 [4:33:42 PM] Setting up a connection...
chatclient.js:60 [4:33:42 PM]   - Setting remote description
chatclient.js:60 [4:33:42 PM] Message received: 
chatclient.js:127 Object
chatclient.js:60 [4:33:42 PM] *** Adding received ICE candidate: {"candidate":"candidate:3719157174 1 udp 2113937151 10.1.135.69 55346 typ host generation 0 ufrag fiCB network-cost 999","sdpMid":"0","sdpMLineIndex":0}
chatclient.js:60 [4:33:42 PM] Message received: 
chatclient.js:127 Object
chatclient.js:60 [4:33:42 PM] *** Adding received ICE candidate: {"candidate":"candidate:3025037863 1 udp 2113939711 2001:470:9802:ec5:81a:a8db:6388:545d 55347 typ host generation 0 ufrag fiCB network-cost 999","sdpMid":"0","sdpMLineIndex":0}
chatclient.js:60 [4:33:42 PM] Message received: 
chatclient.js:127 Object
chatclient.js:60 [4:33:42 PM] *** Adding received ICE candidate: {"candidate":"candidate:3719157174 1 udp 2113937151 10.1.135.69 55348 typ host generation 0 ufrag fiCB network-cost 999","sdpMid":"1","sdpMLineIndex":1}
chatclient.js:60 [4:33:42 PM] Message received: 
chatclient.js:127 Object
chatclient.js:60 [4:33:42 PM] *** Adding received ICE candidate: {"candidate":"candidate:3025037863 1 udp 2113939711 2001:470:9802:ec5:81a:a8db:6388:545d 55349 typ host generation 0 ufrag fiCB network-cost 999","sdpMid":"1","sdpMLineIndex":1}
2chatclient.js:60 [4:33:42 PM] *** Track event
chatclient.js:60 [4:33:42 PM] *** WebRTC signaling state changed to: have-remote-offer
chatclient.js:60 [4:33:43 PM] ---> Creating and sending answer to caller
chatclient.js:60 [4:33:43 PM] *** Negotiation needed
chatclient.js:60 [4:33:43 PM] ---> Creating offer
chatclient.js:60 [4:33:43 PM] *** WebRTC signaling state changed to: stable
chatclient.js:60 [4:33:43 PM] Sending 'video-answer' message: {"name":"22222222","target":"1111111","type":"video-answer","sdp":{"type":"answer","sdp":"v=0\r\no=- 6304765449508204693 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0 1\r\na=msid-semantic: WMS\r\nm=audio 52841 UDP/TLS/RTP/SAVPF 111 103 104 9 0 8 106 105 13 110 112 113 126\r\nc=IN IP4 10.1.135.69\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=candidate:3719157174 1 udp 2113937151 10.1.135.69 52841 typ host generation 0 network-cost 999\r\na=ice-ufrag:VV6u\r\na=ice-pwd:e/NhjI5CGhwMWad+m2Q67JhA\r\na=ice-options:trickle\r\na=fingerprint:sha-256 45:42:8F:8B:1C:DC:39:B0:A1:1B:01:4A:D2:99:48:B2:19:A1:FA:51:83:08:2A:5B:79:EC:81:03:D0:83:1E:16\r\na=setup:active\r\na=mid:0\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=extmap:2 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:3 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id\r\na=extmap:5 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id\r\na=recvonly\r\na=rtcp-mux\r\na=rtpmap:111 opus/48000/2\r\na=rtcp-fb:111 transport-cc\r\na=fmtp:111 minptime=10;useinbandfec=1\r\na=rtpmap:103 ISAC/16000\r\na=rtpmap:104 ISAC/32000\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:106 CN/32000\r\na=rtpmap:105 CN/16000\r\na=rtpmap:13 CN/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:112 telephone-event/32000\r\na=rtpmap:113 telephone-event/16000\r\na=rtpmap:126 telephone-event/8000\r\nm=video 9 UDP/TLS/RTP/SAVPF 96 97 98 99 100 101 102 122 127 121 125 107 108 109 124 120 123 119 114 115 116\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:VV6u\r\na=ice-pwd:e/NhjI5CGhwMWad+m2Q67JhA\r\na=ice-options:trickle\r\na=fingerprint:sha-256 45:42:8F:8B:1C:DC:39:B0:A1:1B:01:4A:D2:99:48:B2:19:A1:FA:51:83:08:2A:5B:79:EC:81:03:D0:83:1E:16\r\na=setup:active\r\na=mid:1\r\na=extmap:14 urn:ietf:params:rtp-hdrext:toffset\r\na=extmap:13 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:12 urn:3gpp:video-orientation\r\na=extmap:2 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:11 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay\r\na=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/video-content-type\r\na=extmap:7 http://www.webrtc.org/experiments/rtp-hdrext/video-timing\r\na=extmap:8 http://tools.ietf.org/html/draft-ietf-avtext-framemarking-07\r\na=extmap:9 http://www.webrtc.org/experiments/rtp-hdrext/color-space\r\na=extmap:3 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id\r\na=extmap:5 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id\r\na=recvonly\r\na=rtcp-mux\r\na=rtcp-rsize\r\na=rtpmap:96 VP8/90000\r\na=rtcp-fb:96 goog-remb\r\na=rtcp-fb:96 transport-cc\r\na=rtcp-fb:96 ccm fir\r\na=rtcp-fb:96 nack\r\na=rtcp-fb:96 nack pli\r\na=rtpmap:97 rtx/90000\r\na=fmtp:97 apt=96\r\na=rtpmap:98 VP9/90000\r\na=rtcp-fb:98 goog-remb\r\na=rtcp-fb:98 transport-cc\r\na=rtcp-fb:98 ccm fir\r\na=rtcp-fb:98 nack\r\na=rtcp-fb:98 nack pli\r\na=fmtp:98 profile-id=0\r\na=rtpmap:99 rtx/90000\r\na=fmtp:99 apt=98\r\na=rtpmap:100 VP9/90000\r\na=rtcp-fb:100 goog-remb\r\na=rtcp-fb:100 transport-cc\r\na=rtcp-fb:100 ccm fir\r\na=rtcp-fb:100 nack\r\na=rtcp-fb:100 nack pli\r\na=fmtp:100 profile-id=2\r\na=rtpmap:101 rtx/90000\r\na=fmtp:101 apt=100\r\na=rtpmap:102 H264/90000\r\na=rtcp-fb:102 goog-remb\r\na=rtcp-fb:102 transport-cc\r\na=rtcp-fb:102 ccm fir\r\na=rtcp-fb:102 nack\r\na=rtcp-fb:102 nack pli\r\na=fmtp:102 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42001f\r\na=rtpmap:122 rtx/90000\r\na=fmtp:122 apt=102\r\na=rtpmap:127 H264/90000\r\na=rtcp-fb:127 goog-remb\r\na=rtcp-fb:127 transport-cc\r\na=rtcp-fb:127 ccm fir\r\na=rtcp-fb:127 nack\r\na=rtcp-fb:127 nack pli\r\na=fmtp:127 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=42001f\r\na=rtpmap:121 rtx/90000\r\na=fmtp:121 apt=127\r\na=rtpmap:125 H264/90000\r\na=rtcp-fb:125 goog-remb\r\na=rtcp-fb:125 transport-cc\r\na=rtcp-fb:125 ccm fir\r\na=rtcp-fb:125 nack\r\na=rtcp-fb:125 nack pli\r\na=fmtp:125 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f\r\na=rtpmap:107 rtx/90000\r\na=fmtp:107 apt=125\r\na=rtpmap:108 H264/90000\r\na=rtcp-fb:108 goog-remb\r\na=rtcp-fb:108 transport-cc\r\na=rtcp-fb:108 ccm fir\r\na=rtcp-fb:108 nack\r\na=rtcp-fb:108 nack pli\r\na=fmtp:108 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=42e01f\r\na=rtpmap:109 rtx/90000\r\na=fmtp:109 apt=108\r\na=rtpmap:124 H264/90000\r\na=rtcp-fb:124 goog-remb\r\na=rtcp-fb:124 transport-cc\r\na=rtcp-fb:124 ccm fir\r\na=rtcp-fb:124 nack\r\na=rtcp-fb:124 nack pli\r\na=fmtp:124 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=4d0032\r\na=rtpmap:120 rtx/90000\r\na=fmtp:120 apt=124\r\na=rtpmap:123 H264/90000\r\na=rtcp-fb:123 goog-remb\r\na=rtcp-fb:123 transport-cc\r\na=rtcp-fb:123 ccm fir\r\na=rtcp-fb:123 nack\r\na=rtcp-fb:123 nack pli\r\na=fmtp:123 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=640032\r\na=rtpmap:119 rtx/90000\r\na=fmtp:119 apt=123\r\na=rtpmap:114 red/90000\r\na=rtpmap:115 rtx/90000\r\na=fmtp:115 apt=114\r\na=rtpmap:116 ulpfec/90000\r\n"}}
chatclient.js:60 [4:33:43 PM] ---> Setting local description to the offer
chatclient.js:60 [4:33:43 PM] *** ICE gathering state changed to: gathering
chatclient.js:60 [4:33:43 PM] *** Outgoing ICE candidate: candidate:3719157174 1 udp 2113937151 10.1.135.69 52841 typ host generation 0 ufrag VV6u network-cost 999
chatclient.js:60 [4:33:43 PM] Sending 'new-ice-candidate' message: {"type":"new-ice-candidate","target":"1111111","candidate":{"candidate":"candidate:3719157174 1 udp 2113937151 10.1.135.69 52841 typ host generation 0 ufrag VV6u network-cost 999","sdpMid":"0","sdpMLineIndex":0}}
chatclient.js:60 [4:33:43 PM] *** ICE gathering state changed to: complete
chatclient.js:60 [4:33:43 PM] *** WebRTC signaling state changed to: have-local-offer
chatclient.js:60 [4:33:43 PM] ---> Sending the offer to the remote peer
chatclient.js:60 [4:33:43 PM] Sending 'video-offer' message: {"name":"22222222","target":"1111111","type":"video-offer","sdp":{"type":"offer","sdp":"v=0\r\no=- 6304765449508204693 3 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0 1 2 3\r\na=msid-semantic: WMS\r\nm=audio 9 UDP/TLS/RTP/SAVPF 111 103 104 9 0 8 106 105 13 110 112 113 126\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:VV6u\r\na=ice-pwd:e/NhjI5CGhwMWad+m2Q67JhA\r\na=ice-options:trickle\r\na=fingerprint:sha-256 45:42:8F:8B:1C:DC:39:B0:A1:1B:01:4A:D2:99:48:B2:19:A1:FA:51:83:08:2A:5B:79:EC:81:03:D0:83:1E:16\r\na=setup:actpass\r\na=mid:0\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=extmap:2 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:3 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id\r\na=extmap:5 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id\r\na=recvonly\r\na=rtcp-mux\r\na=rtpmap:111 opus/48000/2\r\na=rtcp-fb:111 transport-cc\r\na=fmtp:111 minptime=10;useinbandfec=1\r\na=rtpmap:103 ISAC/16000\r\na=rtpmap:104 ISAC/32000\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:106 CN/32000\r\na=rtpmap:105 CN/16000\r\na=rtpmap:13 CN/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:112 telephone-event/32000\r\na=rtpmap:113 telephone-event/16000\r\na=rtpmap:126 telephone-event/8000\r\nm=video 9 UDP/TLS/RTP/SAVPF 96 97 98 99 100 101 102 122 127 121 125 107 108 109 124 120 123 119 114 115 116\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:VV6u\r\na=ice-pwd:e/NhjI5CGhwMWad+m2Q67JhA\r\na=ice-options:trickle\r\na=fingerprint:sha-256 45:42:8F:8B:1C:DC:39:B0:A1:1B:01:4A:D2:99:48:B2:19:A1:FA:51:83:08:2A:5B:79:EC:81:03:D0:83:1E:16\r\na=setup:actpass\r\na=mid:1\r\na=extmap:14 urn:ietf:params:rtp-hdrext:toffset\r\na=extmap:13 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:12 urn:3gpp:video-orientation\r\na=extmap:2 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:11 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay\r\na=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/video-content-type\r\na=extmap:7 http://www.webrtc.org/experiments/rtp-hdrext/video-timing\r\na=extmap:8 http://tools.ietf.org/html/draft-ietf-avtext-framemarking-07\r\na=extmap:9 http://www.webrtc.org/experiments/rtp-hdrext/color-space\r\na=extmap:3 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id\r\na=extmap:5 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id\r\na=recvonly\r\na=rtcp-mux\r\na=rtcp-rsize\r\na=rtpmap:96 VP8/90000\r\na=rtcp-fb:96 goog-remb\r\na=rtcp-fb:96 transport-cc\r\na=rtcp-fb:96 ccm fir\r\na=rtcp-fb:96 nack\r\na=rtcp-fb:96 nack pli\r\na=rtpmap:97 rtx/90000\r\na=fmtp:97 apt=96\r\na=rtpmap:98 VP9/90000\r\na=rtcp-fb:98 goog-remb\r\na=rtcp-fb:98 transport-cc\r\na=rtcp-fb:98 ccm fir\r\na=rtcp-fb:98 nack\r\na=rtcp-fb:98 nack pli\r\na=fmtp:98 profile-id=0\r\na=rtpmap:99 rtx/90000\r\na=fmtp:99 apt=98\r\na=rtpmap:100 VP9/90000\r\na=rtcp-fb:100 goog-remb\r\na=rtcp-fb:100 transport-cc\r\na=rtcp-fb:100 ccm fir\r\na=rtcp-fb:100 nack\r\na=rtcp-fb:100 nack pli\r\na=fmtp:100 profile-id=2\r\na=rtpmap:101 rtx/90000\r\na=fmtp:101 apt=100\r\na=rtpmap:102 H264/90000\r\na=rtcp-fb:102 goog-remb\r\na=rtcp-fb:102 transport-cc\r\na=rtcp-fb:102 ccm fir\r\na=rtcp-fb:102 nack\r\na=rtcp-fb:102 nack pli\r\na=fmtp:102 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42001f\r\na=rtpmap:122 rtx/90000\r\na=fmtp:122 apt=102\r\na=rtpmap:127 H264/90000\r\na=rtcp-fb:127 goog-remb\r\na=rtcp-fb:127 transport-cc\r\na=rtcp-fb:127 ccm fir\r\na=rtcp-fb:127 nack\r\na=rtcp-fb:127 nack pli\r\na=fmtp:127 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=42001f\r\na=rtpmap:121 rtx/90000\r\na=fmtp:121 apt=127\r\na=rtpmap:125 H264/90000\r\na=rtcp-fb:125 goog-remb\r\na=rtcp-fb:125 transport-cc\r\na=rtcp-fb:125 ccm fir\r\na=rtcp-fb:125 nack\r\na=rtcp-fb:125 nack pli\r\na=fmtp:125 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f\r\na=rtpmap:107 rtx/90000\r\na=fmtp:107 apt=125\r\na=rtpmap:108 H264/90000\r\na=rtcp-fb:108 goog-remb\r\na=rtcp-fb:108 transport-cc\r\na=rtcp-fb:108 ccm fir\r\na=rtcp-fb:108 nack\r\na=rtcp-fb:108 nack pli\r\na=fmtp:108 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=42e01f\r\na=rtpmap:109 rtx/90000\r\na=fmtp:109 apt=108\r\na=rtpmap:124 H264/90000\r\na=rtcp-fb:124 goog-remb\r\na=rtcp-fb:124 transport-cc\r\na=rtcp-fb:124 ccm fir\r\na=rtcp-fb:124 nack\r\na=rtcp-fb:124 nack pli\r\na=fmtp:124 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=4d0032\r\na=rtpmap:120 rtx/90000\r\na=fmtp:120 apt=124\r\na=rtpmap:123 H264/90000\r\na=rtcp-fb:123 goog-remb\r\na=rtcp-fb:123 transport-cc\r\na=rtcp-fb:123 ccm fir\r\na=rtcp-fb:123 nack\r\na=rtcp-fb:123 nack pli\r\na=fmtp:123 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=640032\r\na=rtpmap:11
chatclient.js:60 [4:33:43 PM] *** ICE gathering state changed to: gathering
chatclient.js:60 [4:33:43 PM] *** Outgoing ICE candidate: candidate:3719157174 1 udp 2113937151 10.1.135.69 52843 typ host generation 0 ufrag VV6u network-cost 999
chatclient.js:60 [4:33:43 PM] Sending 'new-ice-candidate' message: {"type":"new-ice-candidate","target":"1111111","candidate":{"candidate":"candidate:3719157174 1 udp 2113937151 10.1.135.69 52843 typ host generation 0 ufrag VV6u network-cost 999","sdpMid":"2","sdpMLineIndex":2}}
chatclient.js:60 [4:33:43 PM] *** Outgoing ICE candidate: candidate:3025037863 1 udp 2113939711 2001:470:9802:ec5:81a:a8db:6388:545d 52844 typ host generation 0 ufrag VV6u network-cost 999
chatclient.js:60 [4:33:43 PM] Sending 'new-ice-candidate' message: {"type":"new-ice-candidate","target":"1111111","candidate":{"candidate":"candidate:3025037863 1 udp 2113939711 2001:470:9802:ec5:81a:a8db:6388:545d 52844 typ host generation 0 ufrag VV6u network-cost 999","sdpMid":"2","sdpMLineIndex":2}}
chatclient.js:60 [4:33:43 PM] *** Outgoing ICE candidate: candidate:3719157174 1 udp 2113937151 10.1.135.69 52845 typ host generation 0 ufrag VV6u network-cost 999
chatclient.js:60 [4:33:43 PM] Sending 'new-ice-candidate' message: {"type":"new-ice-candidate","target":"1111111","candidate":{"candidate":"candidate:3719157174 1 udp 2113937151 10.1.135.69 52845 typ host generation 0 ufrag VV6u network-cost 999","sdpMid":"3","sdpMLineIndex":3}}
chatclient.js:60 [4:33:43 PM] *** Outgoing ICE candidate: candidate:3025037863 1 udp 2113939711 2001:470:9802:ec5:81a:a8db:6388:545d 52846 typ host generation 0 ufrag VV6u network-cost 999
chatclient.js:60 [4:33:43 PM] Sending 'new-ice-candidate' message: {"type":"new-ice-candidate","target":"1111111","candidate":{"candidate":"candidate:3025037863 1 udp 2113939711 2001:470:9802:ec5:81a:a8db:6388:545d 52846 typ host generation 0 ufrag VV6u network-cost 999","sdpMid":"3","sdpMLineIndex":3}}
chatclient.js:60 [4:33:44 PM] Message received: 
chatclient.js:127 Object
chatclient.js:60 [4:33:44 PM] *** Call recipient has accepted our call
chatclient.js:60 [4:33:44 PM] *** WebRTC signaling state changed to: stable
chatclient.js:60 [4:33:44 PM] *** ICE gathering state changed to: complete