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
            d:[],
            valueg:0
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

        let reader = new FileReader();
        let file = e.target.files[0];
        this.setState({
            parth:e.target.files[0]['name']
        })
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
                mediaElement:null,
                container: document.querySelector('#peaks-container'),
                mediaElement: document.querySelector('audio'),
                audioContext: myAudioContext,
                waveformBuilderOptions: {
                    scale: 8
                   
                },
      zoomLevels: [null],
            });

        }

        console.log('555555',document.querySelector('audio'))
        main(peaks);

}

    playMusic = () => {

        console.log("Play!", this.state.sound)
        let sound = this.state.sound
        sound.play();
    }

    stopMusic = () => {
        console.log("stop!")
        this.state.sound.removeEffect(this.state.highPassFilter)
        this.state.sound.removeEffect(this.state.lowPassFilter)
        this.state.sound.stop();

    }

    clear = () => {
       
            
        this.setState({
            d:[]
        })
     
        this.setState({
            d:[]
        })

}
  
    human = () => {
        fetch('http://127.0.0.1:5000/human', {  
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
           
            alert("Human Ready!!")
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

    Machine = () => {
        fetch('http://127.0.0.1:5000/tester', {  
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
            alert("Machine Ready!!")
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

    custom = (e) => {
        console.log(typeof this.state.valuel);

        fetch('http://127.0.0.1:5000/custom', {  
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                    
                    'res': this.state.Sound,
                    'fre': this.state.valuel,
                })
            }).then(res => {
                return res.json();
            })  
            .then(data => {
                alert("Custom Ready!!")
                console.log(data);
                this.setState({
                    data:data.time
                })
                // console.log(data[5]);
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
    gran = (e) => {

        this.state.per = 60
        var  valueg =parseInt(e.target.value)
     
        console.log( valueg)
        

        this.setState({
            
            valueg:valueg 
        })
    }

    refect = () => {
        window.location.reload(); 
    }


    frequency = (e) => {

        this.state.per = 60
        var  valuel =parseInt(e.target.value)
     
        console.log(typeof valuel)
        

        this.setState({
            
            valuel:valuel 
        })
    }
    csv = () => {
        var csvRow=[];
        var m=[[this.state.parth]]
        var A=[['id','namefile',m,'\nnumber','time',]]
        var re=this.state.d
        for(var item = 0;item<=re.length-1;item++){
            A.push([item+1,re[item]])
            console.log(A);
        }
       
        
        
        console.log("susdu",re);
        for(var i = 0;i<A.length;++i)
        {
            csvRow.push(A[i].join(","))
             console.log(A);
               
             
        } 
       
        // re.push(b)
      
        var csvString = csvRow.join("%0A")
        
        
        var a= document.createElement("a")
        a.href='data:attachment/csv' + csvString
        a.target="_Blank"
        a.download="test.csv"
        document.body.appendChild(a)
        a.click()
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
                    <buttonb  width="50%">Home</buttonb>
                   
                </NavLink>
                <button type="button" className="btn btn-dark"style={{ width: "8%", marginLeft: "px", marginTop: "50px" }} onClick={this.refect}> <span>Refresh</span> </button>
                <button type="button" className="btn btn-dark"style={{ width: "8%", marginLeft: "px", marginTop: "50px" }} onClick={this.csv}> <span>Download</span> </button>
                
                    <div className="col-12">
                    
                         <div style={h1}>Audio noise detection web platform</div>
                         
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

                            <h4 style={{ margin: "10px" }}></h4>
                            <div style={{
                                
                                position: "relative",
                                boxShadow: "0px 0px 1px rgba(0, 0, 0, .5)",
                                padding: "10px",
                                background: "white"
                            }}>
                                <div style={{boxShadow: "0px 0px 1px rgba(0, 0, 0, 5)"}}>
                               <div><button type="button" className="btn btn-dark" style={{ width: "200px", marginLeft: "25px", marginTop: "10px" }} onClick={() => this.human()}>Human noise detect</button></div>
                                
                                <div><h9 style={{ color:"red", marginLeft: "25px", marginTop: "10px"}}>ฟังก์ชันการตรวจจับเสียงรบกวนของเสียงการสนทนาที่อยู่ในช่วงความถี่ 300-3,400 Hz</h9></div>
                                </div>
                                <br></br>
                                <div style={{boxShadow: "0px 0px 1px  rgba(0, 0, 0, 5)"}}>
                                <div><button type="button" className="btn btn-dark" style={{ width: "200px", marginLeft: "25px", marginTop: "10px" }} onClick={() => this.Machine()}>Machine noise detect</button></div>
                                <div><h9 style={{ color:"red", marginLeft: "25px", marginTop: "15px"}}>ฟังก์ชันการตรวจจับเสียงรบกวนของเครื่องจักรที่มีการทำงานแบบมอเตอร์ที่อยู่ในช่วงความถี่ 6,500-7,000 Hz</h9></div>
                                </div>
                                <br></br>   
                                <div style={{boxShadow: "0px 0px 1px  rgba(0, 0, 0, 5)" }}>
                                    <input type="number" min="0" max="20000" style={{ width: "100px" ,marginLeft: "10px"}} style={{textAlign:'center'}} onChange={this.frequency}></input>
                                    <button type="button" className="btn btn-dark" style={{ width: "100px" ,marginLeft: "10px",display: "inline-block" }} onClick={() => this.custom()}>Custom</button> <div><h9 style={{ color:"red", marginLeft: "25px", marginTop: "15px",display:"in"}}>ฟังก์ชันการตรวจจับเสียงรบกวนแบบกำหนดเอง ปรับช่วงความถี่ได้ตั้งแต่ 0-20,000 Hz</h9></div>
                                    
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
                         <input type="number" min="0" max="20000" style={{ width: "100px" ,marginLeft: "10px"}} style={{textAlign:'center'}} onChange={this.gran}></input>
                         <h9  style={{color:"red" ,marginLeft: "10px"}}>เกณฑ์ความเสียหายต่อหนึ่งนาที</h9 >
                           </div>         
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
                                                
                                                {index  >= this.state.valueg ?
                                                    <div style={{ color: "red" }}>{index + 1}</div>
                                                    :
                                                    <div style={{ color: "green" }}>{index + 1}</div>
                                                }
                                            </td>
                                            <td style={{ textAlign: "center" }}>
                                                {index  >= this.state.valueg ?
                                                 
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

