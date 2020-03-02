import styled from 'styled-components';
import logo from './../../assets/img/rick_and_morty_logo.png';
import searchIcon from './../../assets/img/search-icon.png';

export const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100%;
    font-family: Verdana;
    overflow: hidden;
    z-index: 20;


    .menu {
        background-color: white;
        box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.15);
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        padding: 0 40px;
        position: relative;
    }

    .menu_logo {
        text-indent: -9999999px;
        display: inline-block;
        height: 100%;
        width: 92px;
        background-image: url(${logo});
        background-size: cover 100%;
        background-repeat: no-repeat;
        background-position: center;
        margin: 0;
    }

    .menu_right {
        display: flex;
        align-items: center;
        height: 100%;
    }

    .menu_list {
        list-style-type: none;
        padding: 0;
        height: 100%;
        margin: 0;
        margin-right: 40px;
    }

    .menu_list-item {
        display: inline-block;
        height: 100%;
        margin-right: 20px;
    }

    .menu_list-item:last-child {
        margin-right: 0;
    }

    .menu_link {
        color: #3a3e47;
        display: inline-block;
        height: 45px;
        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        padding: 0 3px;
    }
    
    .inactive {
        pointer-events: none;
        cursor: default;
    }

    .menu_link:hover {
        color: #32a852;
    }
    
    .menu_link--active {
        color: #32a852;
        border-top: 4px solid #32a852;
        font-weight: 700;
    }

    .menu_search-button {
        height: 42px;
        width: 42px;
        border-radius: 50%;
        border: 1px solid #c8c9ce;
        background-color: transparent;
        outline: none;
        cursor: pointer;
        background-image: url(${searchIcon});
        background-repeat: no-repeat;
        background-position: center;
    }


`
