import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

import '../styles/footer.css';

export default class Footer extends Component {

  
    render() {
        const reactLogo = require('../img/react.png');
        const bootstrapLogo = require('../img/bootstrap.png');
        const jQueryLogo = require('../img/jquery.png');
        const sassLogo = require('../img/sass.png');
                  
        return(
                <footer class="footer">
                    <div class="container" class="mx-auto">
                    <div className="poweredByText">I made this site is made with:</div>
                        <img className="imgIcons" height={30} title={'React.js'} width={30} src={reactLogo.default}/>
                        <img className="imgIcons" height={30} title={'Bootstrap'} width={30} src={bootstrapLogo.default}/>
                        <img className="imgIcons" height={40} title={'jQuery'} width={40} src={jQueryLogo.default}/>
                        <img className="imgIcons" height={30} title={'Sass'} width={30} src={sassLogo.default}/>
                    </div> 
                  </footer>
              
        )
    }
}