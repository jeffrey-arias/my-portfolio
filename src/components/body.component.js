import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

import '../body.css';

function changeBackground () {
    $("#App").toggleClass("App");
}

function hideDivs(e) {
    $("#visibleText").hide();
    $("#hiddenText").show();
    $("#hiddenTextFunny").show();
    $("#hiddenTextFunnySub").show();
    setTimeout(function(){$("#hiddenTextFunnySub2").show();}, 1000);
}

function showDivs(e) {
    $("#visibleText").show();
    $("#hiddenText").hide();
    $("#hiddenTextFunny").hide();
    $("#hiddenTextFunnySub").hide();
    if ($("#hiddenTextFunnySub2").is(":hidden")){
        setTimeout(function(){$("#hiddenTextFunnySub2").hide();}, 1000);
    } else {
        $("#hiddenTextFunnySub2").hide();
    }
}
export default class MainBody extends Component {

  
    render() {
        const reactLogo = require('../img/react.png');
        const bootstrapLogo = require('../img/bootstrap.png');
        const jQueryLogo = require('../img/jquery.png');
        const sassLogo = require('../img/sass.png');
                  
        return(
            <div className="mainBody" id="mainBody">
                <main role="main" className="container" onMouseOver={hideDivs} onMouseOut={showDivs}>
                        <div className="mainText">Hello</div>
                        <div className="tinyText" id="tinyText"><mark>&lt; <text id="mobile">tap</text><text id="desktop">mouseover</text> for fun /&gt;</mark></div>
                        <div className="text">I am <b>Jeff</b>.</div>
                        <div id="visibleText" className="text">A Full-Stack Developer.</div> 
                        <div id="hiddenText" className="strikethroughtextHidden">A Full-Stack Developer.</div> 
                        <div id="hiddenTextFunny" className="textHidden">I turn caffeine into lines of code.</div> 
                        <div id="hiddenTextFunnySub" className="textHidden">With ninja tools.</div>
                        <div id="hiddenTextFunnySub2" className="textHidden">And some magic.</div>
                </main>
                <nav class="navbar fixed-bottom navbar-expand-sm navbar-dark">
                    <div class="mx-auto">
                    <div className="poweredByText">I made this site is made with: </div>
                        <img className="imgIcons" height={30} title={'React.js'} width={30} src={reactLogo.default}/>
                        <img className="imgIcons" height={30} title={'Bootstrap'} width={30} src={bootstrapLogo.default}/>
                        <img className="imgIcons" height={40} title={'jQuery'} width={40} src={jQueryLogo.default}/>
                        <img className="imgIcons" height={30} title={'Sass'} width={30} src={sassLogo.default}/>
                    </div> 
                </nav>
            </div>  
        )
    }

    componentDidMount() {
        if (typeof window.orientation !== 'undefined'){
            document.getElementById("mobile").style.display ="inline";
            document.getElementById("desktop").style.display="none";
            document.getElementById("mainBody").style.textAlign="left";
            document.getElementById("tinyText").style.paddingRight="0";
            document.getElementById("tinyText").style.paddingLeft="5vh";
        }
        $("#App").removeClass("SubApp").addClass("App");
        
        $(".nav-item").on("click", function(event) {
            var clickedItem = $(this);
            $(".nav-item").each( function() {
                $(this).removeClass( "active" );
            });
            clickedItem.addClass( "active" );
        });
    }
}