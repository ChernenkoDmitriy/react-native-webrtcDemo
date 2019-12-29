import React, { Component } from 'react';
import { styles } from './styles';
import { View, Text, FlatList, Button } from 'react-native';
import { RTCView, RTCPeerConnection, RTCIceCandidate, RTCSessionDescription, MediaStream, MediaStreamTrack, MediaTrackConstraints } from 'react-native-webrtc';
import { UserListItem } from './userListItem/userListItem';
import { initStream } from './initStream';

const myHostname = '10.1.135.69';

export class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usersList: [],
            receivedVideo: "",
            isFront: true,
            stream: "",
            logger: [],
            offer: false,
            iceCandidates: 'false'
        }
        const date = Date.now();
        this.userName = `${date}`;
        this.connection = null;
        this.clientID = date;
        this.targetUsername = null;
        this.myPeerConnection = null;    // RTCPeerConnection
        this.transceiver = null;         // RTCRtpTransceiver
        this.webcamStream = null;        // MediaStream from webcam
        this.scheme = "ws";
    }

    componentDidMount = async () => {
        try {
            await this.connect();
        } catch (error) {

        }
    }

    sendToServer = (msg) => {
        const msgJSON = JSON.stringify(msg);
        this.connection.send(msgJSON);
    }

    connect = async () => {
        try {
            const serverUrl = this.scheme + "://" + myHostname + ":6503";
            this.connection = new WebSocket(serverUrl, "json");
            this.connection.onmessage = (evt) => {
                const msg = JSON.parse(evt.data);
                switch (msg.type) {
                    case "id":
                        this.clientID = msg.id;
                        this.sendToServer({ name: this.userName, date: Date.now(), id: this.clientID, type: "username" });
                        break;
                    case "userlist":      // Received an updated user list
                        this.setState({ usersList: msg.users });
                        break;
                    case "video-offer":  // Invitation and offer to chat
                        this.handleVideoOfferMsg(msg);
                        break;
                    case "video-answer":  // Callee has answered our offer
                        this.handleVideoAnswerMsg(msg);
                        break;
                    case "new-ice-candidate": // A new ICE candidate has been received
                        this.handleNewICECandidateMsg(msg);
                        break;
                    case "hang-up": // The other peer has hung up the call
                        break;
                    default:
                }
            };
        } catch (error) {

        }
    }

    createPeerConnection = async () => {
        try {
            console.log('createPeerConnection');
            this.myPeerConnection = new RTCPeerConnection({ iceServers: [{ urls: "turn:" + myHostname, username: "webrtc", credential: "turnserver" }] });
            this.myPeerConnection.onicecandidate = this.handleICECandidateEvent;
            this.myPeerConnection.oniceconnectionstatechange = this.handleICEConnectionStateChangeEvent;
            this.myPeerConnection.onicegatheringstatechange = this.handleICEGatheringStateChangeEvent;
            this.myPeerConnection.onsignalingstatechange = this.handleSignalingStateChangeEvent;
            this.myPeerConnection.onnegotiationneeded = this.handleNegotiationNeededEvent;
            this.myPeerConnection.onaddstream = this.handleTrackEvent;
        } catch (error) {

        }
    }

    handleTrackEvent = (event) => {
        console.log('handleTrackEvent', event.stream)
        this.setState({ receivedVideo: event.stream });
    }

    handleICEConnectionStateChangeEvent = (event) => {
        console.log('handleICEConnectionStateChangeEvent', event.currentTarget.signalingState)
    }

    handleICEGatheringStateChangeEvent = (event) => {
        console.log('handleICEGatheringStateChangeEvent', event.currentTarget.iceGatheringState)
    }


    handleSignalingStateChangeEvent = (event) => {
        console.log('handleSignalingStateChangeEvent', event.currentTarget.signalingState);
    }

    closeVideoCall = () => {
        const { stream } = this.state;
        if (this.myPeerConnection) {
            this.myPeerConnection.ontrack = null;
            this.myPeerConnection.onnicecandidate = null;
            this.myPeerConnection.oniceconnectionstatechange = null;
            this.myPeerConnection.onsignalingstatechange = null;
            this.myPeerConnection.onicegatheringstatechange = null;
            this.myPeerConnection.onnotificationneeded = null;

            this.myPeerConnection.close();
            this.myPeerConnection = null;
            this.webcamStream = null;
        }
        this.targetUsername = null;
    }

    handleNewICECandidateMsg = async (msg) => {
        try {
            if (msg && msg.candidate) {
                const candidate = new RTCIceCandidate(msg.candidate);
                await this.myPeerConnection.addIceCandidate(candidate)
            }
        } catch (err) {
            console.log('handleNewICECandidateMsg--->error', err)
        }
    }

    invite = async (name) => {
        try {
            const { isFront } = this.state;
            if (this.myPeerConnection) {
                alert("You can't start a call because you already have one open!");
            } else if (name === this.userName) {
                alert("I'm afraid I can't let you talk to yourself. That would be weird.");
            } else {
                console.log('invite --> ', name);
                this.targetUsername = name;
                await this.createPeerConnection();
                const { stream } = await initStream(isFront);
                this.setState({ stream: stream });
                this.myPeerConnection.addStream(stream); // calls handleNegotiationNeededEvent
                this.setState({ iceCandidates: 'offer' });
            }
        } catch (error) {

        }
    }

    handleNegotiationNeededEvent = async () => {
        try {
            console.log('handleNegotiationNeededEvent');
            const offer = await this.myPeerConnection.createOffer();
            await this.myPeerConnection.setLocalDescription(offer);
            this.sendToServer({ name: this.userName, target: this.targetUsername, type: "video-offer", sdp: this.myPeerConnection.localDescription });
        } catch (err) {
        };
    }

    handleICECandidateEvent = async (event) => {
        try {
            console.log('handleICECandidateEvent', event.candidate);
            if (event.candidate) {
                this.sendToServer({ type: "new-ice-candidate", target: this.targetUsername, candidate: event.candidate });
            }
        } catch (error) {
            console.log('handleICECandidateEvent--->error', error)
        }
    }

    handleVideoOfferMsg = async (msg) => {
        try {
            console.log('handleVideoOfferMsg', msg);
            const { stream, isFront } = this.state;
            this.targetUsername = msg.name;

            if (!this.myPeerConnection) {
                await this.createPeerConnection();
            }

            const desc = new RTCSessionDescription(msg.sdp);
            await this.myPeerConnection.setRemoteDescription(desc);

            let newStream = stream;
            if (!stream) {
                const result = await initStream(isFront);
                newStream = result.stream;
                this.setState({ stream: newStream });
                await this.myPeerConnection.addStream(newStream);
            }

            const answer = await this.myPeerConnection.createAnswer();
            await this.myPeerConnection.setLocalDescription(answer);
            this.setState({ iceCandidates: 'answer' });
            this.sendToServer({ name: this.userName, target: this.targetUsername, type: "video-answer", sdp: this.myPeerConnection.localDescription });
        } catch (error) {

        }
    }

    handleVideoAnswerMsg = async (msg) => {
        try {
            console.log('handleVideoAnswerMsg', msg);
            const desc = new RTCSessionDescription(msg.sdp);
            await this.myPeerConnection.setRemoteDescription(desc).catch();
        } catch (error) { }
    }

    render() {
        const { stream, receivedVideo, usersList } = this.state;
        return (
            <View style={styles.container}>
                <FlatList style={styles.flatList} data={usersList} renderItem={({ item }) => <UserListItem name={item} onPress={this.invite} />} />
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <RTCView style={styles.rtcView} streamURL={stream.id} mirror={true} objectFit={'contain'} />
                    <RTCView style={styles.rtcView} streamURL={receivedVideo.id} mirror={true} objectFit={'contain'} />
                </View>
            </View>
        );
    }
}

export default HomeScreen;