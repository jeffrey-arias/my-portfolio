import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

import '../body.css';

function hideDivs(e) {
    $("#visibleText").hide();
    $("#hiddenText").show();
    $("#hiddenTextFunny").show();
    $("#hiddenTextFunnySub").show();
    $("#hiddenTextFunnySub2").show();
}

function showDivs(e) {
    $("#visibleText").show();
    $("#hiddenText").hide();
    $("#hiddenTextFunny").hide();
    $("#hiddenTextFunnySub").hide();
    $("#hiddenTextFunnySub2").hide();
}
export default class MainBody extends Component {

  
    render() {
        const reactLogo = require('../img/react.png');
        const bootstrapLogo = require('../img/bootstrap.png');
        const jQueryLogo = require('../img/jquery.png');
                  
        return(
            <div className="mainBody">
                <main role="main" className="container" onMouseOver={hideDivs} onMouseOut={showDivs}>
                        <div className="mainText">Hello</div>
                        <div className="tinyText">&lt; <text id="mobile">tap</text><text id="desktop">mouseover</text> for fun &gt;</div>
                        <div className="text">I am Jeff.</div>
                        <div id="visibleText" className="text">A Full-Stack Developer.</div> 
                        <div id="hiddenText" className="strikethroughtextHidden">(A Full-Stack     Developer.)</div> 
                        <div id="hiddenTextFunny" className="textHidden">I turn caffeine into lines of code.</div> 
                        <div id="hiddenTextFunnySub" className="textHidden">With ninja tools.</div>
                        <div id="hiddenTextFunnySub2" className="textHidden">And some magic.</div>
                </main>
                <nav class="navbar fixed-bottom navbar-expand-sm navbar-dark">
                    <div class="mx-auto">
                    <div className="poweredByText">This site is made with: </div>
                        <img height={30} title={'React.js'} width={30} src={reactLogo.default}/>
                        <img height={30} title={'Bootstrap'} width={30} src={bootstrapLogo.default}/>
                        <img height={40} title={'jQuery'} width={40} src={jQueryLogo.default}/>
                    </div> 
                </nav>
            </div>  
        )
    }
}