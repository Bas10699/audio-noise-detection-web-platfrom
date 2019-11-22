import React, { Component } from 'react'
// import { Button, Input, Icon,Dropdown,Card} from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
// import $ from 'jquery'
// import styles from './Home.scss'
// import Modal from './Modal.jsx'
// import MakeChannelModal from './MakeChannelModal.jsx'

import PlayMusic from '../Music/The Untamed.mp3'
import styled from 'styled-components';
import { defaultCipherList } from 'constants';

const Styles = styled.div`

`;

export default class Slider extends React.Component{
    state = {
        value : 50
    }
    render(){
        return(
            <Styles>
                <input type="range" min={0} max={100} value={this.state.value} className="slider" onChange={this.handleOnChange}/>
                <div className="value"> {this.state.value}</div>
            </Styles>
        )
    }
}