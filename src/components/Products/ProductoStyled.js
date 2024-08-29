import styled from "styled-components";

export const BebidasContainer = styled.section`
  padding: 20px;
  color: #fff;
  text-align: center;

  h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #ffcc00;
    font-family: "Courier New", Courier, monospace;
  }
`;

export const BebidaCard = styled.div`
  background: #444;
  border-radius: 8px;
  overflow: hidden;
  width: 250px;
  height: 350px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }
`;

export const BebidaImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s;
`;

export const BebidaInfo = styled.div`
  padding: 15px;
  text-align: left;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  opacity: 0; /* Oculta el texto por defecto */
  transition: opacity 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2; /* Asegura que el texto esté sobre la imagen */

  ${BebidaCard}:hover & {
    opacity: 1; /* Muestra el texto al hacer hover */
  }
`;

export const BebidaTitle = styled.h3`
  font-size: 1.5em;
`;

export const BebidaDescription = styled.p`
  margin: 0 0 10px 0;
`;

export const BebidaPrice = styled.span`
  font-size: 1.2em;
  font-weight: bold;
  color: #ffcc00;
`;

export const BebidasGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
