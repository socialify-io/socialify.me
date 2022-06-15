import React from 'react';
import { Start, Mockups, About, Title, Description, DownloadBtn, Container } from './StartElements';

const lightMockup = {
    height: '600px',
    zIndex: 1,
    paddingRight: '10px',
}

const darkMockup = {
    height: '80%',
    zIndex: 2,
    position: 'absolute',
    bottom: 0,
}

const StartPage = () => {
    return (
        <>
            <Start>
                <Container>
                <About>
                    <Title>
                       Put communities together 
                    </Title>
                    <Description>
                        Priority of Socialify is to create safe environment for communities. Meet with friends, learn with classmates or work&nbsp;with co-workers - all fully end-to-end encrypted.
                    </Description>
                    <DownloadBtn>
                        Download
                    </DownloadBtn>
                </About>
                <Mockups>
                    <img style={lightMockup} src="/images/mockups/mockup-light.png" alt="light-mockup" />
                    <img style={darkMockup} src="/images/mockups/mockup-dark.png" alt="dark-mockup" />
                </Mockups>
                </Container>
            </Start>
        </>
    )
}

export default StartPage;