import styled from  'styled-components';

export const Why = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    font-family: 'Poppins', sans-serif;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Title = styled.h1`
    padding: 30px 0 8px;
    font-size: 2.5rem;
    text-align: center;
    width: 100%;

    &:before {
        content: "";
        position: absolute;
        left: 50%;
        top: 90px;
        width: 150px;
        height: 8px;
        transform: skew(-12deg) translateX(-50%);
        background: #1A78C2A0;
        z-index: -1;
    }
`

export const DescBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    position: relative;
    bottom: 50px;
    justify-content: center;
    align-items: center;
    z-index: -1;
`

export const Subtitle = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 20px;
    width: 100%;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
` 

export const Description = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
    width: 450px;
    margin-top: -10px;
    text-align: center;
    margin-left: 60px;
    font-family: 'Poppins', sans-serif;
`