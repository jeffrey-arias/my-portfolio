import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

import '../body.css';

export default class Contact extends Component {


    render() {
        const mainBody = {
            marginTop: "10vh"
        };
        const reactLogo = require('../img/react.png');
        const bootstrapLogo = require('../img/bootstrap.png');
        const jQueryLogo = require('../img/jquery.png');
                  
        return(
            <div className="mainBody" id="mainBody" style={mainBody}>
                <main role="main" className="container">
                    <div className="underConstruction"></div>
                </main>
                <nav class="navbar fixed-bottom navbar-expand-sm navbar-dark">
                    <div class="mx-auto">
                    <div className="poweredByText">I made this site is made with: </div>
                        <img className="imgIcons" height={30} title={'React.js'} width={30} src={reactLogo.default}/>
                        <img className="imgIcons" height={30} title={'Bootstrap'} width={30} src={bootstrapLogo.default}/>
                        <img className="imgIcons" height={40} title={'jQuery'} width={40} src={jQueryLogo.default}/>
                    </div> 
                </nav>
            </div>  
        )
    }
    componentDidMount() {
        $("#App").removeClass("App").addClass("SubApp");
    }
}