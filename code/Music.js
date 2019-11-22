Music.js



import React, { Component } from 'react'
// import { Button, Input, Icon,Dropdown,Card} from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
// import $ from 'jquery'
// import styles from './Home.scss'
// import Modal from './Modal.jsx'
// import MakeChannelModal from './MakeChannelModal.jsx'
import '../App.css'
import PlayMusic from '../Music/The Untamed.mp3'

class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            play: false,
            pause: true,
            music_play: null

        };

        this.url = 'C:/Users/Admin/projectsound/src/Music/The Untamed.mp3';
        this.audio = new Audio(this.url);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);

    }

    play() {
        this.setState({
            play: true,
            pause: false
        });
        console.log(this.audio);
        this.audio.play();
    }

    pause() {
        this.setState({ play: false, pause: true });
        this.audio.pause();
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {

        return (
            <div className="App">
                <div>
                    <input
                        value={this.state.music_play}
                        type="file"
                        id="music"
                        name="music"
                        onChange={this.handleInputChange} />
                </div>
                <div>
                    <button onClick={this.play}>Play</button>
                    <button onClick={this.pause}>Pause</button>
                </div>

            </div>
        );
    }
}


export default Music