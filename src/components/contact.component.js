import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

import '../styles/body.css';

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
            </div>  
        )
    }
    componentDidMount() {
        $("#App").removeClass("App").removeClass("AppMobile").addClass("SubApp");
    }
}