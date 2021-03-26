import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class MainBody extends Component {

  
    render() {
        const mainBody = {
            textAlign: "center",
            color: "white",
            marginTop: "20vh",
            fontFamily: "Garamond"
        };

        const mainText = {
            fontSize: "100px",
            fontStyle: "bold"

        };

        const text = {
            fontSize: "20px",
            fontFamily: "Courier New"
        };

        const strikethroughtext = {
            fontSize: "20px",
            textDecoration: "line-through"
        };
          
        return(
            <div style={mainBody}>
                <main role="main" className="container">
                        <div style={mainText}>Hello!</div>
                        <div style={text}>I am Jeff.</div>
                        <div style={strikethroughtext}>(I am a Full Stack Sofrware Developer)</div> 
                        <div style={text}>I turn caffeine into lines of code.</div>  
                </main>
            </div>
        )
    }
}