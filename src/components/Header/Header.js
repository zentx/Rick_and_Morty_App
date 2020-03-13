import React, { Component } from 'react';
import { StyledHeader } from './Header.styled';
import { NavLink } from 'react-router-dom';

 
class Header extends Component {

    render(){

        return(
            <StyledHeader>
                <nav className="menu">
                    <h3>API CLIENT</h3>
                    <div className="menu_right">
                        <ul className="menu_list">
                            <li className="menu_list-item"><NavLink  to="/" className={this.props.home ? "menu_link--active": "menu_link"} >POSTS</NavLink ></li>
                            <li className="menu_list-item"><NavLink  to="/comments/" className={this.props.chara ? "menu_link--active inactive": "menu_link inactive"}  >COMENTARIOS</NavLink ></li>
                        </ul>

                        <button className="menu_search-button"></button>
                    </div>
                </nav>
            </StyledHeader>  
        );
    }

}

export default Header;