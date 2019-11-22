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
import txt from './txt-file.png'
import wav from './wav-file.png'


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
            <div className="App">
                <div className="row">
                    <div className="col-12">
                        <div style={h1}>Audio noise detection web platform</div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <h1>Select for Detection</h1>
                        <div className="card">
                            <div style={{display:"block",marginLeft:"auto",marginRight:"auto"}}>
                                <img src={wav} style={{ width: "120px", margin: "30px 30px 10px 50px" , marginLeft : "200px"}} />
                                <br />
                                <NavLink exact to="/Music"><button type="button" className="btn btn-dark" style={{width: "200px",margin: "30px 30px" }} >ตรวจจับเสียงรบกวน</button></NavLink>
                                <NavLink exact to="/testnoise"><button type="button" className="btn btn-dark" style={{ width: "200px",margin: "30px 30px" }} >Noise testing<br></br></button></NavLink>

                            </div>
                        </div>
                        <div className="card">
                        <div><h3 style={{ color:"black", marginLeft: "25px", marginTop: "15px"}}>-ฟังก์ชัน ตรวจจับเสียงรบกวน</h3></div>
                        <div><h9 style={{ color:"red", marginLeft: "60px", marginTop: "15px"}}>ฟังก์ชันการตรวจจับเสียงรบกวนจากไฟล์เสียงชนิด .wav</h9></div>

                        </div>
                        <div className="card">
                        <div><h3 style={{ color:"black", marginLeft: "25px", marginTop: "15px"}}>-ฟังก์ชัน Noise testing  </h3></div>
                        <div><h9 style={{ color:"red", marginLeft: "60px", marginTop: "15px"}}>ฟังก์ชันการตรวจสอบช่วงเวลาที่เกิดเสียงรบกวนจากเสียงรบกวนตัวอย่างที่ผู้ใช้อัพโหลด</h9></div>

                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>

            // <div className="App"    >



            //     <div className="card" style={{
            //         width: "70%",
            //         display: "block",
            //         marginRight: "auto",
            //         marginLeft: "auto",
            //         background: "rgba(183, 175, 255, 0.692)",
            //         borderRadius: "40px 40px 0px 0px"
            //     }}>
            //         <div style={{textAlign:"center"}} className="card-header">
            //             <h1>Select for Processing</h1>
            //         </div>


            //     </div>

            //     <div className="card" style={{
            //         width: "70%",
            //         height: "30%",
            //         display: "block",
            //         marginRight: "auto",
            //         marginLeft: "auto",
            //         background: "rgba(183, 175, 255, 0.692)",
            //         borderRadius: "0px 0px 40px 40px"
            //     }}>

            //         <div className="card-body" textAlign="center">

            //         </div>



            //     </div>



            // {/* <div className="Box">

            //     <div>
            //         <input
            //             type='file'
            //             onChange={this.myChangeHandler}
            //         />
            //     </div>
            //     {this.state.url}


            //     {this.state.music_play}
            //     <div>
            //         <button onClick={() => this.playMusic()}>play</button>
            //         <button onClick={() => this.stopMusic()}>stop</button>
            //         <button onClick={() => this.removeEffect()}>removeEffect</button>
            //     </div> */}


            // {/* <div style={{ width: "100%", display: "flex" }}>

            //         <div style={{ width: "20%" }}>
            //             <input type="radio" name="funtion" />Low pass filter
            //             <br />
            //             <input type="range" min="0" max="100" onChange={this.lowhpass}></input>
            //         </div>

            //         <div style={{ width: "20%" }}>
            //             <input type="radio" name="funtion" />High pass filter
            //             <br />

            //             <input type="range" min="0" max="100" onChange={this.higthpass}></input>
            //         </div>



            //     </div>
            //     <div className="nav"><NavLink exact to="/Show"><button>Save</button></NavLink>
            //     </div> */}


            // {/* </div> */}

            // </div>



        );
    }

}


export default App;