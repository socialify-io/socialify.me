import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Start = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top right, #2B89D3, #6FCDF7);
    /* background-color: red; */
`

export const Mockups = styled.div`
    display: flex;
    position: relative;
    height: 100%;
    width: 40%;
    margin: 40px 160px 40px 0;
    justify-content: flex-end;
`

export const About = styled.div`
    height: 100%;
    width: 70%;
    margin: 130px 0 40px 160px;
`

export const Title = styled.h1`
    z-index: 3;
    font-family: 'Poppins', sans-serif;
    font-size: 3rem;
    margin-bottom: -20px;
    line-height: 1.2;
    text-transform: uppercase;
    color: #fff;
`

export const Description = styled.p`
    z-index: 3;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 1.4rem;
    color: #fff;
`

export const DownloadBtn = styled(Link)`
    border-radius: 50px;
    background-color: #fff;
    color: #2B89D3;
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    padding: 10px 20px;
    margin-top: 20px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    z-index: 3;
    cursor: pointer;
    &:hover {
        background-color: #2B89D3;
        color: #fff;
    }
`
