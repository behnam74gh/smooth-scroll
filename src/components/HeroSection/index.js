import React, { useState } from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1,
    HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElement';
import Video from '../../videos/video-2.mp4';

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHoverHandler = () => setHover(!hover)

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for a new accoun today and recive $250 in credit towards your next payment
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup'
                     onMouseEnter={onHoverHandler}
                     onMouseLeave={onHoverHandler}
                     primary='true'
                     dark='true'
                    >
                        Get Start {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection