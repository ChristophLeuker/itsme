import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

const rocketAnimation = keyframes`
0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(-100%);
  }
`;

const RocketImage = styled(Image)`
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

  return (
    <>
      {showRocket && (
        <RocketImage src="/rocket2.png" alt="Rocket" width={200} height={500} />
      )}
    </>
  );
};

export default RocketAnimation;
