import styled from 'styled-components';

const Wrapper = styled.div `
position:absolute;
width:300px;
height:auto;
background-color: #ffff;
margin-left:-150px;
border-radius: 7px 7px 7px 7px;
/* VIA CSS MATIC https://goo.gl/cIbnS */
-webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
-moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
bottom:100px;
border: 1px  black;
color: #0072ff;
left:50%;
// text-align: center;

h1 {
    margin: 10px 10px 10px 10px;
    padding-top: 25px;
    font-size: 25px;
    color: #474747;
    font-family: 'Bentham', serif;
  }

  ul li {
    height: 30px;
    margin: 10px 10px 10px 10px;
    font-family: 'Playfair Display', serif;
    color: #8d8d8d;
    line-height: 1.5em;
    font-size: 15px;
    font-weight: lighter;
    overflow: hidden;
  }

`



export default {
    Wrapper,
};