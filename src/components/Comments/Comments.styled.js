import styled from 'styled-components';

export const StyledTable = styled.div`
overflow: auto;
margin: 100px 50px 100px 50px;

@font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialicons/v50/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
}
  
.MuiIcon-root {
    color: #8BCF21;
}

.material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -moz-font-feature-settings: 'liga';
    -moz-osx-font-smoothing: grayscale;
}

.table {
    width: 100%;
}

`

export const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    overflow: auto;
    margin: 300px 50px;
`