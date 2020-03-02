import styled from 'styled-components';


export const StyledFooter = styled.footer`
    background-color: #2E3639;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    font-family: 'Source Sans Pro', sans-serif;
    overflow: hidden;
    

    .splitter {
        background-color: #8BCF21;
        background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(.25, rgba(255, 255, 255, .2)), color-stop(.25, transparent),
            color-stop(.5, transparent), color-stop(.5, rgba(255, 255, 255, .2)),
            color-stop(.75, rgba(255, 255, 255, .2)), color-stop(.75, transparent),
            to(transparent));
        background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
            transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
            transparent 75%, transparent);
        background-image: -moz-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
            transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
            transparent 75%, transparent);
        background-image: -ms-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
            transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
            transparent 75%, transparent);
        background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
            transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
            transparent 75%, transparent);
        background-image: linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
            transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
            transparent 75%, transparent);
        -webkit-background-size: 50px 50px;
        -moz-background-size: 50px 50px;
        background-size: 50px 50px;
        -moz-box-shadow: 1px 1px 8px gray;
        -webkit-box-shadow: 1px 1px 8px gray;
        box-shadow: 1px 1px 8px gray;
        height: 20px;
    }

    .bar {
        background-color: #1E2629;
        padding: 30px 0;
        height: 40px;
    }

    .bar-wrap {
        font-size: 12px;
        margin: 0 auto;
        max-width: 1200px;
        position: relative;
        width: 95%;
        display: flex;
        justify-content: center;
        align-content: center;
    }

    .links {
        float: left;
        list-style: none outside none;
        position: relative;
        
    }
    .links li {
        float: left;
        margin-right: 10px;
    }
    .links a {
        color:  #FFFFFF;
        letter-spacing: 1px;
        text-decoration: none;
        opacity: 0.8;
    }

`