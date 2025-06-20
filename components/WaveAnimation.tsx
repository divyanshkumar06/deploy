import React from 'react';
import styled, { keyframes } from 'styled-components';

const moveForever = keyframes`
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
`;

const Header = styled.div`
  position: relative;
  text-align: center;
  background: #11A0;
  color:"rgba(0, 119, 190, 0.7)";
`;

const InnerHeader = styled.div`
  height: 25vh;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Waves = styled.svg`
  position: relative;
  width: 100%;
  height: 25vh;
  margin-bottom: -7px;
  min-height: 100px;
  max-height: 150px;
`;

const Content = styled.div`
  position: relative;
  height: vh;
  text-align: center;
  background-color: "rgba(0, 119, 190, 0.7)";
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ParallaxUse = styled.use`
  animation: ${moveForever} 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  &:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  &:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  &:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  &:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
`;

const WaveAnimation = () => {
  return (
    <div>
      <Header>
        <InnerHeader>
          <svg
            version="1.1"
            style={{ width: '50px', fill: 'white', paddingRight: '15px', display: 'inline-block', verticalAlign: 'middle' }}
            baseProfile="tiny"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 500 500"
            xmlSpace="preserve"
          >
            <path fill="rgba(0, 119, 190, 0.7)" stroke="#000000" strokeWidth="10" strokeMiterlimit="10" d="M57,283" />
            <g>
             
            </g>
          </svg>
          <h1 style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, letterSpacing: '2px', fontSize: '48px' }}></h1>
        </InnerHeader>
        <div>
          <Waves
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <ParallaxUse xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(0, 119, 190, 0.7)" /> {/* Deep Blue */}
              <ParallaxUse xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(0, 191, 255, 0.5)" /> {/* Light Blue */}
              <ParallaxUse xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(39, 128, 157, 0.3)" /> {/* Light Sky Blue */}
              <ParallaxUse xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(0, 119, 190, 0.9)" /> {/* Darker Blue */}
            </g>
          </Waves>
        </div>
      </Header>
      <Content>
        <p style={{ fontFamily: "'Lato', sans-serif", letterSpacing: '1px', fontSize: '14px', color: '#888888' }}> </p>
      </Content>
    </div>
  );
};

export default WaveAnimation;