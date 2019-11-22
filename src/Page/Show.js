import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'
class Show extends Component {
  render() {
      return(
          <div className="App">
              <div className="Thebox">
                  <div className ="Page2">
                      <img src={('../Music/file=icon.png')} />
                  </div>
                        <div className = "Bottom">
                            <button onClick={this.play}>Play</button>
                            <button onClick={this.pause}>Pause</button>
                        </div>
                  
                  <NavLink exact to={"/"}>
                    <button>Home</button>
                </NavLink>
              </div>
              
                
              
              
          </div>
      )
  }
}

export default Show; // Don’t forget to use export default!