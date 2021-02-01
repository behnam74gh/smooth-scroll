import React from "react";
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine,
    Heading, Subtitle, BtnWrap, Column2, ImgWrap } from "./InfoElements";
import { Button } from '../ButtonElement';

// import {ReactComponent as CarSvg} from '../../images/car.svg';

const InfoSection = ({lightBg, id, imgStart, img, topLine, lightText, headLine, darkText, description, buttonLabel, primary, dark, dark2}) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headLine}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <Button to="home"
                 smooth={true}
                 duration={500}
                 spy={true}
                 exact='true'
                 offset={-80}
                 primary={primary ? 1 : 0}
                 dark={dark ? 1 : 0}
                 dark2={dark2 ? 1 : 0}
                >{buttonLabel}</Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
           <ImgWrap>
                {img}
           </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
