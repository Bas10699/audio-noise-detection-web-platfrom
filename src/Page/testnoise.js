// Music.js 

import React, { Component } from 'react'
// import { Button, Input, Icon,Dropdown,Card} from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
// import $ from 'jquery'
// import styles from './Home.scss'
// import Modal from './Modal.jsx'
// import MakeChannelModal from './MakeChannelModal.jsx'
// import '../App.css 2.css'
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
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import ReactDOM from 'react-dom';
import InputRanges from 'react-input-range';
import peaks from 'peaks.js'
import WaveformData from 'waveform-data';


PizzicatoRecorder(Pizzicato)

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sound: '',
            highPassFilter: '',
            lowPassFilter: '',
            load: '',
            gg: true,
            value: 0,
            valuel: 0,
            valuep: 0,
            per: 0 ,
            data:[],
            d:[]
        }
    }





    myChangeHandler = (e) => {
        this.state.per = 30
        var sound = new Pizzicato.Sound({
            source: 'file',
            options: {
                path: 'audio/music.wav'
            }
        }, function () {
            console.log('sound file loaded!');
        });
        this.setState({
            parth:e.target.files[0]['name']
        })
        let reader = new FileReader();
        let file = e.target.files[0];
        if (!file) {
        } else {
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                console.log("img", reader.result)
                sound = new Pizzicato.Sound({
                    source: 'file',
                    options: {
                        path: reader.result
                    }
                }, function () {
                    console.log('sound file loaded!');
                });
                this.setState({
                    sound: sound,
                    Sound: reader.result,
                    gg: true

                });
            }
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
      zoomLevels: [0],
            });

        }

        console.log('555555',document.querySelector('audio'))
        main(peaks);

}

  
  
    noise = () => {
        console.log("Original",this.state.parth);
        this.setState({
            paa:this.state.parth
        })
        console.log("asdokpadskodsakpoadskpoadskpoadsadskpo",this.state.paa);
        fetch('http://127.0.0.1:5000/noise', {  
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
                
                'res': this.state.Sound,
                })
        }).then(res => {
            return res.json();
            alert("Function test is Ready!!")
            
        })  
      
        .catch(err => {
            console.log(err);
        });
    }



    tnoise = () => {
        fetch('http://127.0.0.1:5000/tnoise', {  
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
                
                'res': this.state.Sound,
                })
        }).then(res => {
            return res.json();
        })  
        .then(data => {
            alert("Noise sended")
            console.log(data);
            this.setState({
                data:data.time
            })
           
            this.setState({
                data:data['time']
            })
        })  
        .catch(err => {
            console.log(err);
            
            
        });
    }

    detect = () => {
        console.log("asdasdasdasd");
            this.setState({
                d:this.state.data          
             })
             console.log("asdasdasdasd",this.state.d);
             console.log("asdasdasdasd",this.state.d);
             
      
    }

    
    clear = () => {
       
            
        this.setState({
            d:[]
        })
     
        this.setState({
            d:[]
        })

}
refect = () => {
    window.location.reload(); 
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
                <NavLink exact to={"/"} type="button" className="btn btn-dark"style={{ width: "8%", marginLeft: "15px", marginTop: "50px" }}>
                    <buttonb>Home</buttonb>
                </NavLink>
                
                <button type="button" className="btn btn-dark"style={{ width: "8%", marginLeft: "px", marginTop: "50px" }} onClick={this.refect}> <span>Refresh</span> </button>
                
                    <div className="col-12">
                         <div style={h1}>Audio noise detection web platform : Noise testing</div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-1"></div>

                    <div className="col-7">
                        <div className="card">
                            <ProgressBar
                       
                            />
                            <input type='file' onChange={this.myChangeHandler} />
                            
                            <button type="button" className="btn btn-dark" style={{ width: "100px",display:"block",marginRight:"auto",marginLeft:"85%"}} onClick={() => this.clear()}>Clear</button>
                            <div className="row">
                                <div className="col-6"><audio style={{ marginTop: "2%" }} controls src={this.state.Sound} /></div>
                            </div>

                            
                            <div style={{
                                position: "relative",
                                boxShadow: "0px 0px 1px rgba(0, 0, 0, .5)",
                                padding: "10px",
                                background: "white"
                            }}>

                                
                                        <div style={{ boxShadow: "0px 0px 1px rgba(0, 0, 0, 5)" }}>
                                            <button type="button" className="btn btn-dark" style={{ width: "100px", marginLeft: "25px", marginTop: "10px" }} onClick={() => this.noise()}>testnoise</button>
                                            <div style={{ boxShadow: "0px 0px 1px rgba(0, 0, 0, 5)" , width: "130px", marginLeft: "25px", marginTop: "10px"}} ><h9>{ this.state.paa}</h9></div>
                                            <div><h9 style={{ color: "red", marginLeft: "25px", marginTop: "10px" }}>ฟังก์ชันจัดเก็บค่าความถี่</h9></div>
                                        </div>
                                        <br></br>

                                        <div style={{ boxShadow: "0px 0px 1px rgba(0, 0, 0, 5)" }}>
                                        <button type="button" className="btn btn-dark" style={{ width: "100px", marginLeft: "25px", marginTop: "10px"}} onClick={() => this.tnoise()}>test</button>
                                        <div><h9 style={{ color: "red", marginLeft: "25px", marginTop: "10px" }}>ฟังก์ชันค้นหาช่วงเวลาที่เกิดเสียงรบกวน</h9></div>
                                        </div>

                                 
                            </div>

                            <button type="button" className="btn btn-dark" style={{ width: "100px",display:"block",marginRight:"auto",marginLeft:"auto"}} onClick={() => this.detect()}>Detect</button>

                            <div id="peaks-container"></div>
                        </div>


                        {this.state.gg ? null : <Spinner size="big" color="Blue" />}
                        
                        {this.state.url}
                        {this.state.music_play}

                    </div>


                    <div className="col-3">
                        <div className="card">
                            <h3 style={{textAlign:"center"}}>ตารางแสดงผลเสียงรบกวน</h3>
                            <table style={{ border: "1px solid black",  padding: "10px" , borderCollapse: "collapse" }}>
                                <tr>
                                    <th style={{borderRight:"1px solid black" , textAlign: "center"}}>Number</th>
                                    <th style={{textAlign: "center"}}>Time</th>
                                </tr>
                                    
                                {this.state.d.map((e,index)=>{
                                    return(
                                        <tr style={{ border: "1px solid black" }}>
                                            <td style={{ borderRight: "1px solid black", textAlign: "center" }}>
                                                {index + 1 >= 6 ?
                                                    <div style={{ color: "red" }}>{index + 1}</div>
                                                    :
                                                    <div style={{ color: "green" }}>{index + 1}</div>
                                                }
                                            </td>
                                            <td style={{ textAlign: "center" }}>
                                                {index + 1 >= 6 ?
                                                   
                                                    <div style={{ color: "red" }}>{e} min</div>
                                                    :
                                                    <div style={{ color: "green" }}>{e} min</div>
                                                }
                                            </td>
                                        </tr>
                                    )}                                
                                )}
                                </table>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>



            // <div>
                
            //     <div className="App">
                
               

            //     <div className="card" style={{
            //         width: "50%",
            //         display: "block",
            //         marginRight: "auto",
            //         marginLeft: "10%",
            //         background: "rgba(255, 255, 255)",
            //         borderRadius: "40px 40px 0px 0px"

            //     }}>
            //         <div className="card card-1" style={{
            //         width: "50%",
            //         display: "block",
            //         marginRight: "right",
            //         marginLeft: "100%",
            //         background: "rgba(255, 255, 255)",
            //         borderRadius: "40px 40px 0px 0px"

            //     }}>

                    // {/* // // // // // // // // //show time // // // // // // // // //  */}
                        //    <div >
                        //     <table style={{ border: "1px solid black",  padding: "10px" , width: "25%" ,borderCollapse: "collapse" ,marginTop: "-5%" ,marginLeft: "64%"}}>
                        //         <tr>
                        //             <th style={{borderRight:"1px solid black" , textAlign: "center"}}>Number</th>
                        //             <th style={{textAlign: "center"}}>Time</th>
                        //         </tr>
                                    
                        //         {this.state.d.map((e,index)=>{
                        //             return(
                        //             <tr style={{border:"1px solid black" }}>
                        //                 <td style={{borderRight:"1px solid black" , textAlign: "center"}}>{index+1 >= 5 ? "red":"green"}{index+1}</td>
                        //                 <td style={{textAlign: "center"}}>{e}</td>
                        //             </tr>
                        //             )}                                
                        //         )}
                        //         </table>
                        //     </div>
//   {/* // // // // // // // // //show time // // // // // // // // //  */}
                // </div>



                //     <div className="card-header">
                //         <ProgressBar
                //             percent={this.state.per}
                //             filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                //         />
                //     </div>
                //     <div className="card-body"
                //         style={{ backgroundColor: "transparent" }}>

                //         <div>
                //             <input
                //                 type='file'
                //                 onChange={this.myChangeHandler}
                //             />

                //         </div>



                //         <div>
                //             <audio style={{marginTop: "2%"}}controls src={this.state.Sound} >
                //             </audio>
                //             <button type="button" className="btn btn-dark" style={{ width: "100px", margin: "0px 30px 10px 20px" ,marginTop: "-3%"}} onClick={() => this.human()}>Human</button>
                //             <button type="button" className="btn btn-dark" style={{ width: "100px", margin: "0px 30px 10px 20px",marginLeft: "-1%", marginTop: "-3%"}} onClick={() => this.Machine()}>Machine</button>
                            
                       
                           
     

                //             <div style={{ width: "10%" ,marginTop: "3%"}}>
                //                Test frequency
                           
                //                 <div style={{
                //                     position: "relative",
                //                     boxShadow: " 0px 0px 1px rgba(0, 0, 0, .5)",
                //                     padding: "10px",
                //                     background: "white"
                //                 }}>
                //                     <input type="range" orient="vertical" min="0" max="100" onChange={this.frequency}></input>frequency : {this.state.valuel}<br />
                                    
                //                 </div>

                               
                //             </div>


                //             <div id="slideContainer"></div>






                //             {this.state.gg ? <div></div> : <Spinner size="big" color="Blue" />}
                            
                //         </div>
                //         {this.state.url}


                //         {this.state.music_play}

                //     </div>

                // </div>

                // <div className="card" style={{
                //     width: "50%",
                //     display: "block",
                //     marginRight: "auto",
                //     marginLeft: "10%",
                //     background: "rgba(255, 255, 255)",
                //     borderRadius: "0px 0px 40px 40px"



                // }}>

                //         <div className="card">

                //         </div>
                //     <div className="card-body">



                //         <div style={{ width: "100%", display: "flex" }}>

                //         </div>
                //         <div className="nav">
                            
                //         <button type="button" className="btn btn-dark" style={{ width: "100px", margin: "0px 30px 10px 20px" ,marginLeft: "1%"}} onClick={() => this.detect()}>Detect</button>
                //            <button type="button" className="btn btn-dark" style={{ width: "100px", margin: "0px 30px 10px 20px" ,marginLeft: "-1%" }}onClick={() => this.custom()}>Custom</button>

                //         </div>

                //         <div id="peaks-container"></div>
                //     </div>

                // {/* </div> */}



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

            //             <div style={{ width: "20%" }}>
            //                 <input type="radio" name="funtion" />Low pass filter
            //                 <br />
            //                 <input type="range" min="0" max="100" onChange={this.lowhpass}></input>
            //             </div>

            //             <div style={{ width: "20%" }}>
            //                 <input type="radio" name="funtion" />High pass filter
            //                 <br />

            //                 <input type="range" min="0" max="100" onChange={this.higthpass}></input>
            //             </div>



            //         </div>
            //         <div className="nav"><NavLink exact to="/Show"><button>Save</button></NavLink>
            //         </div> */}


            //     {/* </div> */}

            // </div>
            // </div>

            



        );
    }

}


export default App;

