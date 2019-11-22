import react from 'react'
import Pizzicato from 'pizzicato'
import PizzicatoRecorder from 'pizzicato-recorder'
import React, { Component } from 'react';
// Removed logo since we don't need it anymore
import './App.css';
import { thisTypeAnnotation } from '@babel/types';
import { Spinner } from 'reactstrap';
import { Button } from 'reactstrap';
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



    // delay = () => {
    //   var delay = new Pizzicato.Effects.Delay({
    //     feedback: 0.6,
    //     time: 1,
    //     mix: 0.5
    //   });
    //   this.setState({
    //     delay:delay
    //   })
    // }

    playMusic = () => {
let sound = this.state.sound
        sound.play();


}






    save = () => {
        
      this.state.sound.stop();

      let sound = this.state.sound
      Pizzicato.Recorder.start({ mute: true })
      sound.play();
      sound.on('end', function () {
          console.log('sound end', sound);
          Pizzicato.Recorder.stop('wav', handleAudio)
      });


        function handleAudio(file, fileType) {
            let url = URL.createObjectURL(file)
            let hf = document.createElement('a')
            hf.href = url
            hf.download = 'pizzicato-recorder-rocks.' + fileType
            hf.innerHTML = hf.download
            hf.click()
    }
  }
    stopMusic = () => {
        console.log("stop!")
        this.state.sound.removeEffect(this.state.highPassFilter)
        this.state.sound.removeEffect(this.state.lowPassFilter)
        this.state.sound.stop();

    }

    addEffect = () => {
        var delay = new Pizzicato.Effects.Delay({
            feedback: 0.6,
            time: 1,
            mix: 0.5
        });

        console.log("addEffect!")

        this.state.sound.addEffect(delay);
    }
    addEffect = () => {
        let sound = this.state.sound
        sound.removeEffect(this.state.highPassFilter)
        var highPassFilter = new Pizzicato.Effects.HighPassFilter({
            frequency: 4000,
            peak: 10
        });
        this.setState({
            highPassFilter: highPassFilter
        })

        console.log("addEffect!")

        sound.addEffect(highPassFilter);
        this.setState({
            sound: sound
        })
    }
    higthpass = (e) => {
        let value = e.target.value
        console.log(value)
        let sound = this.state.sound
        sound.removeEffect(this.state.highPassFilter)
        var highPassFilter = new Pizzicato.Effects.HighPassFilter({
            frequency: value * 100,
            peak: 10
        });
        this.setState({
            highPassFilter: highPassFilter
        })

        console.log("addEffect!")

        sound.addEffect(highPassFilter);
        this.setState({
            sound: sound
        })
    }

    lowhpass = (e) => {
        let value = e.target.value
        console.log(value)
        let sound = this.state.sound
        sound.removeEffect(this.state.lowPassFilter)
        var lowPassFilter = new Pizzicato.Effects.LowPassFilter({
            frequency: value * 100,
            peak: 10
        });
        this.setState({
            lowPassFilter: lowPassFilter
        })

        console.log("addEffect!")

        sound.addEffect(lowPassFilter);
        this.setState({
            sound: sound
        })
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

        return (



            <div classname="container">
                <h1>หกยาเยฟหกเนฟหกเยากเหยกหเฟยเกฟหาฟหกยเกหฟเยาฟหเยา</h1>


                <div class="card-body">
                    <input type="file" id="upload" onChange={this.myChangeHandler} />
                      <div>
                 <audio controls src={this.state.Sound} >

                 </audio>
                 </div>

                </div>

                {this.state.gg ? <div>ควย</div> : <Spinner size="sm" color="secondary" />}
                <p>I just created my first React App</p>
                <button onClick={() => this.playMusic()}>play</button>
                <button onClick={() => this.stopMusic()}>stop</button>
<button onClick={() => this.save()}>save</button>

                <button onClick={() => this.addEffect()}>addaffect</button>
                <input type="range" min="1" max="100" onChange={this.lowhpass}></input>
                <input type="range" min="1" max="100" onChange={this.higthpass}></input>
                <div id="peaks-container"></div>
            </div>
        );
    }
}

export default App;


        // import React from 'react';
        // import Highcharts from 'highcharts';

// class Donut extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             series: [{
//                 name: 'Gases',
//                 data: [
//                     {
//                       name: 'Argon',
//                       y: 0.9,
//                       color: '#3498db'
//                     },
//                     {
//                       name: 'Nitrogen',
//                       y: 78.1,
//                       color: '#9b59b6'
//                     },
//                     {
//                       name: 'Oxygen',
//                       y: 20.9,
//                       color: '#2ecc71'
//                     },
//                     {
//                       name: 'Trace Gases',
//                       y: 0.1,
//                       color: '#f1c40f'
//                     }
//                 ]
//             }]
//         }
//     }

//     highChartsRender() {
//       (function (H) {
//         // Pass error messages
//         H.Axis.prototype.allowNegativeLog = true;

//         // Override conversions
//         H.Axis.prototype.log2lin = function (num) {
//             var isNegative = num < 0,
//                 adjustedNum = Math.abs(num),
//                 result;
//             if (adjustedNum < 10) {
//                 adjustedNum += (10 - adjustedNum) / 10;
//             }
//             result = Math.log(adjustedNum) / Math.LN10;
//             return isNegative ? -result : result;
//         };
//         H.Axis.prototype.lin2log = function (num) {
//             var isNegative = num < 0,
//                 absNum = Math.abs(num),
//                 result = Math.pow(10, absNum);
//             if (result < 10) {
//                 result = (10 * (result - 1)) / (10 - 1);
//             }
//             return isNegative ? -result : result;
//         };
//     }(Highcharts));

//         Highcharts.chart({
//             chart: {
//               type: 'spline',
//               renderTo: 'atmospheric-composition'
//             },
//             title: {
//               text: 'Logarithmic axis with custom conversion allows negative values'
//           },

//           xAxis: {
//               categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//           },

//           yAxis: {
//               type: 'logarithmic'
//           },

//           series:  [{
//             name: 'Installation',
//             data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
//         }, {
//             name: 'Manufacturing',
//             data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
//         }, {
//             name: 'Sales & Distribution',
//             data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
//         }, {
//             name: 'Project Development',
//             data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
//         }, {
//             name: 'Other',
//             data: [12908, 5948, 8105, 0, 8989, 11816, 18274, 18111]
//         }],

//         });
//     }

//     componentDidMount() {
//         this.highChartsRender();
//     }

//    	render() {
//        	return (
//             <div id="atmospheric-composition">
//             </div>
//        	);
//    	}
// }

// export default Donut;
