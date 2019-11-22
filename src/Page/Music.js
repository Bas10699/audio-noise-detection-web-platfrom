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
import pizzicato from 'pizzicato';
import { withRouter, NavLink, Link } from 'react-router-dom'
import Show from './Show';

const Styles = styled.div;


class Music extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);


        this.state = {

            play: false,
            pause: true,
            music_play: "",
            url: '',
            mm: ''



        };


        // this.url = 'C:/Users/Admin/projectsound/src/Music/The Untamed.mp3';
        this.audio = new Audio(this.state.url);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);

    }
    handleChange(event) {
        this.audio.src = event.target.value
        this.audio.load();

        let reader = new FileReader();
        let file = event.target.files[0];
        if (!file) {

        } else {
            reader.readAsDataURL(file)

            reader.onloadend = () => {
                // console.log("music", reader.result)
                this.setState({
                    mm: reader.result
                })
            }
        }

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
            music_play: this.state.music_play
        });
    }

    uploadmusic = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];
        if (!file) {

        } else {
            reader.readAsDataURL(file)

            reader.onloadend = () => {
                this.setState({
                    mm: reader.result
                })
                // console.log("music", reader.result)
            }
        }
    }
    get_order = async () => {
        let obl = {
            name: this.state.mm,
            old: 56
        }
        console.log(this.state.mm)
        try {
            await post(obl, 'upload_file', null).then((result) => {
                alert(result.error)
            })


        }
        catch (error) {
            alert("get_cart_trader" + error);
        }
    }


    render() {

        return (

            <div className="App">
                <div style={{fontSize:"18px"}}><h1 >Machine learning Web platform : Phase 1 Data manipulation  </h1>
                 </div>   
                    
                        

                    <div className="Box">

                        <div>
                            <input
                                type="file"
                                id="music"
                                name="music"
                                // onChange={this.handleInputChange} 
                                // onChange={this.handleChange}
                                // onChange={(e) => this.uploadmusic(e)}
                                onChange={e => this.handleChange(e)}
                            />

                        </div>
                        {this.state.url}

                        
                        {this.state.music_play}
                        <div>
                            <button onClick={this.play}>Play</button>
                            <button onClick={this.pause}>Pause</button>
                        </div>

                        
                        <div style={{ width: "100%",display:"flex" }}>
                            <div style={{ width: "30%" }}>
                                <input type="radio" name="funtion" />High pass filter
                            <br />
                                Volume<input type="number" min="0" max="100" style={{width:"40%"}} /><br />
                                Frequency<input type="number" min="10" max="22050" style={{width:"40%"}}/><br />
                                Peak<input type="number" min="0" max="1000" style={{width:"40%"}}/><br />
                            </div>
                            <div style={{ width: "30%" }}>
                                <input type="radio" name="funtion" />Low pass filter
                            <br />
                                Volume<input type="number" min="0" max="100" style={{width:"40%"}}/><br />
                                Frequency<input type="number" min="10" max="22050" style={{width:"40%"}}/><br />
                                Peak<input type="number" min="0" max="1000" style={{width:"40%"}}/><br />
                            </div>
                            <div style={{ width: "30%" }}>
                                <input type="radio" name="funtion" />Noise filter
                            <br />
                                Volume<input type="number" min="0" max="100" style={{width:"40%"}}/><br />
                                Frequency<input type="number" min="10" max="22050" style={{width:"40%"}}/><br />
                                Peak<input type="number" min="0" max="1000" style={{width:"40%"}}/><br />
                            </div>
                        
                        </div>
                        <div className="nav"><NavLink exact to="/Show"><button>Save</button></NavLink>
                        </div>
                        
                       
                    </div>

                </div>


            
        );
    }
}


export default withRouter(Music);