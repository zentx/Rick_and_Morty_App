import React, { Component } from 'react';
import { StyledHeader } from './Header.styled';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/img/rick_and_morty.png';
 
class Header extends Component {

    render(){

        return(
            <StyledHeader>
                <nav className="menu">
                    <img src={logo} width="100" height="40" />
                    
                    <div className="menu_right">
                        <ul className="menu_list">
                            <li className="menu_list-item"><NavLink  to="/" className={this.props.home ? "menu_link--active": "menu_link"} >INICIO</NavLink ></li>
                            <li className="menu_list-item"><NavLink  to="/characters/" className={this.props.chara ? "menu_link--active inactive": "menu_link inactive"}  >PERSONAJES</NavLink ></li>
                        </ul>

                        <button className="menu_search-button"></button>
                    </div>
                </nav>
            </StyledHeader>  
        );
    }

}

export default Header;