import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

import '../styles/body.css';

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
                  
        return(
            <div className="mainBody" id="mainBody">
                <main role="main" className="container">
                        <div onMouseOver={hideDivs} onMouseOut={showDivs}>
                        <div className="mainText">Hello</div>
                        <div className="tinyText" id="tinyText"><mark>&lt; <text id="mobile">tap</text><text id="desktop">mouseover</text> for fun /&gt;</mark></div>
                        </div>
                        <div className="text">I am <b>Jeff</b>.</div>
                        <div id="visibleText" className="text">A Full-Stack Developer.</div> 
                        <div id="hiddenText" className="strikethroughtextHidden">A Full-Stack Developer.</div> 
                        <div id="hiddenTextFunny" className="textHidden">I turn caffeine into lines of code.</div> 
                        <div id="hiddenTextFunnySub" className="textHidden">With ninja tools.</div>
                        <div id="hiddenTextFunnySub2" className="textHidden">And some magic.</div>
                </main>                
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