import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

import '../styles/body.css';
export default class Contact extends Component {

    render() {
        const mainBody = {
            marginTop: "10vh"
        };

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