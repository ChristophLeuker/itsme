/* import Layout from "@/components/layout"; */
import GlobalStyle from "../styles";
import styled from "styled-components";
import Image from "next/image";




export default function App({
  Component,
 
}) {
  const BackgroundContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  `;

  const BackgroundImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;

  return (
    <>
      <BackgroundContainer>
        <BackgroundImage
          src="/Dartboard-background.jpg"
          width={200}
          height={200}
          alt="dartscheibe background"
        />
      </BackgroundContainer>
      
        <GlobalStyle />
        <Component
        
        /></>

   
  );
}
