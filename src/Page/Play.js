// Music.js 

import React, { Component } from 'react'
// import { Button, Input, Icon,Dropdown,Card} from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
// import $ from 'jquery'
// import styles from './Home.scss'
// import Modal from './Modal.jsx'
// import MakeChannelModal from './MakeChannelModal.jsx'
// import '../App.css'
import PlayMusic from '../Music/The Untamed.mp3'
import styled from 'styled-components';
import slider from '../components/Slider'
import Slider from '../components/Slider';
import { read } from 'fs';
import { get, post, ip } from './new'
import PizzicatoRecorder from 'pizzicato-recorder'
import Pizzicato from 'pizzicato'
import { withRouter, NavLink, Link } from 'react-router-dom'
import Show from './Show';
import { Spinner } from 'reactstrap';
import peaks from 'peaks.js'

PizzicatoRecorder(Pizzicato)
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sound: '',
            highPassFilter: '',
            lowPassFilter: '',
            audioSrc: '',
            load: '',
            Sound:'',
            gg: true,
            playing: false,
            pos: 0
        }
    }
    myChangeHandler = (e) => {
        this.setState({ gg: false })
        console.log("uploading");
        // var sound = new Pizzicato.Sound({
        //     source: 'file',
        //     options: {
        //         path: 'audio/music.wav'
        //     }
        // }, function () {
        //     console.log('sound file loading');
        // });

        let reader = new FileReader();
        let file = e.target.files[0];

        if (!file) {
        } else {
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                console.log("img", reader.result)
                var sound = new Pizzicato.Sound({
                    source: 'file',
                    options: {
                        path: reader.result
                    }
                }, function () {
                    console.log('sound file loaded!');
                });
                this.setState({
                    sound: sound,
                    Sound:reader.result,
                    gg: true
                });


            }
            // console.log(sound)
        }
        function main(Peaks) {
                var myAudioContext = new AudioContext();

                var p = Peaks.init({
                    container: document.querySelector('#peaks-container'),
                    mediaElement: document.querySelector('audio'),
                    audioContext: myAudioContext,
                    waveformBuilderOptions: {
                        scale: 8
                    },
          zoomLevels: [8, 16, 32, 64, 128, 256, 512, 1024, 2048],
                });

            }

            console.log('555555',document.querySelector('audio'))
            main(peaks);

    }






    render() {

        var h1 = {
            color: "white",
            fontSize: 40,
            textAlign: "center",
            marginBottom: "50px",
            marginTop: "50px",
            textTransform: "uppercase",
        }

        return (

            <div className="App"    >
                <div style={h1}>Audio noise detection web platform</div>


                <div className="card" style={{
                    width: "70%",
                    display: "block",
                    marginRight: "auto",
                    marginLeft: "auto",
                    background: "white",
                    borderRadius: "40px 40px 0px 0px"
                }}>
                    <div className="card-header"  style={{background: "white" , borderRadius: "40px 40px 0px 0px"}}>
                        Select for Processing
                        
                    </div>


                </div>

                <div className="card" style={{
                    width: "70%",
                    display: "block",
                    marginRight: "auto",
                    marginLeft: "auto",
                    background: "rgba(255,255,255,1)",
                    borderRadius: "0px 0px 40px 40px"
                }}>

                    <div className="card-body">



                        <div style={{ width: "100%", display: "flex" , marginTop: "1%"}}>
                        <div>
                            <input
                                type='file'
                                onChange={this.myChangeHandler}
                            />

                        </div>
                        <div>
                 <audio controls src={this.state.Sound} >

                 </audio>
                 </div>

                        


                            {/* <button type="button" className="btn btn-dark" onclick="playMusic()">Play</button>
                        <button type="button" className="btn btn-dark" onclick="stopMusic()">Stop</button>
                        <button type="button" className="btn btn-dark" onclick="addEffect()">AddEffect</button>
                        <button type="button" className="btn btn-dark" onclick="moreEffect()">MoreEffect</button> */}
                            <div style={{ width: "100%", display: "flex" }}>

                            </div>
                        </div>

                    </div>
                    {/* <div className="nav"><NavLink exact to="/Show"><button type="button" className="btn btn-dark" onClick={() => this.save()}>Save</button></NavLink>
                        
                        </div> */}
                        
                        <NavLink exact to="/"><button type="button" className="btn btn-dark" style={{ width: "100px", margin:"0px 30px 10px 20px" ,marginLeft: "3%"}}>Home</button></NavLink>
                        <NavLink exact to="/"><button type="button" className="btn btn-dark" style={{ width: "100px", margin:"0px 30px 10px 20px" ,marginLeft: "-1%"}}>Back</button></NavLink>
                        <div id="peaks-container"></div>
                </div>



                {/* <div className="Box">

                    <div>
                        <input
                            type='file'
                            onChange={this.myChangeHandler}
                        />
                    </div>
                    {this.state.url}


                    {this.state.music_play}
                    <div>
                        <button onClick={() => this.playMusic()}>play</button>
                        <button onClick={() => this.stopMusic()}>stop</button>
                        <button onClick={() => this.removeEffect()}>removeEffect</button>
                    </div> */}


                {/* <div style={{ width: "100%", display: "flex" }}>

                        <div style={{ width: "20%" }}>
                            <input type="radio" name="funtion" />Low pass filter
                            <br />
                            <input type="range" min="0" max="100" onChange={this.lowhpass}></input>
                        </div>

                        <div style={{ width: "20%" }}>
                            <input type="radio" name="funtion" />High pass filter
                            <br />

                            <input type="range" min="0" max="100" onChange={this.higthpass}></input>
                        </div>



                    </div>
                    <div className="nav"><NavLink exact to="/Show"><button>Save</button></NavLink>
                    </div> */}


                {/* </div> */}

            </div>



        );
    }

}


export default App;