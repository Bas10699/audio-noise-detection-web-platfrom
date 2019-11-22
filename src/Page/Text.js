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

PizzicatoRecorder(Pizzicato)
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sound: '',
            highPassFilter: '',
            lowPassFilter: '',
            load: '',
            gg: false
        }
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
                <div style={h1}>Machine learning Web platform : Phase 1 Data manipulation  </div>


                <div className="card" style={{
                    width: "70%",
                    display: "block",
                    marginRight: "auto",
                    marginLeft: "auto",
                    background: "rgba(183, 175, 255, 0.692)",
                    borderRadius: "40px 40px 0px 0px"
                }}>
                    <div className="card-header">
                        Select for Processing
                    </div>
                    <div>
                            <input
                                type='file'
                                onChange={this.myChangeHandler}
                            />

                        </div>


                </div>

                <div className="card" style={{
                    width: "70%",
                    display: "block",
                    marginRight: "auto",
                    marginLeft: "auto",
                    background: "rgba(183, 175, 255, 0.692)",
                    borderRadius: "0px 0px 40px 40px"
                }}>

                    <div className="card-body">

                   

                        <div style={{ width: "100%", display: "flex" }}>



                        
                        {/* <button type="button" className="btn btn-dark" onclick="playMusic()">Play</button>
                        <button type="button" className="btn btn-dark" onclick="stopMusic()">Stop</button>
                        <button type="button" className="btn btn-dark" onclick="addEffect()">AddEffect</button>
                        <button type="button" className="btn btn-dark" onclick="moreEffect()">MoreEffect</button> */}
                        <div style={{ width: "100%", display: "flex" }}>

                            <div style={{ width: "30%" }}>
                                <input type="checkbox" name="funtion" />Normalization
<br />
                                
                            </div>

                            <div style={{ width: "30%" }}>
                                <input type="checkbox" name="funtion" />Remove in complete record
<br />

                                
                            </div>



                        </div>
                    </div>

                    </div>
                        <div className="nav"><NavLink exact to="/Show"><button type="button" className="btn btn-dark" style={{ width: "100px", margin:"0px 30px 10px 20px" }} onClick={() => this.save()}>Save</button></NavLink>
                        <NavLink exact to="/"><button type="button" className="btn btn-dark" style={{ width: "100px", margin:"0px 30px 10px 20px" }}>Home</button></NavLink>
                        </div>

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