import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import {Dimensions} from 'react-native';

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
    constructor () {
        super();      
        Dimensions.addEventListener('change', () => {
            this.updateBodyStyles();
        });
    }
  
    render() {
                  
        return(
            <div className="mainBody" id="mainBody">
                <main role="main" className="container">
                        <div onMouseOver={hideDivs} onMouseOut={showDivs}>
                        <div id="mainText" className="mainText">Hello</div>
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
    updateBodyStyles () {
        const isMobile = (typeof window.orientation !== 'undefined');
        const isPortrait =  window.innerHeight > window.innerWidth;
        $("#App").removeClass("AppMobile").addClass("App");

        if (isMobile){
            document.getElementById("mobile").style.display ="inline";
            document.getElementById("desktop").style.display="none";
            $("#tinyText").removeClass("tinyText").addClass("tinyTextMobile");
            $("#visibleText").removeClass("text").addClass("textMobile");
            $("#hiddenText").removeClass("strikethroughtextHidden").addClass("strikethroughtextMobileHidden");
            $("#mainBody").removeClass("mainBody").addClass("mainBodyMobile");
            $("#App").css("background-position-y", "55px");
            if (isPortrait) {
                document.getElementById("mainBody").style.textAlign="left";
                $("#App").removeClass("SubApp").removeClass("App").addClass("AppMobile");
            } else {
                document.getElementById("mainBody").style.textAlign="right";
                $("#App").removeClass("SubApp").addClass("App");
                $("#App").css("background-position-y", "55px");
                $("#mainApp").css("font-size", "60px");

            }
            $("#hiddenTextFunny").text("I turn caffeine into lines of code.").html();

            if (window.innerHeight < 650 ) {
                if (isPortrait) {
                    $("#hiddenTextFunny").text("I turn caffeine into\nlines of code.").html( $("#hiddenTextFunny").text().replace(/\n/g, '<br />'));
                }   
                $("#mainText").removeClass("mainText").addClass("mainTextMobile");
            }
        }
        else {
            $("#App").removeClass("SubApp").addClass("App");
        }
    }
    
    componentDidMount() {
        this.updateBodyStyles();
        window.addEventListener("resize", this.updateBodyStyles());

        $(".nav-item").on("click", function(event) {
            var clickedItem = $(this);
            $(".nav-item").each( function() {
                $(this).removeClass( "active" );
            });
            clickedItem.addClass( "active" );
        });
    }
}