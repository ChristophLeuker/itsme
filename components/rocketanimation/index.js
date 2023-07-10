import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const rocketAnimation = keyframes`
0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(-100%);
  }
`;

const RocketImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 20%;
  transform: translateX(-50%);
  animation: ${rocketAnimation} 1s linear forwards;
  z-index: 2;
`;

const RocketAnimation = () => {
  const [showRocket, setShowRocket] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRocket(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <>{showRocket && <RocketImage src="/rocket2.png" alt="Rocket" />}</>;
};

export default RocketAnimation;
