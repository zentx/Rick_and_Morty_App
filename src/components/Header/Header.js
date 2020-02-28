import React, { Component } from 'react';
import { StyledHeader } from './Header.styled';
import logo from './../../assets/img/rick_and_morty.png';
 
class Header extends Component {

    render(){
        return(
            <StyledHeader>
                <nav className="menu">
                    <img src={logo} width="100" height="40" />
                    

                    <div className="menu_right">
                        <ul className="menu_list">
                            <li className="menu_list-item"><a className="menu_link menu_link--active" href="#">Home</a></li>
                            <li className="menu_list-item"><a className="menu_link" href="#">About</a></li>
                        </ul>

                        <button className="menu_search-button"></button>
                    </div>
                </nav>
            </StyledHeader>  
        );
    }

}

export default Header;