import React, { Component } from 'react';
import ReactRange from "react-component-range";
import Music from '../Music/The Untamed.mp3'
import Sound from 'react-sound'
import AudioPlayer from "react-modular-audio-player";



let audioFiles = [
    {
      src: "../Music/Music_mp3.mp3",
      title: "Hey Jude",
      artist: "The Beatles"
    }
  ];
class Upload extends Component {
constructor(props){
    super(props);
    this.state ={
        play : ""
    }
}
    
    onChange = value => {
        console.debug("Value: ", value);
    };


    render() {
        return (
            <div>
                
                Upload
                <input type="file" name="myFile" ></input>
                <div className="Side">
                    <ReactRange
                        min={0}
                        max={100}
                        defaultValue={50}
                        ariaLabel="Slider to adjust the volume"
                        onChange={this.onChange} />
                </div>
                {/* <AudioPlayer
                    audioFiles={audioFiles} /> */}
                    <audio ref="audio_tag" src={Music} controls autoPlay/>
            </div>
        )

    }
}
export default Upload;

// this.state={x:""};
// this.setState={(
//     x:value
// )}