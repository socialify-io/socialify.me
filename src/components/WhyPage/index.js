import React from 'react';
import { Why, Title, DescBlock, Subtitle, Description } from './WhyElements';

const censorshipStyle = {
    height: '500px',
    width: '500px',
    paddingTop: '40px'
}

const surveillanceStyle = {
    height: '450px',
    width: '450px',
}


const WhyPage = () => {
    return (
        <>
        <Why>
            <Title>Why Socialify?</Title>
            <DescBlock>
                <img style={censorshipStyle} src="/images/censorship2.svg" alt="censorship" />
                <Description>
                    <Subtitle>Censorship</Subtitle> 
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus.
                    </p>
                </Description>
            </DescBlock>
            <DescBlock>
                <Description>
                    <Subtitle>Surveillance</Subtitle> 
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus.
                    </p>
                </Description>
                <img style={surveillanceStyle} src="/images/surveillance.svg" alt="surveillance" />
            </DescBlock>
        </Why>
        </>
    )
}

export default WhyPage;