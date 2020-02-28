import React, { Component } from 'react';
import { StyledFooter } from './Footer.styled';

class Footer extends Component{
    render(){
        return(
            <StyledFooter>
                <div class="splitter"></div>
                <div class="bar">
                    <div class="bar-wrap">
                        <ul class="links">
                            <li><a href="#"><b>LICENSE</b></a></li>
                            <li><a href="#"><b>CONTACT US</b></a></li>
                            <li><a href="#"><b>ADVERTISE</b></a></li>
                            <li><a href="#"><b>ABOUT</b></a></li>
                        </ul>

                    </div>
                </div>
            </StyledFooter>
        );
    }b
}

export default Footer;