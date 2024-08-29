import styled from "styled-components";

export const HeroContainer = styled.section`
  height: 90vh;
  background-image: url("/fondo.jpg");
  background-size: revert;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;
  text-align: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px;
  border-radius: 20px;
`;

export const HeroTitle = styled.h1`
  font-size: 4em;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.9);
  font-family: "Arial", sans-serif;
  letter-spacing: 2px;
  background: none;
  color: #ffffff;
`;

export const HeroSubtitle = styled.h2`
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  font-family: "Courier New", Courier, monospace;
  letter-spacing: 1px;
  background: none;
  color: #ffffff;
`;
